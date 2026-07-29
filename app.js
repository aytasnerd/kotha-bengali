/* ==========================================================================
   Kotha app engine. Hash-routed SPA, localStorage progress, browser TTS,
   sign-in, script lab with tracing, guides, writing, games.
   ========================================================================== */
'use strict';

/* ---------- custom icon set (stroke, no emoji) ---------- */
const IC={
  home:'<path d="M4 11 12 4l8 7"/><path d="M6 10v9h5v-5h2v5h5v-9"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2z"/><path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2z"/>',
  pen:'<path d="M4 20h5l10-10-5-5L4 15z"/><path d="M13 6l5 5"/>',
  feather:'<path d="M20 4C11 4 5 10 4 20l6-6"/><path d="M9.5 14.5H16"/>',
  chart:'<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 17v-5"/><path d="M13 17V8"/><path d="M18 17v-8"/>',
  speaker:'<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  back:'<path d="M15 5 8 12l7 7"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/>',
  moon:'<path d="M20 14A8 8 0 1 1 10 4a6.5 6.5 0 0 0 10 10z"/>',
  star:'<path d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6z"/>',
  cards:'<rect x="3" y="8" width="13" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>',
  dice:'<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.1"/><circle cx="15" cy="15" r="1.1"/><circle cx="15" cy="9" r="1.1"/><circle cx="9" cy="15" r="1.1"/>',
  people:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M20.5 19a5.5 5.5 0 0 0-4-5.3"/>',
  bolt:'<path d="M13 3 5 13h6l-1 8 8-11h-6z"/>',
  link:'<path d="M9.5 14.5 14.5 9.5"/><path d="M11 6.5 12 5.5a4 4 0 0 1 5.6 5.6l-1 1"/><path d="M13 17.5l-1 1a4 4 0 0 1-5.6-5.6l1-1"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z"/>',
};
function icon(n,extra){ return `<svg class="icn ${extra||''}" viewBox="0 0 24 24" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]||''}</svg>`; }
const SPK = icon('speaker');
const GLOGO = '<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';

/* ---------- theme (light/dark x indigo/red) ---------- */
const THEME_KEY='kotha.theme', ACCENT_KEY='kotha.accent';
function curTheme(){ return localStorage.getItem(THEME_KEY)||'light'; }
function curAccent(){ return localStorage.getItem(ACCENT_KEY)||'indigo'; }
function applyTheme(){ const r=document.documentElement; r.dataset.theme=curTheme(); r.dataset.accent=curAccent(); }
function renderThemeCtl(){ const el=document.getElementById('themectl'); if(!el) return;
  el.innerHTML=`<button class="tbtn" id="ttheme" title="Light or dark">${icon(curTheme()==='dark'?'sun':'moon')}</button>
    <button class="tbtn accent-dot" id="taccent" title="Accent colour"></button>`;
  el.querySelector('#ttheme').onclick=()=>{ localStorage.setItem(THEME_KEY,curTheme()==='light'?'dark':'light'); applyTheme(); renderThemeCtl(); };
  el.querySelector('#taccent').onclick=()=>{ localStorage.setItem(ACCENT_KEY,curAccent()==='indigo'?'red':'indigo'); applyTheme(); renderThemeCtl(); };
}

/* ---------- story track + name personalization ---------- */
function getTrack(){ return TRACKS.find(t=>t.id===state.track)||null; }
function protName(){ const t=getTrack(); return t?t.name:'Kabir'; }
function PZ(s){ if(!s) return s; const t=getTrack(); if(!t||t.id==='love') return s;
  return s.split('Kabir').join(t.name).split('কবির').join(t.nameSc).split('kobir').join(t.namePh); }
function pzPhrase(p){ return {r:PZ(p.r), sc:PZ(p.sc), en:PZ(p.en), ph:PZ(p.ph), words:p.words}; }
function setTrack(id){ state.track=id; save(); if(location.hash==='#/story') router(); else location.hash='#/story'; }

/* ---------- state ---------- */
const KEY = 'kotha.v1';
function today(){ const d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
const state = load();
function load(){
  let s={};
  try{ s = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){}
  const st = {
    learned:new Set(s.learned||[]), words:new Set(s.words||[]), days:new Set(s.days||[]),
    newToday:s.newToday||0, revisited:s.revisited||0, seconds:s.seconds||0,
    date:s.date||today(), user:s.user||null, track:s.track||null,
    srs:s.srs||{}, streak:s.streak||{n:0,best:0,last:null,freeze:1}, daily:s.daily||{date:today(),done:0,goal:12}, hist:s.hist||{},
  };
  if(st.date!==todayStr()){ st.newToday=0; st.revisited=0; st.date=todayStr(); }
  return st;
}
function save(){
  localStorage.setItem(KEY, JSON.stringify({
    learned:[...state.learned], words:[...state.words], days:[...state.days],
    newToday:state.newToday, revisited:state.revisited, seconds:state.seconds,
    date:state.date, user:state.user, track:state.track,
    srs:state.srs, streak:state.streak, daily:state.daily, hist:state.hist,
  }));
}
function collectWord(r){ if(r && !state.words.has(r)){ state.words.add(r); save(); } }
function enrol(r){ collectWord(r); srsAdd('w',r); save(); }
function learnPhrase(id){
  if(!state.learned.has(id)){ state.learned.add(id); state.newToday++; } else state.revisited++;
  (PHRASES[id].words||[]).forEach(enrol); srsAdd('p',id); save();
}

/* ---------- helpers ---------- */
const $ = (s,el=document)=>el.querySelector(s);
const app = ()=>document.getElementById('view');
const norm = s => s.toLowerCase().replace(/[.,?!]/g,'').trim();
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),1700); }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ---------- audio ---------- */
let bnVoice=null;
function pickVoice(){ const vs=speechSynthesis.getVoices(); bnVoice = vs.find(v=>/bn|bengali|bangla/i.test(v.lang+v.name)) || vs.find(v=>/hi-IN|hi_IN/i.test(v.lang)) || null; }
if('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
let voiceWarned=false;
function voiceReady(){ return !!bnVoice; }
function speak(text){ if(!('speechSynthesis' in window)){ toast('Audio is not available in this browser'); return; }
  if(!bnVoice && !voiceWarned){ voiceWarned=true;
    toast('No Bengali voice on this device. Settings, Accessibility, Spoken Content, Voices.'); }
  speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang='bn-IN'; u.rate=.82; if(bnVoice) u.voice=bnVoice; speechSynthesis.speak(u); }

/* ---------- tappable words ---------- */
function tapify(roman, keys){
  if(!keys||!keys.length) return escapeHtml(roman);
  let html = escapeHtml(roman); const seen=new Set();
  keys.forEach(k=>{
    if(seen.has(k)) return; seen.add(k);
    if(!WORDS.find(x=>x.r===k)) return;
    const pat = k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/_/g,'\\s+');
    let re; try{ re=new RegExp('(?<![\\p{L}])('+pat+')(?![\\p{L}])','iu'); }
    catch(_){ re=new RegExp('\\b('+pat+')\\b','i'); }
    html = html.replace(re, m=>`<span class="word" data-w="${k}">${m}</span>`);
  });
  return html;
}
document.addEventListener('click', e=>{ const w=e.target.closest('.word'); if(w) openWord(w.dataset.w); });

function openWord(r){
  const w = WORDS.find(x=>x.r===r); if(!w) return; collectWord(r);
  const seen = Object.values(PHRASES).filter(p=>(p.words||[]).includes(r)).slice(0,4);
  const ov=$('#pop');
  ov.innerHTML = `<div class="popover">
    <div class="row"><div>
      <div class="pop-rm">${w.r}</div>
      ${w.ph?`<div class="pop-ph">${w.ph}</div>`:''}
      <div class="pop-sc">${w.sc}</div>
      <div class="pop-en">${w.en}</div>
    </div><button class="x" aria-label="close">&times;</button></div>
    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
      <button class="speak-btn" data-say="${w.sc}">${SPK} Listen</button>
      <button class="btn btn-primary btn-sm" id="addrev">${state.srs['w:'+r+':r']?'In your reviews':'Add to review'}</button></div>
    ${w.note?`<div class="pop-note">${w.note}</div>`:''}
    ${seen.length?`<div class="pop-seen"><h5>Where it turns up</h5>${seen.map(p=>`<div class="ex"><span class="bn">${p.r}</span> ${p.en}</div>`).join('')}</div>`:''}
  </div>`;
  ov.classList.add('open');
  $('.x',ov).onclick=()=>ov.classList.remove('open');
  $('.speak-btn',ov).onclick=e=>speak(e.currentTarget.dataset.say);
  const ab=$('#addrev',ov);
  if(ab) ab.onclick=()=>{ enrol(r); ab.textContent='In your reviews'; toast('Added to your reviews'); };
  ov.onclick=e=>{ if(e.target===ov) ov.classList.remove('open'); };
}

/* ---------- prose renderer for guides / blog ---------- */
function renderProse(body){
  const lines=body.split('\n'); let html='', para=[];
  const flush=()=>{ if(para.length){ html+=`<p>${para.join(' ')}</p>`; para=[]; } };
  lines.forEach(ln=>{ const t=ln.trim();
    if(!t){ flush(); return; }
    if(t.includes(' | ')){ flush(); const [r,sc,en]=t.split('|').map(s=>s.trim());
      html+=`<div class="ex-row"><button class="ex-say" data-say="${sc}">${SPK}</button><span class="ex-r">${escapeHtml(r)}</span><span class="ex-sc">${sc}</span><span class="ex-en">${escapeHtml(en)}</span></div>`;
    } else para.push(escapeHtml(t));
  });
  flush(); return html;
}
function wireSay(scope){ (scope||document).querySelectorAll('[data-say]').forEach(b=>{ if(b._s) return; b._s=1; b.addEventListener('click',()=>speak(b.dataset.say)); }); }

/* ---------- account / sign-in ---------- */
function renderAccount(){
  const el=$('#account'); if(!el) return;
  if(state.user){ el.innerHTML=`<span class="acct"><span class="acct-av">${escapeHtml(state.user.name[0])}</span><button class="acct-out" id="signout">Sign out</button></span>`;
    $('#signout').onclick=()=>{ state.user=null; save(); renderAccount(); toast('Signed out'); };
  } else { el.innerHTML=`<button class="btn btn-primary btn-sm" id="signin">Sign in</button>`; $('#signin').onclick=openSignin; }
}
function openSignin(){
  const ov=$('#pop');
  ov.innerHTML=`<div class="popover signin">
    <button class="x" aria-label="close">&times;</button>
    <h3 style="margin-bottom:4px">Sign in to Kotha</h3>
    <p class="muted" style="font-size:.95rem">The whole library is open without an account. Signing in only saves the story, your progress, and your word album for next time. No password to invent.</p>
    <button class="gbtn" id="gbtn">${GLOGO}<span>Continue with Google</span></button>
    <p class="signin-note">This build signs you in locally on this device so you can try the flow. To connect real Google sign-in, drop a Google Identity client ID into the sign-in hook (see README.md).</p>
  </div>`;
  ov.classList.add('open');
  $('.x',ov).onclick=()=>ov.classList.remove('open');
  ov.onclick=e=>{ if(e.target===ov) ov.classList.remove('open'); };
  $('#gbtn',ov).onclick=()=>{ state.user={name:'Kabir', email:'you@example.com'}; save(); ov.classList.remove('open'); renderAccount(); toast('Signed in. Your progress will be saved.'); };
}



/* ==================== Memory engine ====================
   SM-2 spaced repetition with ease factors (Wozniak), Anki style
   four button grading, short learning steps for new material,
   separate ledgers for recognition and production (encoding
   specificity), interleaved queues, interval fuzz so reviews do not
   clump, leech detection, a daily new card cap, and a forgiving
   streak. Retrieval always comes before the answer (testing effect).  */
const DAY=864e5;
const NEW_CAP=15;             // new items introduced per day
const LEECH=5;                // misses before an item is flagged
function dstr(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function todayStr(){ return dstr(new Date()); }
function addDays(n){ const d=new Date(); d.setDate(d.getDate()+Math.max(0,Math.round(n))); return dstr(d); }
function fuzz(i){ if(i<2) return i; const j=Math.max(1,Math.round(i*0.15)); return i+(Math.floor(Math.random()*(2*j+1))-j); }
/* key: type:id:dir   dir = r (recognition, Bengali to English) | p (production, English to Bengali) */
function sk(type,id,dir){ return type+':'+id+':'+dir; }
function srsAdd(type,id){
  ['r','p'].forEach(dir=>{ const k=sk(type,id,dir);
    if(!state.srs[k]) state.srs[k]={ef:2.5,n:0,iv:0,due:todayStr(),step:0,seen:0,miss:0,新:1}; });
}
function srsGrade(type,id,dir,q){       // q: 0 again, 1 hard, 2 good, 3 easy
  const k=sk(type,id,dir);
  const it=state.srs[k]||(state.srs[k]={ef:2.5,n:0,iv:0,due:todayStr(),step:0,seen:0,miss:0});
  it.seen++; delete it['新'];
  if(q===0){
    it.miss++; it.n=0; it.step=0; it.due=todayStr();
    it.iv=it.iv>=21?Math.max(1,Math.round(it.iv*0.4)):0;
    it.ef=Math.max(1.3,it.ef-0.2);
    if(it.miss>=LEECH) it.leech=1;
  } else {
    if(it.step<2 && it.n===0){         // learning steps, same day
      it.step++;
      if(it.step<2){ it.due=todayStr(); }
      else { it.n=1; it.iv=q===3?4:1; it.due=addDays(it.iv); it.relearn=0; }
    } else {
      it.n++;
      it.iv = it.n<=1 ? (q===3?4:1)
            : q===1 ? Math.max(it.iv+1, Math.round(it.iv*1.2))
            : it.n===2 ? (q===3?9:6)
            : Math.round(it.iv*it.ef*(q===3?1.3:1));
      it.iv = Math.max(1,fuzz(it.iv));
      it.due=addDays(it.iv); it.relearn=0;
    }
    it.ef=Math.min(2.8,Math.max(1.3, it.ef + (0.1-(3-q)*(0.08+(3-q)*0.02))));
    if(it.iv>=21){ it.leech=0; it.miss=0; }
  }
  bumpDaily(); save();
}
function allItems(){ const o=[]; for(const k in state.srs){ const [type,id,dir]=k.split(':'); o.push({k,type,id,dir,it:state.srs[k]}); } return o; }
function dueList(){
  const t=todayStr();
  const items=allItems().filter(x=>x.it.due<=t);
  const fresh=items.filter(x=>x.it['新']).slice(0,NEW_CAP);
  const old=items.filter(x=>!x.it['新']);
  // interleave: alternate direction and pack so practice is varied, not blocked
  const mixed=shuffle(old);
  const out=[]; const A=mixed, B=shuffle(fresh);
  while(A.length||B.length){ if(A.length) out.push(A.shift()); if(A.length) out.push(A.shift()); if(B.length) out.push(B.shift()); }
  return out;
}
function dueCount(){ return dueList().length; }
const uniq=a=>new Set(a.map(x=>x.type+':'+x.id)).size;
function matureCount(){ return uniq(allItems().filter(x=>x.it.iv>=21)); }
function knownCount(){ return uniq(allItems().filter(x=>x.it.iv>=7)); }
function leeches(){ return allItems().filter(x=>x.it.leech); }
function forecast(days){
  const out=[]; for(let i=0;i<days;i++){ const d=addDays(i);
    out.push(allItems().filter(x=>x.it.due===d).length); } return out;
}
function rollDaily(){ const t=todayStr();
  if(state.daily.date!==t){ state.daily={date:t,done:0,goal:state.daily.goal||12}; save(); } }
function bumpDaily(){
  rollDaily(); state.daily.done++;
  state.hist[state.daily.date]=(state.hist[state.daily.date]||0)+1;
  const t=todayStr(), last=state.streak.last;
  if(last!==t){
    if(!last) state.streak.n=1;
    else{ const gap=Math.round((new Date(t)-new Date(last))/DAY);
      if(gap===1) state.streak.n++;
      else if(gap===2 && state.streak.freeze>0){ state.streak.freeze--; state.streak.n++; }
      else state.streak.n=1; }
    state.streak.last=t;
    state.streak.best=Math.max(state.streak.best||0,state.streak.n);
    if(state.streak.n%7===0) state.streak.freeze=Math.min((state.streak.freeze||0)+1,2);
  }
  save();
}
function streakDays(n){ const o=[]; for(let i=n-1;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-i); o.push(dstr(d)); } return o; }

/* ---------- review session ---------- */
let R=null;
function viewReview(){
  rollDaily();
  const q=dueList();
  if(!q.length){
    app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">${icon('back')} Library</span>
      <div class="done-card"><div class="done-mark">${icon('check')}</div><h2>Nothing due</h2>
      <p class="muted">You are clear. Items come back on their own schedule, just before you would forget them.</p>
      <div class="player-actions" style="justify-content:center;margin-top:18px">
        <button class="btn btn-primary" onclick="location.hash='#/story'">Carry on with the story</button>
        <button class="btn btn-ghost" onclick="location.hash='#/album'">Browse words</button></div></div>`;
    return;
  }
  R={q,i:0,ok:0,again:0}; reviewStep();
}
/* labels are produced by running the real scheduler on a copy, so a
   button can never promise an interval the grader will not honour */
function ivLabel(it,q){
  if(q===0) return 'now';
  const c=JSON.parse(JSON.stringify(it)), before=c.due;
  const box={srs:{__t:c}};
  const save0=save; try{
    const t=todayStr();
    let x=c; x.seen++;
    if(x.step<2 && x.n===0){ x.step++;
      if(x.step<2) return 'today';
      x.n=1; x.iv=q===3?4:1;
    } else {
      x.n++;
      x.iv = x.n<=1 ? (q===3?4:1)
           : q===1 ? Math.max(x.iv+1, Math.round(x.iv*1.2))
           : x.n===2 ? (q===3?9:6)
           : Math.round(x.iv*x.ef*(q===3?1.3:1));
      x.iv=Math.max(1,x.iv);
    }
    return x.iv===1?'1 day':x.iv+' days';
  } finally { }
}
function reviewStep(){
  window.scrollTo(0,0);
  if(R.i>=R.q.length){
    const tot=R.total||R.q.length; const acc=tot?Math.round(R.ok/tot*100):0;
    app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">${icon('back')} Library</span>
      <div class="done-card"><div class="done-mark">${icon('check')}</div><h2>${acc}% recalled</h2>
      <p class="muted">${tot} reviewed. What you missed returns today, what you knew moves further out.</p>
      <div class="stat-row" style="margin-top:20px">
        <div class="stat"><div class="big">${state.streak.n}</div><div class="lbl">Day streak</div></div>
        <div class="stat"><div class="big">${state.daily.done}</div><div class="lbl">Today</div></div>
        <div class="stat"><div class="big">${dueCount()}</div><div class="lbl">Still due</div></div>
        <div class="stat"><div class="big">${knownCount()}</div><div class="lbl">Learned</div></div></div>
      <div class="player-actions" style="justify-content:center;margin-top:18px">
        <button class="btn btn-primary" onclick="location.hash='#/library'">Done</button>
        ${dueCount()?`<button class="btn btn-ghost" onclick="location.hash='#/review';router()">Keep going</button>`:''}</div></div>`;
    return;
  }
  const item=R.q[R.i];
  const rec = item.type==='w' ? WORDS.find(w=>w.r===item.id) : PHRASES[item.id];
  if(!rec){ R.i++; return reviewStep(); }
  const pr = item.type==='w' ? rec : pzPhrase(rec);
  const prod = item.dir==='p';
  const pct=Math.round(R.i/R.q.length*100);
  const prompt = prod
    ? `<div class="rung-label"><span class="pip"></span>Produce it in Bengali${item.it.leech?' <span class="leech-tag">tricky one</span>':''}</div>
       <div class="q-en">${escapeHtml(pr.en)}</div><p class="q-hint">Say it out loud before you check.</p>`
    : `<div class="rung-label"><span class="pip"></span>What does this mean?${item.it.leech?' <span class="leech-tag">tricky one</span>':''}</div>
       <div class="q-roman">${escapeHtml(pr.r)}</div><div class="q-sc">${pr.sc}</div>`;
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">${icon('back')} Library</span>
    <div class="game-hud"><span>${R.i+1} of ${R.q.length}</span><span class="score">${prod?'Recall':'Listen'}</span></div>
    <div class="player"><div class="pbar"><i style="width:${pct}%"></i></div>
      ${prompt}
      ${prod?'':`<button class="speak-btn" data-say="${escapeHtml(pr.sc)}">${SPK} Listen</button>`}
      <div id="rev"></div>
      <div class="player-actions" id="acts"><button class="btn btn-teal" id="show">Show answer</button></div></div>`;
  if(!prod){ wireSay(app()); speak(pr.sc); }
  $('#show').onclick=()=>{
    speak(pr.sc);
    $('#rev').innerHTML=`<div class="reveal-box">
        <div class="r">${escapeHtml(pr.r)}</div><div class="s">${pr.sc}</div>
        ${pr.ph?`<div class="q-ph" style="margin-top:4px">${escapeHtml(pr.ph)}</div>`:''}
        <div class="daily-sub">${escapeHtml(pr.en)}</div>
        ${rec.note?`<div class="pop-note" style="margin-top:10px;text-align:left">${escapeHtml(rec.note)}</div>`:''}</div>`;
    $('#acts').innerHTML=`
      <button class="grade g-again" data-q="0">Again<small>${ivLabel(item.it,0)}</small></button>
      <button class="grade g-hard"  data-q="1">Hard<small>${ivLabel(item.it,1)}</small></button>
      <button class="grade g-good"  data-q="2">Good<small>${ivLabel(item.it,2)}</small></button>
      <button class="grade g-easy"  data-q="3">Easy<small>${ivLabel(item.it,3)}</small></button>`;
    $('#acts').querySelectorAll('.grade').forEach(b=>b.onclick=()=>{
      const q=+b.dataset.q; srsGrade(item.type,item.id,item.dir,q);
      if(!item._seen){ item._seen=1; R.total=(R.total||0)+1; if(q>0) R.ok++; }
      if(q===0){ item._again=(item._again||0)+1;
        if(item._again<=2) R.q.splice(Math.min(R.i+4,R.q.length),0,item); }
      R.i++; reviewStep();
    });
  };
}
/* ============================ ROUTER ============================ */
const NAVGROUP = { '':'home', review:'home', library:'home', album:'home', games:'home', game:'home', people:'home',
  guides:'home', guide:'home', story:'learn', day:'learn', scene:'learn',
  script:'script', letter:'script', writing:'writing', post:'writing', progress:'profile' };
function router(){
  let h=location.hash.replace(/^#\/?/,'');
  if(!h && !state.days.size && !state.track){ location.hash='#/story'; return; }
  const [base,arg]=h.split('/'); window.scrollTo(0,0);
  const map={ '':viewLibrary, library:viewLibrary, story:viewStory, album:viewAlbum, games:viewGames,
    people:viewPeople, progress:viewProgress, guides:viewGuides, writing:viewWriting, script:viewScript };
  if(base==='day') viewPlayer(arg);
  else if(base==='game') viewGame(arg);
  else if(base==='guide') viewGuideDetail(arg);
  else if(base==='post') viewPost(arg);
  else if(base==='letter') viewLetter(+arg);
  else if(base==='scene') viewScene(arg);
  else if(base==='review') viewReview();
  else (map[base]||viewLibrary)();
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active', a.dataset.nav===(NAVGROUP[base]||'home')));
  wireSay(app());
}
window.addEventListener('hashchange', router);

/* ============================ VIEWS ============================ */
function wordOfDay(){ const d=new Date(); const doy=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);
  const pool=WORDS.filter(w=>w.pack==='feel'||w.pack==='food'||w.pack==='city'); return pool[doy%pool.length]; }

function viewLibrary(){
  const wod=wordOfDay();
  const nLetters=SCRIPT.vowels.length+SCRIPT.consonants.length+SCRIPT.numerals.length;
  const shelves=[
    {ic:'book', t:'The story',    p:'Sixty days in Kolkata, played one chapter at a time.', c:DAYS.length+' chapters', go:'#/story'},
    {ic:'cards',t:'Word Album',   p:'Every word you meet becomes a card you collect.', c:state.words.size+'/'+WORDS.length+' collected', go:'#/album'},
    {ic:'pen',  t:'Read & write', p:'The Bengali script: read it, hear it, and trace every letter.', c:nLetters+' letters', go:'#/script'},
    {ic:'dice', t:'Games',        p:'Quick rounds built from the words you have met.', c:GAMES.length+' games', go:'#/games'},
    {ic:'people',t:'People',      p:'Everyone speaks to you a little differently.', c:PEOPLE.length+' people', go:'#/people'},
    {ic:'compass',t:'Guides',     p:'Plain explanations of the parts that trip people up.', c:GUIDES.length+' guides', go:'#/guides'},
    {ic:'feather',t:'Writing',    p:'Notes on how the chapters were built, and how to learn to speak.', c:BLOG.length+' essays', go:'#/writing'},
    {ic:'chart',t:'Your progress',p:'Time spent, words held, people met.', c:'', go:'#/progress'},
  ];
  rollDaily();
  const due=dueCount(), goal=state.daily.goal||12, done=state.daily.done||0;
  const ring=Math.min(100,Math.round(done/goal*100));
  app().innerHTML=`
    <div class="app-head"><h1>Library <span class="sc">লাইব্রেরি</span></h1>
      <p>Find your own way in. Every shelf is a door, and the doors connect.</p></div>
    <div class="daily-card">
      <div class="daily-main">
        <div class="daily-streak"><span class="flame">${icon('bolt')}</span><b>${state.streak.n}</b> day${state.streak.n===1?'':'s'} in a row</div>
        <div class="daily-sub">${due? due+' due for review right now' : 'Nothing due. You are clear for today.'}</div>
        <div class="goalbar"><i style="width:${ring}%"></i></div>
        <div class="daily-sub">${done} of ${goal} today${state.streak.freeze?`, ${state.streak.freeze} rest day banked`:''}</div>
      </div>
      <button class="btn btn-primary" id="startrev">${due?'Review '+due:'Practise'}</button>
    </div>
    <div class="today-card">
      <div><div class="sub">Word of the day</div>
        <div class="wod">${wod.r} <span class="sc">${wod.sc}</span></div>
        <div class="gloss">${wod.ph||''} &nbsp; ${wod.en}</div></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="cta" data-say="${wod.sc}">${SPK} Listen</button>
        <button class="cta" onclick="location.hash='#/game/opposites'">60-second game</button></div>
    </div>
    <div class="shelf-grid">${shelves.map(s=>`<button class="shelf" onclick="location.hash='${s.go}'">
      <span class="ico">${icon(s.ic)}</span><h3>${s.t}</h3><p>${s.p}</p>${s.c?`<span class="count">${s.c}</span>`:''}</button>`).join('')}</div>`;
  if($('#startrev')) $('#startrev').onclick=()=>{ location.hash='#/review'; };
}

/* what you can do after each unit, the reason to keep going */
const UNIT_CANDO={
 u1:'introduce yourself, greet an elder properly, and order a cup of tea',
 u2:'take a taxi, say where you live, and follow directions',
 u3:'tell the time, ask a price, and push it down',
 u4:'talk about family and order a full breakfast',
 u5:'sit at her parents table and stay in Bengali',
 u6:'handle the city alone, and face Thakuma',
};
function trackDays(){ const t=state.track||'kabir'; const f=DAYS.filter(d=>(d.tr||'kabir')===t); return f.length?f:DAYS.filter(d=>(d.tr||'kabir')==='kabir'); }
function nextChapter(){ return trackDays().find(d=>!state.days.has(d.id)); }
function chooseStory(){ state.track=null; save(); router(); }
function viewTrackChooser(){
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">${icon('back')} Library</span>
    <div class="app-head"><h1>Choose your story <span class="sc">গল্প বেছে নাও</span></h1>
      <p>Same sixty days in Kolkata, the same people to talk to. Pick the reason that fits you. You can change it any time.</p></div>
    <div class="track-grid">${TRACKS.map(t=>`<button class="track-card ${state.track===t.id?'sel':''}" onclick="setTrack('${t.id}')">
      <div class="tk-label">${escapeHtml(t.label)}</div><div class="tk-tag">${escapeHtml(t.tagline)}</div>
      <p>${escapeHtml(t.who)}</p><div class="tk-rel">${escapeHtml(t.rel)}</div></button>`).join('')}</div>`;
}
function viewStory(){
  if(!state.track) return viewTrackChooser();
  const t=getTrack(), nx=nextChapter();
  const done=trackDays().filter(d=>state.days.has(d.id)).length;
  const TD=trackDays();
  const sections=UNITS.map(u=>{
    const days=TD.filter(d=>d.unit===u.id); if(!days.length) return '';
    const ud=days.filter(d=>state.days.has(d.id)).length;
    const nodes=days.map(d=>{
      const isDone=state.days.has(d.id), isNext=nx&&nx.id===d.id;
      return `<button class="node ${isDone?'done':''} ${d.milestone?'mile':''} ${isNext?'next':''}" onclick="location.hash='#/day/${d.id}'">
        <span class="dot">${d.day}</span>
        <span class="body"><h4>${escapeHtml(d.title)}${d.milestone?'<span class="tagpill">milestone</span>':isNext?'<span class="tagpill">next up</span>':''}</h4>
        <span class="meta">${escapeHtml(d.place)}. ${escapeHtml(d.person)}</span></span></button>`;
    }).join('');
    return `<div class="unit-head"><div><span class="unit-bn script">${u.bn}</span><h3>${escapeHtml(u.title)}</h3></div>
        <span class="unit-prog">${ud}/${days.length}</span></div>
      ${UNIT_CANDO[u.id]?`<div class="cando"><h5>After this unit you can</h5><p>${UNIT_CANDO[u.id]}</p></div>`:''}
      <div class="path">${nodes}</div>`;
  }).join('');
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">${icon('back')} Library</span>
    ${nx?`<div class="continue-card">
        <div><div class="cc-sub">Day ${nx.day}, next up</div><h3>${escapeHtml(nx.title)}</h3>
          <div style="opacity:.9;font-size:.9rem">${escapeHtml(nx.place)}. With ${escapeHtml(nx.person)}.</div></div>
        <button class="btn" onclick="location.hash='#/day/${nx.id}'">Continue</button></div>`
      :`<div class="continue-card"><div><div class="cc-sub">The whole story</div><h3>You finished it</h3></div></div>`}
    <div class="track-strip"><span>Playing as <b>${escapeHtml(t.name)}</b>. ${done} of ${trackDays().length} chapters done.</span>
      <button class="mini-link" onclick="chooseStory()">Change story</button></div>
    ${sections}`;
}
/* ---------- player ---------- */
let P=null;
function viewPlayer(id){ const day=DAYS.find(d=>d.id===id); if(!day) return viewStory();
  const steps=[{type:'scene'}];
  day.phrases.forEach(pid=>{ steps.push({type:'expose',pid},{type:'recognize',pid},{type:'build',pid},{type:'free',pid}); });
  if(DIALOGUES[day.id]) steps.push({type:'dialogue'});
  steps.push({type:'done'});
  P={day,steps,i:0,t0:Date.now()}; renderStep();
}
function pct(){ return Math.round(P.i/(P.steps.length-1)*100); }
function nextStep(){ P.i++; renderStep(); wireSay(app()); }
function renderStep(){
  window.scrollTo(0,0);
  const s=P.steps[P.i], day=P.day;
  const shell=inner=>`<span class="crumb" onclick="location.hash='#/story'">All chapters</span>
    <div class="scene ${day.milestone?'scene-gold':''}"><div class="where">Day ${day.day}. ${day.place}</div><h2>${day.title}</h2></div>
    <div class="player"><div class="pbar"><i style="width:${pct()}%"></i></div>${inner}</div>`;

  if(s.type==='scene'){ const paras=Array.isArray(day.scene)?day.scene:[day.scene];
    app().innerHTML=shell(`${day.milestone?'<div class="milestone-banner">Milestone chapter</div>':''}
      <div class="rung-label"><span class="pip"></span>The scene</div>
      ${paras.map(p=>`<p style="font-size:1.1rem;color:var(--text-body);margin-bottom:16px">${escapeHtml(PZ(p))}</p>`).join('')}
      ${day.source?`<div class="src-note">From <b>${escapeHtml(day.source)}</b> by Rabindranath Tagore. This chapter is an original scene written for learners, set in that story.</div>`:''}
      <div class="player-actions"><button class="btn btn-teal" id="go">Start the scene</button></div>`);
    $('#go').onclick=nextStep; return; }

  if(s.type==='done'){ const first=!state.days.has(day.id); state.days.add(day.id);
    day.phrases.forEach(learnPhrase);
    (CHAPTER_PACK[day.id]||[]).forEach(pk=>{
      shuffle(WORDS.filter(w=>w.pack===pk && !state.srs['w:'+w.r+':r'])).slice(0,14).forEach(w=>enrol(w.r));
    });
    state.seconds+=Math.min(900,Math.round((Date.now()-P.t0)/1000));
    if(first) bumpDaily(); save();
    app().innerHTML=shell(`<div class="done-card"><div class="done-mark"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div><h2>Chapter done</h2>
      <p class="muted">You worked through ${day.phrases.length} phrases with ${day.person}. ${first?'New cards were added to your album.':'A review. They will come back later, spaced out.'}</p>
      <div class="player-actions" style="justify-content:center;margin-top:20px">
        <button class="btn btn-primary" onclick="location.hash='#/story'">Back to the story</button>
        <button class="btn btn-ghost" onclick="location.hash='#/album'">See the album</button></div></div>`);
    return; }

  if(s.type==='dialogue'){ const lines=DIALOGUES[day.id];
    app().innerHTML=shell(`<div class="rung-label"><span class="pip"></span>In the scene. The whole conversation</div>
      <div class="dlg">${lines.map(l=>`<div class="dline ${l.who==='Kabir'?'me':''}">
        <div class="dwho">${escapeHtml(PZ(l.who))}</div>
        <div class="dbody"><button class="ex-say" data-say="${PZ(l.sc)}">${SPK}</button>
          <div class="dr">${escapeHtml(PZ(l.r))}</div><div class="dsc">${PZ(l.sc)}</div><div class="den">${escapeHtml(PZ(l.en))}</div></div></div>`).join('')}</div>
      <div class="player-actions"><button class="btn btn-teal" id="go">Finish chapter</button></div>`);
    $('#go').onclick=nextStep; return; }

  const p=pzPhrase(PHRASES[s.pid]);
  if(s.type==='expose'){
    app().innerHTML=shell(`<div class="rung-label"><span class="pip"></span>Meet the phrase</div>
      <div class="q-en">${escapeHtml(p.en)}</div>
      <div class="q-sc">${p.sc}</div>
      <div class="q-roman">${tapify(p.r,p.words)}</div>
      ${p.ph?`<div class="q-ph">${p.ph}</div>`:''}
      <button class="speak-btn" data-say="${p.sc}">${SPK} Listen</button>
      <p class="q-hint" style="margin-top:16px">Tap any underlined word to open it, then say the line out loud.</p>
      <div class="player-actions"><button class="btn btn-teal" id="go">Got it</button></div>`);
    $('.speak-btn').onclick=()=>speak(p.sc); $('#go').onclick=nextStep; speak(p.sc); return; }

  if(s.type==='recognize'){
    const opts=shuffle([p.en, ...shuffle(Object.values(PHRASES).map(x=>PZ(x.en)).filter(e=>e!==p.en)).slice(0,3)]);
    app().innerHTML=shell(`<div class="rung-label"><span class="pip"></span>What did that mean?</div>
      <div class="q-roman">${escapeHtml(p.r)}</div>
      <button class="speak-btn" data-say="${p.sc}">${SPK} Listen again</button>
      <div class="opts" id="opts">${opts.map(o=>`<button class="opt">${escapeHtml(o)}</button>`).join('')}</div><div id="fb"></div>`);
    $('.speak-btn').onclick=()=>speak(p.sc); speak(p.sc);
    $('#opts').querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
      const opts=$('#opts').querySelectorAll('.opt'); opts.forEach(x=>x.style.pointerEvents='none');
      if(b.textContent===p.en){ b.classList.add('correct'); srsGrade('p',s.pid,'r',2); $('#fb').innerHTML=`<div class="feedback ok">Right.</div>`; setTimeout(nextStep,650); }
      else { b.classList.add('wrong'); srsGrade('p',s.pid,'r',0); opts.forEach(x=>{ if(x.textContent===p.en) x.classList.add('correct'); }); $('#fb').innerHTML=`<div class="feedback no">The right one is highlighted. Moving on.</div>`; setTimeout(nextStep,1300); }
    }); return; }

  if(s.type==='build'){
    const tokens=p.r.replace(/[.?!,]/g,'').split(/\s+/); const pool=shuffle(tokens.map((t,i)=>({t,i})));
    app().innerHTML=shell(`<div class="rung-label"><span class="pip"></span>Build it</div>
      <div class="q-en">${escapeHtml(p.en)}</div><div class="q-sc" style="font-size:1.15rem;opacity:.75">${p.sc}</div>
      <div class="answer-slot" id="slot"></div>
      <div class="tiles" id="pool">${pool.map(o=>`<button class="tile" data-i="${o.i}">${escapeHtml(o.t)}</button>`).join('')}</div>
      <div id="fb"></div><div class="player-actions"><button class="btn btn-ghost btn-sm" id="clear">Clear</button></div>`);
    const chosen=[], slot=$('#slot'), fb=$('#fb');
    const refresh=()=>{ slot.innerHTML=chosen.map(c=>`<span class="tile">${escapeHtml(c.t)}</span>`).join('');
      if(chosen.length===tokens.length){ const ok=chosen.map(c=>norm(c.t)).join(' ')===tokens.map(norm).join(' ');
        if(ok){ srsGrade('p',s.pid,'p',2); fb.innerHTML=`<div class="feedback ok">${escapeHtml(p.r)}. That is it.</div>`; speak(p.sc); setTimeout(nextStep,900); }
        else fb.innerHTML=`<div class="feedback no">Not quite. Tap Clear and try the order again.</div>`;
      } else fb.innerHTML=''; };
    $('#pool').querySelectorAll('.tile').forEach(b=>b.onclick=()=>{ b.classList.add('used'); chosen.push({t:b.textContent}); refresh(); });
    $('#clear').onclick=()=>{ chosen.length=0; $('#pool').querySelectorAll('.tile').forEach(x=>x.classList.remove('used')); refresh(); };
    return; }

  if(s.type==='free'){
    app().innerHTML=shell(`<div class="rung-label"><span class="pip"></span>Say it from memory</div>
      <div class="q-en">${escapeHtml(p.en)}</div>
      <p class="q-hint">Say the Bengali out loud before you reveal it.</p>
      <div id="rev"></div>
      <div class="player-actions"><button class="btn btn-ghost" id="hint">Hint</button><button class="btn btn-teal" id="show">Reveal</button></div>`);
    $('#hint').onclick=()=>{ $('#rev').innerHTML=`<div class="hint-first">Starts with: <b>${escapeHtml(p.r.split(/\s+/)[0])}</b></div>`; };
    $('#show').onclick=()=>{ speak(p.sc);
      app().querySelector('.player').innerHTML=`<div class="pbar"><i style="width:${pct()}%"></i></div>
        <div class="rung-label"><span class="pip"></span>Say it from memory</div>
        <div class="q-en">${escapeHtml(p.en)}</div>
        <div class="reveal-box"><div class="r">${escapeHtml(p.r)}</div><div class="s">${p.sc}</div>${p.ph?`<div class="q-ph" style="margin-top:4px">${p.ph}</div>`:''}</div>
        <div class="player-actions"><button class="speak-btn" data-say="${p.sc}">${SPK} Listen</button><button class="btn btn-teal" id="ok">I said it</button></div>`;
      $('.speak-btn').onclick=()=>speak(p.sc); $('#ok').onclick=nextStep; wireSay(app()); };
    return; }
}

/* ---------- scene replay (from People / library) ---------- */
function viewScene(id){ const day=DAYS.find(d=>d.id===id); if(!day||!DIALOGUES[id]) return viewStory();
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/story'">All chapters</span>
    <div class="app-head"><h1>${day.title} <span class="muted" style="font-size:1rem;font-weight:700">Day ${day.day}</span></h1><p>${day.place}. With ${day.person}.</p></div>
    <div class="dlg">${DIALOGUES[id].map(l=>`<div class="dline ${l.who==='Kabir'?'me':''}"><div class="dwho">${escapeHtml(l.who)}</div>
      <div class="dbody"><button class="ex-say" data-say="${l.sc}">${SPK}</button><div class="dr">${escapeHtml(l.r)}</div><div class="dsc">${l.sc}</div><div class="den">${escapeHtml(l.en)}</div></div></div>`).join('')}</div>
    <div class="player-actions" style="margin-top:20px"><button class="btn btn-primary" onclick="location.hash='#/day/${id}'">Practise this chapter</button></div>`;
}

/* ---------- word browser (open library, nothing locked) ---------- */
let albumFilter='all', albumQ='', albumShow=120;
function viewAlbum(){
  const filters=[{id:'all',name:'All words'}].concat(PACKS.map(p=>({id:p.id,name:p.name})));
  const q=albumQ.trim().toLowerCase();
  const all=WORDS.filter(w=>(albumFilter==='all'||w.pack===albumFilter) &&
    (!q || w.r.toLowerCase().includes(q) || w.en.toLowerCase().includes(q) || w.sc.includes(albumQ.trim())));
  const sorted=all.slice().sort((x,y)=>x.r.localeCompare(y.r));
  const list=sorted.slice(0,albumShow);
  let cards='', letter='';
  list.forEach(w=>{
    const L=(w.r[0]||'').toUpperCase();
    if(L!==letter){ letter=L; cards+=`<div class="alpha-head">${escapeHtml(letter)}</div>`; }
    const got=state.words.has(w.r);
    cards+=`<button class="wcard${got?' met':''}" data-w="${escapeHtml(w.r)}">
      <div class="rm">${escapeHtml(w.r)}</div><div class="sc">${w.sc}</div>
      ${w.ph?`<div class="wph">${escapeHtml(w.ph)}</div>`:''}
      <div class="en">${escapeHtml(w.en)}</div></button>`;
  });
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">${icon('back')} Library</span>
    <div class="app-head"><h1>Words <span class="sc">শব্দ</span></h1>
      <p>All ${WORDS.length} words, open to wander. Nothing is locked. Search in English, in romanized Bengali, or in Bangla script, then tap a word to hear it.</p></div>
    <div class="searchbar"><input id="wq" type="search" placeholder="Search: water, jol, or জল" value="${escapeHtml(albumQ)}" autocomplete="off" autocapitalize="off" spellcheck="false">
      <span class="searchcount">${all.length}</span></div>
    <div class="filter-row">${filters.map(f=>`<button class="filter ${albumFilter===f.id?'active':''}" data-f="${f.id}">${escapeHtml(f.name)}</button>`).join('')}</div>
    ${all.length?`<div class="wgrid">${cards}</div>
      ${all.length>albumShow?`<button class="btn btn-ghost load-more" id="more">Show more (${all.length-albumShow} left)</button>`:''}`
      :`<p class="muted center" style="padding:30px 0">Nothing matches that. Try another spelling.</p>`}`;
  const inp=$('#wq');
  inp.oninput=()=>{ albumQ=inp.value; albumShow=120; const pos=inp.selectionStart; viewAlbum(); const n=$('#wq'); n.focus(); n.setSelectionRange(pos,pos); };
  if($('#more')) $('#more').onclick=()=>{ albumShow+=200; viewAlbum(); };
  document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{ albumFilter=b.dataset.f; albumShow=120; viewAlbum(); });
  document.querySelectorAll('.wcard').forEach(b=>b.onclick=()=>openWord(b.dataset.w));
}

/* ---------- games ---------- */
const W=r=>WORDS.find(x=>x.r===r);
const pick=a=>a[Math.floor(Math.random()*a.length)];
/* draw from what you have actually met, falling back to everything */
function pool(){ const met=WORDS.filter(w=>state.words.has(w.r)); return met.length>=12?met:WORDS; }
const GAMES=[
  {id:'opposites', ic:'bolt',    name:'Opposites Sprint', desc:'Tap the opposite. bhalo to kharap.'},
  {id:'match',     ic:'link',    name:'Meaning Match',    desc:'Pair each Bengali word with its English.'},
  {id:'listen',    ic:'speaker', name:'Ear Training',     desc:'Hear the Bengali, choose what it means.'},
  {id:'read',      ic:'book',    name:'Read the Script',  desc:'See the Bengali letters, choose the meaning.'},
  {id:'recall',    ic:'star',    name:'Word Rush',        desc:'See the English, pick the Bengali fast.'},
  {id:'register',  ic:'people',  name:'Tui or Aapni',     desc:'Pick the right you for each person.'},
];
function viewGames(){ app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">${icon('back')} Library</span>
  <div class="app-head"><h1>Games <span class="sc">খেলা</span></h1><p>Quick rounds built from the words you have met.</p></div>
  <div class="grid grid-2">${GAMES.map(g=>`<button class="game-card" onclick="location.hash='#/game/${g.id}'"><span class="ico">${icon(g.ic)}</span><h3>${g.name}</h3><p>${g.desc}</p></button>`).join('')}</div>`; }
function viewGame(w){ const m={opposites:gOpposites,match:gameMatch,listen:gListen,read:gRead,recall:gRecall,register:gRegister}; (m[w]||viewGames)(); }

/* generic multiple-choice runner */
function mcqGame(cfg){ let idx=0,score=0; const n=cfg.rounds||6;
  function round(){
    if(idx>=n){ app().innerHTML=`<span class="crumb" onclick="location.hash='#/games'">${icon('back')} Games</span>
      <div class="done-card"><div class="done-mark">${icon('check')}</div><h2>${score} / ${n}</h2><p class="muted">${cfg.title} complete.</p>
      <div class="player-actions" style="justify-content:center;margin-top:18px"><button class="btn btn-primary" id="again">Play again</button><button class="btn btn-ghost" onclick="location.hash='#/games'">Back</button></div></div>`;
      $('#again').onclick=()=>mcqGame(cfg); return; }
    const r=cfg.make();
    app().innerHTML=`<span class="crumb" onclick="location.hash='#/games'">${icon('back')} Games</span>
      <div class="game-hud"><span>Round ${idx+1} / ${n}</span><span class="score">Score ${score}</span></div>
      <div class="player"><div class="rung-label"><span class="pip"></span>${cfg.sub}</div>${r.html}
        ${r.say?`<button class="speak-btn" data-say="${r.say}">${SPK} Listen</button>`:''}
        <div class="opts" id="opts">${r.options.map((o,i)=>`<button class="opt" data-i="${i}">${o.html}</button>`).join('')}</div></div>`;
    if(r.say) speak(r.say); wireSay(app());
    $('#opts').querySelectorAll('.opt').forEach(b=>b.onclick=()=>{ const o=r.options[+b.dataset.i], opts=$('#opts').querySelectorAll('.opt');
      opts.forEach(x=>x.style.pointerEvents='none');
      if(o.ok){ b.classList.add('correct'); score++; } else { b.classList.add('wrong'); opts.forEach((x,i)=>{ if(r.options[i].ok) x.classList.add('correct'); }); }
      idx++; setTimeout(round,720); });
  }
  round();
}
const wOpt=(w,ok)=>({html:`${w.r} <span class="script">${w.sc}</span> <span class="muted">${w.en}</span>`,ok});
const enOpt=(w,ok)=>({html:escapeHtml(w.en),ok});
function distract(w,key){ const P=pool(); const src=P.length>=8?P:WORDS;
  return shuffle(src.filter(x=>x.r!==w.r && x.en!==w.en)).slice(0,3); }
function gOpposites(){ mcqGame({title:'Opposites Sprint',sub:'What is the opposite of',make:()=>{
  const pair=pick(OPPOSITES); const [a,b]=shuffle(pair.slice()); const wA=W(a),wB=W(b);
  const options=shuffle([wOpt(wB,true),...shuffle(WORDS.filter(w=>w.r!==a&&w.r!==b)).slice(0,3).map(w=>wOpt(w,false))]);
  return {html:`<div class="q-roman">${wA.r} <span class="q-sc" style="display:inline">${wA.sc}</span></div><div class="q-hint">${wA.en}</div>`,say:wA.sc,options};
}}); }
function gListen(){ mcqGame({title:'Ear Training',sub:'Listen, then choose the meaning',make:()=>{
  const w=pick(pool()); const options=shuffle([enOpt(w,true),...distract(w,'en').map(x=>enOpt(x,false))]);
  return {html:`<div class="q-hint">Tap Listen, then choose what it means.</div>`,say:w.sc,options};
}}); }
function gRead(){ mcqGame({title:'Read the Script',sub:'Read the Bengali, choose the meaning',make:()=>{
  const w=pick(pool()); const options=shuffle([enOpt(w,true),...distract(w,'en').map(x=>enOpt(x,false))]);
  return {html:`<div class="q-sc" style="font-size:2.6rem;margin-bottom:6px">${w.sc}</div>`,say:w.sc,options};
}}); }
function gRecall(){ mcqGame({title:'Word Rush',sub:'See the English, pick the Bengali',make:()=>{
  const w=pick(pool()); const opt=(x,ok)=>({html:`${x.r} <span class="script">${x.sc}</span>`,ok});
  const options=shuffle([opt(w,true),...distract(w,'r').map(x=>opt(x,false))]);
  return {html:`<div class="q-en">${escapeHtml(w.en)}</div>`,options};
}}); }
function gRegister(){ mcqGame({title:'Tui or Aapni',sub:'Which "you" fits this person?',make:()=>{
  const pp=pick(PEOPLE); const options=shuffle(['tui','tumi','aapni'].map(r=>({html:`<b class="bn">${r}</b>`,ok:r===pp.reg})));
  return {html:`<div class="q-en">${escapeHtml(pp.name)} <span class="sc" style="font-family:var(--font-bengali);color:var(--muted);font-size:.7em">${pp.sc}</span></div><div class="q-hint">${escapeHtml(pp.role)}</div>`,options};
}}); }
function gameMatch(){ const picks=shuffle(pool().filter(w=>w.pack!=='core')).slice(0,5); const left=shuffle(picks),right=shuffle(picks); let sel=null,done=0;
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/games'">${icon('back')} Games</span>
    <div class="app-head"><h1>Meaning Match</h1><p>Tap a Bengali word, then its English. Clear all five.</p></div>
    <div class="match-grid"><div class="match-col" id="L">${left.map(w=>`<button class="match-btn roman" data-r="${w.r}">${w.r}<br><span class="sc" style="font-size:.9em;opacity:.75">${w.sc}</span></button>`).join('')}</div>
    <div class="match-col" id="R">${right.map(w=>`<button class="match-btn" data-r="${w.r}">${escapeHtml(w.en)}</button>`).join('')}</div></div><div id="fb" style="margin-top:16px"></div>`;
  const clr=()=>{ document.querySelectorAll('.match-btn.sel').forEach(x=>x.classList.remove('sel')); sel=null; };
  document.querySelectorAll('#L .match-btn').forEach(b=>b.onclick=()=>{ clr(); b.classList.add('sel'); sel=b; });
  document.querySelectorAll('#R .match-btn').forEach(b=>b.onclick=()=>{ if(!sel){ toast('Pick a Bengali word first'); return; }
    if(sel.dataset.r===b.dataset.r){ sel.classList.add('matched'); b.classList.add('matched'); speak(W(b.dataset.r).sc); clr(); done++;
      if(done===picks.length) $('#fb').innerHTML=`<div class="feedback ok">Board cleared. All five matched.</div>`; }
    else { b.classList.add('wrong'); setTimeout(()=>b.classList.remove('wrong'),400); clr(); } }); }

/* ---------- people ---------- */
function personTotal(name){ const s=new Set(); DAYS.filter(d=>d.person===name).forEach(d=>d.phrases.forEach(p=>s.add(p))); return s.size; }
function personLearned(name){ const s=new Set(); DAYS.filter(d=>d.person===name).forEach(d=>d.phrases.forEach(p=>{ if(state.learned.has(p)) s.add(p); })); return s.size; }
function personScenes(name){ return DAYS.filter(d=>d.person===name && DIALOGUES[d.id]); }
function viewPeople(){ app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">Back to library</span>
  <div class="app-head"><h1>Your people in Kolkata <span class="sc">লোকজন</span></h1>
    <p>The people you get to know, and who decide how you speak. Sourav gets <b class="bn">tui</b>. Bishu-da gets <b class="bn">aapni</b>.</p></div>
  <div class="people-grid">${PEOPLE.map(pp=>{ const t=personTotal(pp.name), l=personLearned(pp.name), sc=personScenes(pp.name);
    return `<div class="person"><div class="top"><span class="avatar" style="background:${pp.color}">${escapeHtml(pp.name[0])}</span>
      <div><h4>${escapeHtml(pp.name)} <span class="sc" style="color:var(--text-muted);font-weight:600;font-size:.85rem">${pp.sc}</span></h4><span class="reg">${pp.reg}</span></div></div>
      <div class="role">${escapeHtml(pp.role)}</div><p>${escapeHtml(pp.blurb)}</p>
      ${t?`<p class="muted" style="margin-top:8px;font-size:.88rem">You can say ${l} of ${t} of their phrases.</p>`:''}
      ${sc.length?`<div style="margin-top:8px">${sc.map(d=>`<button class="mini-link" onclick="location.hash='#/scene/${d.id}'">Read the scene: ${escapeHtml(d.title)}</button>`).join('')}</div>`:''}
    </div>`; }).join('')}</div>`; }

/* ---------- guides ---------- */
function viewGuides(){ app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">Back to library</span>
  <div class="app-head"><h1>Guides <span class="sc">নির্দেশিকা</span></h1><p>Plain explanations of the parts of spoken Bengali that trip people up.</p></div>
  <div class="grid grid-2">${GUIDES.map(g=>`<button class="guide" onclick="location.hash='#/guide/${g.id}'"><h3>${escapeHtml(g.title)}</h3><p>${escapeHtml(g.summary)}</p><span class="tags">${escapeHtml(g.tags)}</span></button>`).join('')}</div>`; }
function viewGuideDetail(id){ const g=GUIDES.find(x=>x.id===id); if(!g) return viewGuides();
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/guides'">All guides</span>
    <article class="prose"><span class="tags" style="color:var(--teal-700);font-weight:800">${escapeHtml(g.tags)}</span>
      <h1>${escapeHtml(g.title)}</h1><p class="lead" style="margin:8px 0 22px">${escapeHtml(g.summary)}</p>${renderProse(g.body)}</article>
    <div class="prose-nav">${GUIDES.filter(x=>x.id!==id).map(x=>`<button class="mini-link" onclick="location.hash='#/guide/${x.id}'">${escapeHtml(x.title)}</button>`).join('')}</div>`; }

/* ---------- writing / blog ---------- */
function viewWriting(){ app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">Back to library</span>
  <div class="app-head"><h1>Writing <span class="sc">লেখা</span></h1><p>Notes from the person who wrote the chapters, on learning to speak Bengali.</p></div>
  <div class="grid">${BLOG.map(b=>`<button class="post" onclick="location.hash='#/post/${b.id}'"><h3>${escapeHtml(b.title)}</h3><p class="muted">${escapeHtml(b.deck)}</p><div class="meta">${escapeHtml(b.date)}. ${b.mins} min read</div></button>`).join('')}</div>`; }
function viewPost(id){ const b=BLOG.find(x=>x.id===id); if(!b) return viewWriting();
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/writing'">All writing</span>
    <article class="prose"><h1>${escapeHtml(b.title)}</h1><p class="lead" style="margin:8px 0 6px">${escapeHtml(b.deck)}</p>
      <div class="meta" style="color:var(--text-faint);font-weight:700;margin-bottom:22px">${escapeHtml(b.date)}. ${b.mins} min read</div>${renderProse(b.body)}</article>`; }

/* ---------- script lab (learn to write Bangla) ---------- */
const SCRIPT_ALL = [
  ...SCRIPT.vowels.map(x=>({...x,sec:'Vowels'})),
  ...SCRIPT.consonants.map(x=>({...x,sec:'Consonants'})),
  ...SCRIPT.numerals.map(x=>({...x,sec:'Numerals'})),
];
function letterTile(x,gi){ return `<button class="lcard" onclick="location.hash='#/letter/${gi}'"><span class="lch">${x.ch}</span><span class="lname">${escapeHtml(x.name)}</span></button>`; }
function viewScript(){
  let gi=-1; const sect=(title,bn,arr)=>{ return `<div class="unit-head"><div><span class="unit-bn script">${bn}</span><h3>${title}</h3></div></div>
    <div class="lgrid">${arr.map(x=>{ gi++; return letterTile(x,gi); }).join('')}</div>`; };
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">Back to library</span>
    <div class="app-head"><h1>Learn the script <span class="sc">হাতের লেখা</span></h1>
      <p>Kotha teaches you to speak first. When you want the alphabet too, this is the writing pad. Tap a letter to hear it, see a word it lives in, and trace it with your finger.</p></div>
    ${sect('Vowels','স্বরবর্ণ',SCRIPT.vowels)}
    ${sect('Consonants','ব্যঞ্জনবর্ণ',SCRIPT.consonants)}
    ${sect('Numerals','সংখ্যা',SCRIPT.numerals)}`;
}
function viewLetter(gi){ const x=SCRIPT_ALL[gi]; if(!x) return viewScript();
  const isNum=gi>=SCRIPT.vowels.length+SCRIPT.consonants.length;
  const steps = isNum
    ? ['Start at the top of the numeral.','Draw it in one flowing stroke where you can, top to bottom.','Numerals carry no matra headline.']
    : ['Draw the body first, starting at the top and moving down.','Make the curves and bellies left to right, keeping the pen flowing.','The matra, the headline across the top, always runs left to right. Some letters take it first, others last, so follow the stroke numbers rather than a rule.','Consonant stroke counts and matra position follow a Bengali handwriting workbook. Vowels are shape guides for now.'];
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/script'">${icon('back')} All letters</span>
    <div class="letter-top">
      <div class="lt-glyph">${x.ch}</div>
      <div class="lt-meta">
        <div class="lname-big">${escapeHtml(x.name)}</div>
        <div class="lipa">${escapeHtml(x.ipa)}</div>
        ${x.exsc?`<div class="lex"><b>${escapeHtml(x.ex)}</b> <span class="sc">${x.exsc}</span> ${escapeHtml(x.exen)}</div>`:''}
      </div>
      <button class="speak-btn" data-say="${x.exsc||x.ch}">${SPK}</button>
    </div>
    <div class="trace-wrap">
      <canvas id="trace" width="320" height="320"></canvas>
      <div id="score" class="trace-score"></div>
      <div id="shint" class="stroke-hint"></div>
      <div class="trace-actions">
        <button class="btn btn-ghost btn-sm" id="prev">${icon('back')} Prev</button>
        <button class="btn btn-teal btn-sm" id="animate">Show me</button>
        <button class="btn btn-ghost btn-sm" id="clr">Clear</button>
        <button class="btn btn-primary btn-sm" id="next">Next ${icon('back','flip')}</button>
      </div>
    </div>
    <details class="howto" ${localStorage.getItem('kotha.howto')==='0'?'':'open'} id="howto">
      <summary>How to write it</summary>
      <ol>${steps.map(t=>`<li>${t}</li>`).join('')}</ol>
    </details>`;
  initTrace(x.ch, !isNum);
  $('#howto').ontoggle=e=>localStorage.setItem('kotha.howto', e.target.open?'1':'0');
  $('#prev').onclick=()=>location.hash='#/letter/'+((gi-1+SCRIPT_ALL.length)%SCRIPT_ALL.length);
  $('#next').onclick=()=>location.hash='#/letter/'+((gi+1)%SCRIPT_ALL.length);
}
function cssColor(name,fallback){
  const p=document.createElement('span'); p.style.color=`var(${name})`; p.style.display='none';
  document.body.appendChild(p); const c=getComputedStyle(p).color; p.remove();
  return (c && c!=='rgba(0, 0, 0, 0)') ? c : fallback;
}
function drawGlyph(ctx,ch,S,size){
  ctx.font=size+'px "Hind Siliguri","Noto Sans Bengali",serif';
  ctx.textAlign='left'; ctx.textBaseline='alphabetic';
  const m=ctx.measureText(ch);
  const l=m.actualBoundingBoxLeft||0, r=m.actualBoundingBoxRight||m.width;
  const asc=m.actualBoundingBoxAscent||size*0.8, dsc=m.actualBoundingBoxDescent||0;
  const w=l+r, h=asc+dsc;
  ctx.fillText(ch,(S-w)/2+l,(S-h)/2+asc);
  return {x:(S-w)/2, y:(S-h)/2, w:w, h:h};
}
function glyphBox(ctx,ch,S,size){
  ctx.save(); ctx.font=size+'px "Hind Siliguri","Noto Sans Bengali",serif';
  const m=ctx.measureText(ch); ctx.restore();
  const l=m.actualBoundingBoxLeft||0, r=m.actualBoundingBoxRight||m.width;
  const asc=m.actualBoundingBoxAscent||size*0.8, dsc=m.actualBoundingBoxDescent||0;
  const w=l+r, h=asc+dsc;
  return {x:(S-w)/2, y:(S-h)/2, w:w||S, h:h||S};
}
/* ---------- stroke animation + tracing ----------
   The guides are traced from the letterform outlines, so the geometry is
   real and the tracing check is meaningful. They are a shape guide and not
   a taught stroke order: real Bengali order varies by letter, and the ones
   we have verified against a workbook carry order:true.
   Where we have no data at all we say so and offer free practice. */
function strokeData(ch){ return (typeof STROKES!=='undefined' && STROKES[ch]) || null; }
function pathPoints(d,box,n){
  const p=document.createElementNS('http://www.w3.org/2000/svg','path');
  p.setAttribute('d',d);
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.style.position='absolute'; svg.style.opacity='0'; svg.setAttribute('viewBox','0 0 100 100');
  svg.appendChild(p); document.body.appendChild(svg);
  const len=p.getTotalLength(); const out=[];
  for(let i=0;i<=n;i++){ const q=p.getPointAtLength(len*i/n);
    out.push([box.x+q.x/100*box.w, box.y+q.y/100*box.h]); }
  svg.remove(); return out;
}
function initTrace(ch,matra){
  const cv=$('#trace'); if(!cv) return;
  const ctx=cv.getContext('2d',{willReadFrequently:true});
  const ghost=cssColor('--accent','#3b4ee6'), strokeC=cssColor('--t-600','#0f736d'), guide=cssColor('--v-500','#7c5ce0');
  const S=320, dpr=Math.min(window.devicePixelRatio||1,3);
  cv.width=S*dpr; cv.height=S*dpr; ctx.scale(dpr,dpr);
  const data=strokeData(ch);
  const box=glyphBox(ctx,ch,S,210);
  const paths=data?data.strokes.map(st=>pathPoints(st.d,box,120)):null;
  let step=0, used=false, anim=null;
  const el=()=>$('#score');
  function ghostLetter(){
    ctx.clearRect(0,0,S,S);
    ctx.save(); ctx.globalAlpha=.14; ctx.fillStyle=ghost; drawGlyph(ctx,ch,S,210); ctx.restore();
  }
  function drawDone(upto){
    ctx.save(); ctx.strokeStyle=strokeC; ctx.lineWidth=9; ctx.lineCap='round'; ctx.lineJoin='round';
    for(let i=0;i<upto;i++){ const pts=paths[i]; ctx.beginPath(); pts.forEach((q,j)=>j?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])); ctx.stroke(); }
    ctx.restore();
  }
  function frameHint(){
    if(!data) return;
    const h=$('#shint'); if(!h) return;
    const w=data.order?'Stroke':'Part';
    h.textContent = step<paths.length ? `${w} ${step+1} of ${paths.length}. ${data.strokes[step].hint}`
      : (data.order?'All strokes done. Clear to try again.':'Shape complete. Clear to try again.');
  }
  function bg(){ ghostLetter(); if(paths) drawDone(step); used=false; if(el()){el().textContent='';el().className='trace-score';} frameHint(); }
  function animate(){
    if(!paths) return;
    if(anim) cancelAnimationFrame(anim);
    let i=0,k=0;
    ghostLetter();
    (function tick(){
      if(i>=paths.length){ step=paths.length; frameHint(); return; }
      const pts=paths[i];
      ctx.save(); ctx.strokeStyle=guide; ctx.lineWidth=9; ctx.lineCap='round'; ctx.lineJoin='round';
      ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]);
      for(let j=1;j<=k && j<pts.length;j++) ctx.lineTo(pts[j][0],pts[j][1]);
      ctx.stroke(); ctx.restore();
      k+=4;
      if(k>=pts.length){ i++; k=0; ghostLetter(); drawDone(i); }
      anim=requestAnimationFrame(tick);
    })();
  }
  paintReady();
  function paintReady(){ bg(); if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ if(document.body.contains(cv)&&!used) bg(); }); }

  /* tracing, checked against the current stroke when we have data */
  let drawing=false, cur=[];
  const pos=e=>{ const r=cv.getBoundingClientRect(); return [(e.clientX-r.left)*(S/r.width),(e.clientY-r.top)*(S/r.height)]; };
  cv.addEventListener('pointerdown',e=>{ drawing=true; used=true; cur=[]; try{cv.setPointerCapture(e.pointerId);}catch(_){}
    const q=pos(e); cur.push(q); ctx.strokeStyle=strokeC; ctx.lineWidth=9; ctx.lineCap='round'; ctx.lineJoin='round';
    ctx.beginPath(); ctx.moveTo(q[0],q[1]); ctx.lineTo(q[0]+.01,q[1]); ctx.stroke(); e.preventDefault(); });
  cv.addEventListener('pointermove',e=>{ if(!drawing) return; const q=pos(e); cur.push(q); ctx.lineTo(q[0],q[1]); ctx.stroke(); e.preventDefault(); });
  function finish(e){
    if(!drawing) return; drawing=false; try{cv.releasePointerCapture(e.pointerId);}catch(_){}
    if(!paths || step>=paths.length || cur.length<4) return;
    const target=paths[step];
    const near=(p,set)=>Math.min.apply(null,set.map(q=>Math.hypot(p[0]-q[0],p[1]-q[1])));
    const cover=target.filter(t=>near(t,cur)<26).length/target.length;      // did you cover this stroke
    const stray=cur.filter(c=>near(c,target)<30).length/cur.length;          // did you stay on it
    const dirOk=Math.hypot(cur[0][0]-target[0][0],cur[0][1]-target[0][1])
              < Math.hypot(cur[0][0]-target[target.length-1][0],cur[0][1]-target[target.length-1][1]);
    const ok = cover>0.55 && stray>0.5;
    const box=el();
    if(ok && dirOk){ step++; ghostLetter(); drawDone(step); box.className='trace-score good';
      box.textContent = step>=paths.length ? 'Whole letter written, in the right order.' : 'Good. Next stroke.';
      frameHint(); }
    else { ghostLetter(); drawDone(step); box.className='trace-score '+(ok?'warn':'bad');
      box.textContent = !dirOk&&ok ? 'Right shape, wrong direction. Follow the arrow of the animation.'
        : cover<=0.55 ? 'Not the whole stroke. Watch it once and try again.'
        : 'That wandered off the stroke. Try again.'; }
    cur=[];
  }
  ['pointerup','pointercancel'].forEach(t=>cv.addEventListener(t,finish));
  const clr=$('#clr'); if(clr) clr.onclick=()=>{ step=0; bg(); };
  const show=$('#animate'); if(show) show.onclick=()=>{ step=0; animate(); };
  if(paths) setTimeout(animate,350);
}

/* ---------- progress ---------- */
function viewProgress(){ const mins=Math.max(1,Math.round(state.seconds/60));
  const met=PEOPLE.filter(p=>DAYS.some(d=>state.days.has(d.id)&&d.person===p.name)).length;
  app().innerHTML=`<span class="crumb" onclick="location.hash='#/library'">Back to library</span>
    <div class="app-head"><h1>Your progress <span class="sc">অগ্রগতি</span></h1><p>Your time here, and your people in Kolkata.</p></div>
    ${state.user?'':'<div class="signin-strip">You are not signed in. Progress is saved on this device only. <button class="mini-link" id="si">Sign in to keep it</button></div>'}
    <div class="stat-row">
      <div class="stat"><div class="big">${state.streak.n}</div><div class="lbl">Day streak</div></div>
      <div class="stat"><div class="big">${state.streak.best||0}</div><div class="lbl">Best streak</div></div>
      <div class="stat"><div class="big">${dueCount()}</div><div class="lbl">Due now</div></div>
      <div class="stat"><div class="big">${matureCount()}</div><div class="lbl">Solid</div></div></div>
    <div class="card" style="margin:0 0 22px"><div class="howto-t">Coming up, next 14 days</div>
      <div class="fcast">${(()=>{const f=forecast(14),m=Math.max(1,...f);return f.map(n=>`<span style="height:${Math.round(n/m*100)}%" title="${n} due"></span>`).join('')})()}</div>
      <div class="daily-sub" style="margin-top:8px">Your review load, spaced out so it never piles up.${leeches().length?` ${leeches().length} tricky item${leeches().length===1?'':'s'} are being repeated more often.`:''}</div></div>
    <div class="card" style="margin:0 0 22px"><div class="howto-t">Last 30 days</div>
      <div class="heat">${streakDays(30).map(d=>{const n=state.hist[d]||0;const lv=n===0?0:n<5?1:n<12?2:3;
        return `<span class="hcell l${lv}" title="${d}: ${n}"></span>`;}).join('')}</div>
      <div class="daily-sub" style="margin-top:8px">Each square is a day. Darker means more reviews.</div></div>
    <div class="stat-row">
      <div class="stat"><div class="big">${state.newToday}</div><div class="lbl">New today</div></div>
      <div class="stat"><div class="big">${state.revisited}</div><div class="lbl">Reviewed today</div></div>
      <div class="stat"><div class="big">${mins}m</div><div class="lbl">Total time</div></div>
      <div class="stat"><div class="big">${state.words.size}</div><div class="lbl">In album</div></div></div>
    <div class="card" style="margin:22px 0"><div style="display:flex;justify-content:space-between;font-weight:800"><span>Chapters</span><span class="muted" style="font-weight:700">${state.days.size} of ${DAYS.length}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.round(state.days.size/DAYS.length*100)}%"></div></div></div>
    <h2 class="h-sub serif" style="margin:26px 0 6px">Your people</h2>
    <p class="muted" style="margin-bottom:16px">${met} met. You meet each one when the story reaches them.</p>
    <div class="people-grid">${PEOPLE.map(pp=>{ const m=DAYS.some(d=>state.days.has(d.id)&&d.person===pp.name); const t=personTotal(pp.name), l=personLearned(pp.name);
      return `<div class="person"><div class="top"><span class="avatar" style="background:${pp.color}">${escapeHtml(pp.name[0])}</span>
        <div><h4>${escapeHtml(pp.name)}</h4><span class="role" style="margin:0">${escapeHtml(pp.role)}</span></div></div>
        <p class="muted" style="margin-top:6px;font-size:.88rem">${m?'<span style="color:var(--success);font-weight:800">met</span>':'<span class="faint">not met yet</span>'}${t?`. You can say ${l} of ${t} phrases`:''}</p></div>`; }).join('')}</div>
    <div class="player-actions" style="margin-top:24px"><button class="btn btn-ghost btn-sm" id="reset">Reset progress</button></div>`;
  if($('#si')) $('#si').onclick=openSignin;
  $('#reset').onclick=()=>{ if(confirm('Clear all saved progress on this device?')){ localStorage.removeItem(KEY); location.reload(); } };
}

/* ---------- boot ---------- */
applyTheme();
renderThemeCtl();
renderAccount();
(function navIcons(){ const m={home:'home',learn:'book',script:'pen',writing:'feather',profile:'chart'};
  document.querySelectorAll('[data-nav]').forEach(a=>{ const k=m[a.dataset.nav]; if(k&&!a.querySelector('svg')) a.insertAdjacentHTML('afterbegin',icon(k)); });
})();
router();
