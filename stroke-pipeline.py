# -*- coding: utf-8 -*-
"""Letter strokes that flow like a pen.

The earlier version counted a pixel's 8-neighbours to find junctions, which
mistakes every diagonal staircase for a fork: ka reported 182 junctions and
shattered into a dozen fragments. Junctions are found with the crossing
number instead, which gives ka its real 3 junctions and 3 endpoints."""
import numpy as np
from skel import raster, thin, prune, components, neighbours, rdp

RING = [(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1)]

def crossing(p, S):
    v = [1 if (p[0]+dy, p[1]+dx) in S else 0 for dy, dx in RING]
    return sum(1 for i in range(8) if v[i] == 0 and v[(i+1) % 8] == 1)

def segments(comp):
    """Split a component at true junctions into simple arcs.
       Every pixel-to-pixel link is consumed exactly once, so nothing is
       left untraced and the walk always terminates."""
    S = set(comp)
    nodes = {p for p in S if crossing(p, S) != 2}
    if not nodes:
        nodes = {min(S, key=lambda p: (p[0], p[1]))}       # closed loop: cut once
    links = set()
    for p in S:
        for q in neighbours(p, S):
            links.add(frozenset((p, q)))

    def walk(a, b):
        path = [a, b]; links.discard(frozenset((a, b))); cur = b
        while cur not in nodes:
            nxt = [r for r in neighbours(cur, S) if frozenset((cur, r)) in links]
            if not nxt: break
            r = nxt[0]; links.discard(frozenset((cur, r)))
            path.append(r); cur = r
        return path

    out = []
    for n in nodes:
        for q in neighbours(n, S):
            if frozenset((n, q)) in links:
                out.append(walk(n, q))
    while links:                                            # leftover pure loops
        a, b = tuple(next(iter(links)))
        out.append(walk(a, b))
    return [p for p in out if len(p) >= 3]

def _dir(path, at_end):
    k = min(8, len(path)-1)
    a, b = (path[-1-k], path[-1]) if at_end else (path[k], path[0])
    v = np.array([b[0]-a[0], b[1]-a[1]], float)
    n = np.hypot(*v)
    return v/n if n else v

def chain(segs, thresh=-0.1):
    """Join arcs through junctions, following the smoothest continuation,
       so one pen movement stays one stroke."""
    segs = [list(s) for s in segs]
    used = [False]*len(segs)
    out = []
    for i in range(len(segs)):
        if used[i]: continue
        used[i] = True
        cur = segs[i]
        grew = True
        while grew:
            grew = False
            for j in range(len(segs)):
                if used[j]: continue
                for a in (cur, cur[::-1]):
                    for b in (segs[j], segs[j][::-1]):
                        if a[-1] != b[0]: continue
                        if float(np.dot(_dir(a, True), _dir(b, False))) > thresh:
                            cur = a + b[1:]; used[j] = True; grew = True
                            break
                    if grew: break
                if grew: break
        out.append(cur)
    return out

def cap_strokes(strokes, limit):
    """A pen writes a letter in two or three movements. Join the closest
       remaining pairs until we are inside that budget."""
    S = [list(s) for s in strokes]
    while len(S) > limit:
        best = None
        for a in range(len(S)):
            for b in range(len(S)):
                if a == b: continue
                for pa in (S[a], S[a][::-1]):
                    for pb in (S[b], S[b][::-1]):
                        d = np.hypot(pa[-1][0]-pb[0][0], pa[-1][1]-pb[0][1])
                        if best is None or d < best[0]:
                            best = (d, a, b, pa, pb)
        if best is None: break
        _, a, b, pa, pb = best
        S[a] = pa + pb
        S.pop(b)
    return S

def letter(ch):
    img = raster(ch)
    ys, xs = np.nonzero(img)
    if len(ys) == 0: return None
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    H, W = max(y1-y0, 1), max(x1-x0, 1)
    pix = prune([(int(y), int(x)) for y, x in zip(*np.nonzero(thin(img)))],
                int(max(H, W)*0.10))
    if not pix: return None

    band = y0 + H*0.20
    def is_matra(s):
        yv = [p[0] for p in s]; xv = [p[1] for p in s]
        return (np.median(yv) <= band and (max(yv)-min(yv)) <= 0.06*H
                and (max(xv)-min(xv)) > 0.30*W)

    body, matra = [], []
    for c in components(pix):
        if len(c) < 8: continue
        segs = segments(c)
        matra += [s for s in segs if is_matra(s)]
        rest  = [s for s in segs if not is_matra(s)]
        for s in chain(rest):
            L = sum(np.hypot(s[i+1][0]-s[i][0], s[i+1][1]-s[i][1]) for i in range(len(s)-1))
            if L < 0.09*max(H, W): continue
            if s[0][0] > s[-1][0]: s = s[::-1]          # strokes run downward
            body.append(s)
    body.sort(key=lambda s: min(p[1] for p in s))
    body = cap_strokes(body, 3 if not matra else 2)

    m = None
    if matra:
        pts = [p for e in matra for p in e]
        my = int(np.median([p[0] for p in pts]))
        m = [(my, min(p[1] for p in pts)), (my, max(p[1] for p in pts))]

    def enc(ln):
        pts = rdp([(p[1], p[0]) for p in ln], 1.3)
        sx = lambda v: round((v-x0)/W*100, 1)
        sy = lambda v: round((v-y0)/H*100, 1)
        return "M" + " L".join(f"{sx(x)} {sy(y)}" for x, y in pts)
    return {"body": [enc(s) for s in body], "matra": enc(m) if m else None}
