/* ==========================================================================
   Kotha content database (everyday Kolkata Bengali)
   Syllabus, greetings and register inspired by classic elementary Bangla
   courses. All Bengali reviewed for Kolkata (cholti) usage.
   r = casual romanization (how learners write it)
   ph = phonetic transcription (IPA, broad Kolkata pronunciation)
   sc = Bengali script (reference)   en = meaning
   ========================================================================== */

/* --- UNITS (the arc) ------------------------------------------------------ */
const UNITS = [
  {id:'u1', title:'Introduction',        bn:'পরিচয়',            sub:'Greetings, names, saying who you are'},
  {id:'u2', title:'Country & address',   bn:'দেশ ও ঠিকানা',     sub:'Where you live, getting to a place'},
  {id:'u3', title:'Age & time',          bn:'বয়স ও সময়',       sub:'Numbers, the clock, daily routine'},
  {id:'u4', title:'Family & work',       bn:'পরিবার ও পেশা',    sub:'Her family, and what people do'},
  {id:'u5', title:'Plans & invitations', bn:'ভবিষ্যৎ পরিকল্পনা', sub:'Making plans, being invited in'},
  {id:'u6', title:'City life',           bn:'শহরে বাস',         sub:'Getting around, everyday errands'},
];

const PACKS = [
  { id:'greet',  name:'Greetings & farewells' },
  { id:'family', name:'Family & people' },
  { id:'food',   name:'Food & drink' },
  { id:'travel', name:'Getting around' },
  { id:'market', name:'Market & money' },
  { id:'numbers',name:'Numbers & time' },
  { id:'feel',   name:'Descriptions & feelings' },
  { id:'city',   name:'City & daily life' },
  { id:'ask',    name:'Asking & answering' },
  { id:'core',   name:'Core words' },
];

/* --- WORDS ---------------------------------------------------------------- */
const WORDS = [
  // core pronouns
  {r:'ami',    sc:'আমি',   en:'I / me',           pack:'core', note:'You build most sentences from this. amar = my, amake = to me.'},
  {r:'tumi',   sc:'তুমি',  en:'you (familiar)',   pack:'core', note:'For friends and equals. Its verb ends in -o (korcho, thako).'},
  {r:'tui',    sc:'তুই',   en:'you (intimate)',   pack:'core', note:'For very close friends and children. Sourav gets tui. Verb ends in -ish.'},
  {r:'aapni',  sc:'আপনি',  en:'you (respectful)', pack:'core', note:'The honorific "you", for elders and strangers. Its verb ends in -en. The safe choice with anyone older.'},
  {r:'ini',    sc:'ইনি',   en:'this person (respectful)', pack:'core', note:'Points politely to someone present. ini amar baba = this is my father.'},
  {r:'she',    sc:'সে',    en:'he / she',         pack:'core', note:'Ordinary third person, said "shey". Honorific is tini.'},

  // greetings & farewells
  {r:'nomoskar',    sc:'নমস্কার',        en:'hello / greetings', pack:'greet', note:'The Hindu and nonsectarian greeting, and also a farewell. Often with palms joined.'},
  {r:'salamalaikum',sc:'আসসালামু আলাইকুম',en:'peace be upon you', pack:'greet', note:'The Muslim greeting, said "salam alekum". The reply is walaikum assalam.'},
  {r:'kemon',       sc:'কেমন',           en:'how / what kind', pack:'ask',   note:'Qualitative "how", not "how much". kemon acho? = how are you?'},
  {r:'achi',        sc:'আছি',            en:'(I) am / exist',  pack:'core',  note:'From ach-. bhalo achi = I am well. The respectful form is achhen.'},
  {r:'achhen',      sc:'আছেন',           en:'(you-respectful) are', pack:'core', note:'aapni kemon achhen? = how are you? (respectful).'},
  {r:'bhalo',       sc:'ভালো',           en:'good / well',     pack:'feel',  note:'bhalo achi = I am well. Opposite: kharap.'},
  {r:'khobor',      sc:'খবর',            en:'news',            pack:'greet', note:'ki khobor? = "what news?", a casual "how are things?"'},
  {r:'cholche',     sc:'চলছে',           en:'going along',     pack:'greet', note:'kemon cholche? = how is it going? cholche = "getting by".'},
  {r:'ekrokom',     sc:'একরকম',          en:'so-so',           pack:'greet', note:'Literally "one kind". oi ekrokom = so-so, getting on. Also motamuti.'},
  {r:'dhonnobaad',  sc:'ধন্যবাদ',        en:'thank you',       pack:'greet', note:'Formal thanks. In warm speech people often just smile or say thik ache.'},
  {r:'dekha',       sc:'দেখা',           en:'meeting / seeing',pack:'greet', note:'dekha hobe = "seeing will happen" = see you.'},
  {r:'hobe',        sc:'হবে',            en:'will be / happen',pack:'core',  note:''},
  {r:'ashi',        sc:'আসি',            en:"I'm off (lit. I come)", pack:'greet', note:'A soft goodbye. The implication is you will be back. Also jai / choli.'},

  // family & people
  {r:'baba',   sc:'বাবা',   en:'father',        pack:'family', note:''},
  {r:'ma',     sc:'মা',     en:'mother',        pack:'family', note:''},
  {r:'chhele', sc:'ছেলে',   en:'boy / son',     pack:'family', note:''},
  {r:'meye',   sc:'মেয়ে',   en:'girl / daughter',pack:'family', note:''},
  {r:'bhai',   sc:'ভাই',    en:'brother',       pack:'family', note:'Also a friendly "mate" between men.'},
  {r:'bon',    sc:'বোন',    en:'sister',        pack:'family', note:''},
  {r:'poribar',sc:'পরিবার', en:'family',        pack:'family', note:''},
  {r:'bondhu', sc:'বন্ধু',  en:'friend',        pack:'family', note:'amar bondhu = my friend.'},
  {r:'dada',   sc:'দাদা',   en:'elder brother', pack:'family', note:'And any slightly older man, a shopkeeper, a driver. Suffix -da: Bishu-da.'},
  {r:'didi',   sc:'দিদি',   en:'elder sister',  pack:'family', note:'And any slightly older woman addressed politely. Suffix -di.'},
  {r:'boudi',  sc:'বৌদি',   en:'sister-in-law', pack:'family', note:"Elder brother's wife, and a warm way to address a married woman you know. The Kolkata word."},
  {r:'Mashima',sc:'মাসিমা', en:'aunty',         pack:'family', note:"A friend's mother. Ananya's mother is Reba Mashima."},
  {r:'Kaku',   sc:'কাকু',   en:'uncle',         pack:'family', note:"A friend's father, or any older man addressed with respect."},
  {r:'Thakuma',sc:'ঠাকুমা', en:'grandmother',   pack:'family', note:"Father's mother. On day 60, hers is the verdict."},
  {r:'shaheb', sc:'সাহেব',  en:'Mr. (honorific)',pack:'family',note:"Added after a man's name: Zaman shaheb. The Hindu equivalent is babu."},
  {r:'babu',   sc:'বাবু',   en:'Mr. / sir',     pack:'family', note:"Honorific after a Hindu man's name: Prabir babu. Takes aapni."},

  // food & drink
  {r:'cha',    sc:'চা',     en:'tea',           pack:'food', note:'The centre of Bengali social life, served in a clay bhaNr.'},
  {r:'jol',    sc:'জল',     en:'water',         pack:'food', note:'In Kolkata jol; in Bangladesh often paani.'},
  {r:'luchi',  sc:'লুচি',   en:'luchi (fried bread)', pack:'food', note:'Puffed white flatbread; breakfast with aloor torkari.'},
  {r:'bhaat',  sc:'ভাত',    en:'rice (cooked)', pack:'food', note:'The base of every main meal. maachh-bhaat = the Bengali meal.'},
  {r:'maachh', sc:'মাছ',    en:'fish',          pack:'food', note:'The double aa is long.'},
  {r:'mishti', sc:'মিষ্টি', en:'sweet / dessert',pack:'food',note:'Also "sweet" as a taste. Rosogolla, sandesh.'},
  {r:'ranna',  sc:'রান্না', en:'cooking / food',pack:'food', note:'ranna-ta osadharon = the cooking is wonderful, the right thing to say at her mother\'s table.'},
  {r:'plate',  sc:'প্লেট',  en:'plate',         pack:'food', note:'ek plate luchi = one plate of luchi. An English loan, used everywhere.'},
  {r:'khide',  sc:'খিদে',   en:'hunger',        pack:'feel', note:'amar khide peyeche = I am hungry (lit. hunger has come to me).'},

  // getting around
  {r:'taxi',   sc:'ট্যাক্সি', en:'taxi',         pack:'travel', note:'The yellow Ambassador is Kolkata itself.'},
  {r:'jaben',  sc:'যাবেন',   en:'will (you-resp.) go', pack:'travel', note:'kothay jaben? = where will you go?'},
  {r:'kothay', sc:'কোথায়',  en:'where',          pack:'ask',    note:'kothay jaben? / kothay thaken? = where are you going / where do you live.'},
  {r:'thamun', sc:'থামুন',   en:'stop (please)',  pack:'travel', note:'Respectful command from thama-. ekhane thamun = stop here.'},
  {r:'ekhane', sc:'এখানে',   en:'here',           pack:'travel', note:'Opposite: okhane (there).'},
  {r:'okhane', sc:'ওখানে',   en:'there',          pack:'travel', note:''},
  {r:'shoja',  sc:'সোজা',    en:'straight',       pack:'travel', note:'shoja jaben = go straight. Said "shoja".'},
  {r:'daan',   sc:'ডান',     en:'right (side)',   pack:'travel', note:'daan dike = to the right.'},
  {r:'baam',   sc:'বাম',     en:'left (side)',    pack:'travel', note:'baam dike = to the left. Also baN dike.'},
  {r:'rasta',  sc:'রাস্তা',  en:'road / street',  pack:'travel', note:''},
  {r:'bari',   sc:'বাড়ি',   en:'home / house',   pack:'travel', note:'bari jabo = I will go home.'},
  {r:'thaki',  sc:'থাকি',    en:'(I) live / stay',pack:'travel', note:'From thaka-. ami Kolkatay thaki = I live in Kolkata.'},

  // market & money
  {r:'koto',   sc:'কত',     en:'how much / many',pack:'ask',    note:'koto holo? = how much is it? koto taka? = how many rupees?'},
  {r:'taka',   sc:'টাকা',   en:'rupee / money',  pack:'market', note:'dosh taka = ten rupees.'},
  {r:'daam',   sc:'দাম',    en:'price',          pack:'market', note:'daam koto? = what is the price? daam-ta ektu koman = lower the price a bit.'},
  {r:'beshi',  sc:'বেশি',   en:'too much / more',pack:'market', note:'onek beshi = far too much. Opposite: kom.'},
  {r:'kom',    sc:'কম',     en:'less / little',  pack:'market', note:'komano = to reduce. daam-ta koman = bring the price down.'},
  {r:'bajar',  sc:'বাজার',  en:'market / bazaar',pack:'market', note:'bajar korte jabo = I will go to do the shopping.'},
  {r:'dokan',  sc:'দোকান',  en:'shop / stall',   pack:'market', note:''},
  {r:'kilo',   sc:'কিলো',   en:'kilo',           pack:'market', note:'ek kilo maachh = one kilo of fish.'},

  // numbers & time
  {r:'ek',   sc:'এক',   en:'one',   pack:'numbers', note:'ek cup cha = one cup of tea.'},
  {r:'dui',  sc:'দুই',  en:'two',   pack:'numbers', note:''},
  {r:'tin',  sc:'তিন',  en:'three', pack:'numbers', note:''},
  {r:'chaar',sc:'চার',  en:'four',  pack:'numbers', note:''},
  {r:'panch',sc:'পাঁচ', en:'five',  pack:'numbers', note:'The chandrabindu nasalizes it: "pãch".'},
  {r:'chhoy',sc:'ছয়',   en:'six',   pack:'numbers', note:''},
  {r:'shaat',sc:'সাত',  en:'seven', pack:'numbers', note:'Said "shaat".'},
  {r:'aat',  sc:'আট',   en:'eight', pack:'numbers', note:''},
  {r:'noy',  sc:'নয়',   en:'nine',  pack:'numbers', note:''},
  {r:'dosh', sc:'দশ',   en:'ten',   pack:'numbers', note:''},
  {r:'baje', sc:'বাজে', en:"o'clock",pack:'numbers', note:'kota baje? = what time is it? tinTe baje = it is three o\'clock.'},
  {r:'shomoy',sc:'সময়', en:'time',  pack:'numbers', note:''},
  {r:'shokal',sc:'সকাল',en:'morning',pack:'numbers', note:'shokale = in the morning.'},
  {r:'bikel', sc:'বিকেল',en:'afternoon / evening',pack:'numbers', note:''},
  {r:'raat',  sc:'রাত',  en:'night', pack:'numbers', note:''},
  {r:'aaj',   sc:'আজ',   en:'today', pack:'numbers', note:''},
  {r:'kal',   sc:'কাল',  en:'tomorrow / yesterday', pack:'numbers', note:'Context tells you which.'},
  {r:'ekhon', sc:'এখন',  en:'now',   pack:'numbers', note:''},
  {r:'pore',  sc:'পরে',  en:'later / after', pack:'numbers', note:''},

  // descriptions & feelings
  {r:'kharap', sc:'খারাপ', en:'bad',        pack:'feel', note:'Opposite of bhalo.'},
  {r:'boro',   sc:'বড়',   en:'big',        pack:'feel', note:'Opposite of chhoto. amar poribar boro = my family is big.'},
  {r:'chhoto', sc:'ছোট',   en:'small',      pack:'feel', note:''},
  {r:'notun',  sc:'নতুন',  en:'new',        pack:'feel', note:'Opposite of purono.'},
  {r:'purono', sc:'পুরনো', en:'old',        pack:'feel', note:''},
  {r:'shundor',sc:'সুন্দর', en:'beautiful / nice', pack:'feel', note:'Said "shundor".'},
  {r:'khushi', sc:'খুশি',  en:'happy',      pack:'feel', note:'ami khub khushi = I am very happy.'},
  {r:'klanto', sc:'ক্লান্ত',en:'tired',     pack:'feel', note:'aapnake klanto dekhachhe = you look tired.'},
  {r:'jhal',   sc:'ঝাল',   en:'spicy / hot',pack:'feel', note:'A taste, not temperature.'},
  {r:'khub',   sc:'খুব',   en:'very',       pack:'feel', note:'khub bhalo = very good.'},

  // city & daily life
  {r:'taratari', sc:'তাড়াতাড়ি', en:'quickly / soon', pack:'city', note:'taratari esho = come quickly.'},
  {r:'thikthak', sc:'ঠিকঠাক',   en:'all right / fine',pack:'city', note:'sob thikthak? = is everything all right?'},
  {r:'matha_ghurche', sc:'মাথা ঘুরছে', en:'feeling dizzy', pack:'city', note:'amar matha ghurche = my head is spinning.'},
  {r:'chhata',  sc:'ছাতা',   en:'umbrella',      pack:'city', note:'Kolkata monsoon essential.'},
  {r:'brishti', sc:'বৃষ্টি',  en:'rain',          pack:'city', note:'brishti porche = it is raining.'},
  {r:'ghum',    sc:'ঘুম',    en:'sleep',         pack:'city', note:'ghumochhe = is sleeping; ghum theke otha = to get up.'},
  {r:'gaan',    sc:'গান',    en:'song',          pack:'city', note:'gaan gawa = to sing.'},
  {r:'khela',   sc:'খেলা',   en:'game / to play',pack:'city', note:'football khelche = is playing football.'},
  {r:'bason',   sc:'বাসন',   en:'dishes',        pack:'city', note:'bason dhowa = to wash the dishes.'},
  {r:'kaaj',    sc:'কাজ',    en:'work',          pack:'city', note:'kaaj korchi = I am working. kono kaaj nei = nothing to do.'},
  {r:'bishram', sc:'বিশ্রাম', en:'rest',          pack:'city', note:'bishram korun = please rest.'},
  {r:'chinta',  sc:'চিন্তা',  en:'worry',         pack:'city', note:'chinta korben na = do not worry (respectful).'},

  // asking & answering
  {r:'ki',   sc:'কী',   en:'what',            pack:'ask', note:'ki korcho? = what are you doing? The short "ki" is also the yes/no particle.'},
  {r:'ke',   sc:'কে',   en:'who',             pack:'ask', note:''},
  {r:'keno', sc:'কেন',  en:'why',             pack:'ask', note:''},
  {r:'hyañ', sc:'হ্যাঁ', en:'yes',            pack:'ask', note:'Nasal, said "hyañ". The chandrabindu matters.'},
  {r:'na',   sc:'না',   en:'no / not',        pack:'ask', note:'Also negates verbs: jabo na = I will not go.'},
  {r:'thik', sc:'ঠিক',  en:'right / correct', pack:'ask', note:'thik ache = it is fine / okay. The most useful phrase you own.'},
  {r:'bujhechi',sc:'বুঝেছি',en:'I understood',pack:'ask', note:'bujhini = I did not understand.'},

  // core verbs & politeness
  {r:'chai',  sc:'চাই',  en:'(I) want',   pack:'core', note:'amar cha chai = I want tea. The frame amar ___ chai carries you for weeks.'},
  {r:'jabo',  sc:'যাবো', en:'(I) will go',pack:'core', note:'From jawa-. bari jabo = I will go home.'},
  {r:'korcho',sc:'করছো', en:'(you) are doing', pack:'core', note:'From kora-. ki korcho? = what are you doing? (tumi)'},
  {r:'din',   sc:'দিন',  en:'give (please)',pack:'core', note:'Respectful (aapni). ek cup cha din. The tumi form is dao.'},
  {r:'dao',   sc:'দাও',  en:'give (friendly)',pack:'core', note:'The tumi imperative. amake ekta cha dao = give me a tea.'},
  {r:'cholo', sc:'চলো',  en:"come on / let's", pack:'core', note:'cholo jai = let us go.'},
  {r:'lagbe', sc:'লাগবে',en:'will be needed', pack:'core', note:'ki lagbe? = what do you need? (lit. what will be needed)'},
  {r:'ashun', sc:'আসুন', en:'come / welcome', pack:'greet', note:'A respectful welcome from a shopkeeper or host.'},
  {r:'bosun', sc:'বসুন', en:'please sit',  pack:'greet', note:'The tumi form is boso.'},
  {r:'pronaam',sc:'প্রণাম',en:'respectful obeisance', pack:'greet', note:'A greeting to an elder, often touching their feet. What you owe Thakuma.'},
  {r:'ashirbaad',sc:'আশীর্বাদ',en:'blessing', pack:'greet', note:'amake ashirbaad korun = please bless me, said to an elder.'},
];

/* --- PHRASES -------------------------------------------------------------- */
const PHRASES = {
  // Unit 1
  p_iam:      {r:'Ami Kabir.',           sc:'আমি কবির।',          en:'I am Kabir.',                words:['ami']},
  p_yourname: {r:'Tor naam ki?',         sc:'তোর নাম কী?',        en:"What's your name?",          words:['ki']},
  p_myname:   {r:'Amar naam Kabir.',     sc:'আমার নাম কবির।',     en:'My name is Kabir.',          words:['ami']},
  p_nomoskar: {r:'Nomoskar.',            sc:'নমস্কার।',           en:'Hello / greetings.',         words:['nomoskar']},
  p_salam:    {r:'Assalamualaikum.',     sc:'আসসালামু আলাইকুম।',  en:'Peace be upon you.',         words:['salamalaikum']},
  p_walaikum: {r:'Walaikum assalam.',    sc:'ওয়ালাইকুম আসসালাম।',en:'And upon you, peace.',       words:['salamalaikum']},
  p_howru_f:  {r:'Kemon achhen?',        sc:'কেমন আছেন?',         en:'How are you? (respectful)',  words:['kemon','achhen']},
  p_howru:    {r:'Kemon acho?',          sc:'কেমন আছো?',          en:'How are you?',               words:['kemon']},
  p_imwell:   {r:'Bhalo achi.',          sc:'ভালো আছি।',          en:'I am well.',                 words:['bhalo','achi']},
  p_wellandyou:{r:'Bhalo achi, aar aapni?',sc:'ভালো আছি, আর আপনি?',en:"I'm well, and you?",        words:['bhalo','achi','aapni']},
  p_khobor:   {r:'Ki khobor?',           sc:'কী খবর?',            en:"What's up? (informal)",      words:['ki','khobor']},
  p_soso:     {r:'Oi ekrokom.',          sc:'ঐ একরকম।',           en:'So-so, getting on.',         words:['ekrokom']},
  p_thanks:   {r:'Dhonnobaad.',          sc:'ধন্যবাদ।',           en:'Thank you.',                 words:['dhonnobaad']},
  p_seeyou:   {r:'Dekha hobe.',          sc:'দেখা হবে।',          en:'See you.',                   words:['dekha','hobe']},
  p_imoff:    {r:'Achha, ashi.',         sc:'আচ্ছা, আসি।',        en:"Okay, I'm off.",             words:['ashi']},

  // Unit 2
  p_wherelive:{r:'Kothay thaken?',       sc:'কোথায় থাকেন?',      en:'Where do you live?',         words:['kothay']},
  p_ilivein:  {r:'Ami Kolkatay thaki.',  sc:'আমি কলকাতায় থাকি।',  en:'I live in Kolkata.',         words:['ami','thaki']},
  p_wherego:  {r:'Kothay jaben?',        sc:'কোথায় যাবেন?',      en:'Where will you go?',         words:['kothay','jaben']},
  p_toGariahat:{r:'Gariahat koto?',      sc:'গড়িয়াহাট কত?',      en:'How much to Gariahat?',      words:['koto']},
  p_stophere: {r:'Ekhane thamun.',       sc:'এখানে থামুন।',       en:'Stop here.',                 words:['ekhane','thamun']},
  p_gostraight:{r:'Shoja jaben.',        sc:'সোজা যাবেন।',        en:'Go straight.',               words:['shoja','jaben']},
  p_turnright:{r:'Daan dike.',           sc:'ডান দিকে।',          en:'To the right.',              words:['daan']},

  // Unit 3
  p_whattime: {r:'Kota baje?',           sc:'কটা বাজে?',          en:'What time is it?',           words:['baje']},
  p_gonow:    {r:'Ekhon jabo.',          sc:'এখন যাবো।',          en:"I'll go now.",               words:['ekhon','jabo']},
  p_howmuch:  {r:'Koto holo?',           sc:'কত হলো?',            en:'How much is it?',            words:['koto']},
  p_toomuch:  {r:'Onek beshi.',          sc:'অনেক বেশি।',         en:"That's too much.",           words:['beshi']},
  p_reduce:   {r:'Daam-ta ektu koman.',  sc:'দামটা একটু কমান।',   en:'Lower the price a little.',  words:['daam','kom']},

  // Unit 4
  p_wanttea:  {r:'Amar cha chai.',       sc:'আমার চা চাই।',       en:'I want tea.',                words:['ami','cha','chai']},
  p_onecup:   {r:'Ek cup cha dao.',      sc:'এক কাপ চা দাও।',     en:'Give me one cup of tea.',    words:['ek','cha','dao']},
  p_whatneed: {r:'Ki lagbe?',            sc:'কী লাগবে?',          en:'What do you need?',          words:['ki','lagbe']},
  p_oneluchi: {r:'Ek plate luchi din.',  sc:'এক প্লেট লুচি দিন।',  en:'One plate of luchi, please.',words:['ek','plate','luchi','din']},
  p_thisisfather:{r:'Ini amar baba.',    sc:'ইনি আমার বাবা।',     en:'This is my father.',         words:['ini','ami','baba']},
  p_bigfamily:{r:'Amar poribar boro.',   sc:'আমার পরিবার বড়।',    en:'My family is big.',          words:['ami','poribar','boro']},

  // Unit 5 / 6
  p_doing:    {r:'Ki korcho?',           sc:'কী করছো?',           en:'What are you doing?',        words:['ki','korcho']},
  p_working:  {r:'Ami kaaj korchi.',     sc:'আমি কাজ করছি।',      en:"I'm working.",               words:['ami','kaaj']},
  p_iliked:   {r:'Amar bhalo legeche.',  sc:'আমার ভালো লেগেছে।',  en:'I liked it.',                words:['ami','bhalo']},
  p_fine:     {r:'Thik ache.',           sc:'ঠিক আছে।',           en:"It's fine.",                 words:['thik']},
  p_letsgo:   {r:'Cholo jai.',           sc:'চলো যাই।',           en:"Let's go.",                  words:['cholo']},
  p_raining:  {r:'Brishti porche.',      sc:'বৃষ্টি পড়ছে।',       en:"It's raining.",              words:['brishti']},
  p_dizzy:    {r:'Amar matha ghurche.',  sc:'আমার মাথা ঘুরছে।',    en:'I feel dizzy.',              words:['ami','matha_ghurche']},
  p_hurry:    {r:'Taratari esho.',       sc:'তাড়াতাড়ি এসো।',     en:'Come quickly.',              words:['taratari']},
  p_allfine:  {r:'Sob thikthak?',        sc:'সব ঠিকঠাক?',         en:'Everything all right?',      words:['thikthak']},
  p_dontworry:{r:'Chinta korben na.',    sc:'চিন্তা করবেন না।',   en:"Don't worry.",               words:['chinta']},
  p_gohome:   {r:'Ami bari jabo.',       sc:'আমি বাড়ি যাবো।',     en:"I'll go home.",              words:['ami','bari','jabo']},

  // Day 30
  p_nomoskar_ma:{r:'Nomoskar, Mashima.', sc:'নমস্কার, মাসিমা।',   en:'Hello, Aunty.',              words:['nomoskar','Mashima']},
  p_lovedfood:{r:'Ranna-ta osadharon.',  sc:'রান্নাটা অসাধারণ।',  en:'The cooking is wonderful.',  words:['ranna']},
  p_verymuch: {r:'Khub bhalo legeche.',  sc:'খুব ভালো লেগেছে।',   en:'I liked it very much.',      words:['khub','bhalo']},

  // Day 60
  p_pronam:   {r:'Pronaam, Thakuma.',    sc:'প্রণাম, ঠাকুমা।',    en:'My respects, Grandma.',      words:['pronaam','Thakuma']},
  p_onlybangla:{r:'Ami aapnar songe Bangla-i bolbo.', sc:'আমি আপনার সঙ্গে বাংলাই বলবো।', en:"I'll speak only Bengali with you.", words:['ami','aapni']},
  p_blessme:  {r:'Amake ashirbaad korun.',sc:'আমাকে আশীর্বাদ করুন।',en:'Please give me your blessing.',words:['ashirbaad']},
};

/* --- CHAPTERS / DAYS ------------------------------------------------------ */
const DAYS = [
  { day:1, id:'d1', unit:'u1', title:'Landing', place:'Outside the airport', person:'Sourav',
    scene:["Sourav is leaning on his bike at the arrivals gate. Before you have even put your bag down he grins and makes the pact: aaj theke, amader modhye shudhu Bangla, from today only Bengali between us. He waits. So you say who you are."],
    phrases:['p_iam','p_yourname','p_myname','p_thanks'] },
  { day:2, id:'d2', unit:'u1', title:'The neighbours', place:'The stairwell of the flat', person:'Bimala-di',
    scene:["On the landing you meet Bimala-di, who has lived in this building forever. She folds her palms, Nomoskar, and asks in the polite form how you are. Get the honorific right. She is older, so it is achhen, not acho."],
    phrases:['p_nomoskar','p_howru_f','p_wellandyou','p_seeyou'] },
  { day:4, id:'d4', unit:'u1', title:"Cha at Nemai-da's", place:'The tea stall below the office', person:'Nemai-da',
    scene:["Nemai-da pours from a great height, foam rising in the clay cup. Ki lagbe, he asks without looking up. This is the frame you will reuse for sixty days: amar ___ chai."],
    phrases:['p_whatneed','p_wanttea','p_onecup','p_thanks'] },
  { day:5, id:'d5', unit:'u1', title:'Leaving the office', place:'The office gate, dusk', person:'Joy',
    scene:["Joy is one lesson behind you and delighted about it. This is informal Bengali, no honorifics, just ki khobor and a loose goodbye. Learn to leave a conversation without switching to English."],
    phrases:['p_khobor','p_soso','p_imoff','p_seeyou'] },

  { day:7, id:'d7', unit:'u2', title:'First taxi', place:"Bishu-da's yellow taxi", person:'Bishu-da',
    scene:["A yellow Ambassador idles at the corner. Bishu-da looks at you in the mirror and waits for a destination and a fare. No meter conversation survives in English here. Name the place, hear the number, stop it where you want."],
    phrases:['p_wherego','p_toGariahat','p_stophere','p_fine'] },
  { day:9, id:'d9', unit:'u2', title:'Finding the flat', place:'A lane off Rashbehari', person:'Prabir Babu',
    scene:["The landlord, Prabir Babu, wants to know where you are from and whether you will stay. Tell him where you live now, and follow his directions down the lane, straight, then right."],
    phrases:['p_wherelive','p_ilivein','p_gostraight','p_turnright'] },
  { day:11, id:'d11', unit:'u2', title:'Ananya calls', place:'A video call', person:'Ananya',
    scene:["The week-two test. Ananya video-calls and everything you learned has to come back at once. She is teasing, fast, delighted you are trying. Ki korcho, she asks. Say something true."],
    phrases:['p_doing','p_working','p_iliked','p_letsgo'] },

  { day:13, id:'d13', unit:'u3', title:"Rahima's bajar", place:'The fish & vegetable stall', person:'Rahima',
    scene:["Rahima weighs out fish, calls you dada, and quotes a price that is clearly for tourists. She is kind, quick, and enjoying this. Greet her, ask the price, and push it down without losing the smile."],
    phrases:['p_salam','p_howmuch','p_toomuch','p_reduce'] },
  { day:16, id:'d16', unit:'u3', title:'Making a plan', place:'A cafe near the lake', person:'Ananya',
    scene:["You and Ananya are trying to fix a time to meet. This is the clock: kota baje, ekhon, pore, kal. Pin down when. She will hold you to it."],
    phrases:['p_whattime','p_gonow','p_letsgo','p_seeyou'] },
  { day:18, id:'d18', unit:'u3', title:'Office pantry', place:'The pantry, mid-morning', person:'Piyali',
    scene:["Piyali asks what you are up to. The pantry radio is on and it is the small-talk hour. Present continuous, all of it, who is doing what, right now."],
    phrases:['p_doing','p_working','p_iliked','p_fine'] },

  { day:21, id:'d21', unit:'u4', title:'Her family, explained', place:'A long walk', person:'Ananya',
    scene:["Ananya draws you a map of the people you will have to win: Baba, Ma, her didi, and the one that matters, Thakuma. Learn the family words now. On day 30 you will be using every one of them."],
    phrases:['p_thisisfather','p_bigfamily','p_iliked','p_seeyou'] },
  { day:24, id:'d24', unit:'u4', title:"Tiffin at Kartik-da's", place:'The breakfast counter', person:'Kartik-da',
    scene:["Steam off the griddle, luchis puffing one by one. Kartik-da is proud of his kitchen and will notice if you order like a tourist. Order breakfast properly, and thank him properly."],
    phrases:['p_oneluchi','p_wanttea','p_howmuch','p_thanks'] },
  { day:27, id:'d27', unit:'u4', title:'Choosing the sweets', place:'A mishti shop, three days to go', person:'Rahima',
    scene:["You cannot arrive at her parents empty-handed. A box of sandesh, chosen and paid for in Bengali. Get the count and the price right. This box has a job to do."],
    phrases:['p_whatneed','p_howmuch','p_reduce','p_thanks'] },

  { day:30, id:'d30', unit:'u5', milestone:true, title:'Lunch with her parents', place:"Reba Mashima & Ashok Kaku's table", person:'Reba Mashima',
    scene:[
      "The door opens and the smell of ranna is already an argument in your favour. Reba Mashima looks you over. Ashok Kaku, behind her, says nothing yet.",
      "They understand some English, and that is exactly the trap. Every time you reach for it, you lose a little ground. So you fold your palms, you greet her the right way, and you stay in Bengali.",
      "The food is extraordinary and she is waiting to hear you say so. This is the day thirty test: be warm, be respectful, and never once switch languages."],
    phrases:['p_nomoskar_ma','p_myname','p_lovedfood','p_verymuch','p_dontworry'] },

  { day:34, id:'d34', unit:'u6', title:'The monsoon errand', place:'A flooded crossing', person:'Bishu-da',
    scene:["Brishti porche, it is pouring, the crossing is a lake, and Bishu-da is the only taxi. Everything is happening at once: umbrellas, horns, someone shouting. Say what is going on and get home."],
    phrases:['p_raining','p_dizzy','p_gohome','p_allfine'] },
  { day:40, id:'d40', unit:'u6', title:'On your own', place:"A neighbourhood you don't know", person:'A passer-by',
    scene:["No Sourav today. You are lost off Hazra and asking a stranger the way, straight, then right, then the fourth lane. This is the language working without a safety net, so you use the respectful forms with someone you have never met."],
    phrases:['p_wherego','p_gostraight','p_turnright','p_thanks'] },
  { day:45, id:'d45', unit:'u6', title:'The Pujo invitation', place:'A pandal at dusk', person:'Ananya',
    scene:["Durga Pujo, lights and dhak everywhere. Ananya pulls you toward the pandal, cholo, taratari, and somewhere in the crowd is the whole family. This is the dress rehearsal for day 60."],
    phrases:['p_letsgo','p_hurry','p_iliked','p_seeyou'] },
  { day:52, id:'d52', unit:'u6', title:'The rehearsal', place:"Sourav's rooftop, one week to go", person:'Sourav',
    scene:["Sourav drills you like a coach. Everything you have learned, back at once, at speed, because next week there is no English rung on the ladder, and the person waiting for your answer is Thakuma."],
    phrases:['p_imwell','p_working','p_iliked','p_fine'] },

  { day:60, id:'d60', unit:'u6', milestone:true, title:"Thakuma's verdict", place:"Thakuma's room", person:'Thakuma',
    scene:[
      "Sixty days come down to this room. Thakuma sits by the window, small and still, and she speaks no English at all. There is no rung to fall back on now.",
      "You do the thing you could not have done on day one: you touch her feet, you greet her as an elder should be greeted, and you tell her, in her own language, that you will only ever speak to her in it.",
      "She looks at you for a long moment. Then she asks you to come closer, and to accept her blessing. Everything before this was preparation."],
    phrases:['p_pronam','p_onlybangla','p_verymuch','p_blessme','p_thanks'] },
];

/* --- PEOPLE --------------------------------------------------------------- */
const PEOPLE = [
  {id:'sourav', name:'Sourav',      sc:'সৌরভ',      reg:'tui',   color:'#2f66e6', role:'Old friend, settled here',    can:57, blurb:'Made the pact. Talks to you like a friend, tui, fast, no allowances.'},
  {id:'ananya', name:'Ananya',      sc:'অনন্যা',    reg:'tumi',  color:'#5585ef', role:'The reason for all of this',   can:22, blurb:'Warm, quick, teasing. Corrects you gently and notices when you improve.'},
  {id:'bishu',  name:'Bishu-da',    sc:'বিশু-দা',   reg:'aapni', color:'#0f7d88', role:'Taxi driver',                  can:12, blurb:'Short, functional sentences. Fares, shortcuts, thik ache.'},
  {id:'nemai',  name:'Nemai-da',    sc:'নেমাই-দা',  reg:'tumi',  color:'#159aa4', role:'Cha-stall owner',              can:23, blurb:'Loud and friendly. Repeats prices and quantities until you get them.'},
  {id:'rahima', name:'Rahima',      sc:'রহিমা',     reg:'aapni', color:'#8368e2', role:'Market vendor',                can:14, blurb:'Sharp but kind. Greets with salam, calls you dada, quotes per kilo, enjoys a bargain.'},
  {id:'bimala', name:'Bimala-di',   sc:'বিমলা-দি',  reg:'aapni', color:'#3f92d6', role:'Neighbour, ground floor',      can:9,  blurb:'Greets with folded palms. The reason you learn achhen before acho.'},
  {id:'piyali', name:'Piyali',      sc:'পিয়ালি',   reg:'tumi',  color:'#6d5fd0', role:'Colleague',                    can:16, blurb:'Friendly-neutral office Bengali, sprinkled with English.'},
  {id:'joy',    name:'Joy',         sc:'জয়',       reg:'tui',   color:'#4aa0c4', role:'Colleague, fellow learner',    can:16, blurb:'Always one lesson behind you. His mistakes are the ones you were about to make.'},
  {id:'kartik', name:'Kartik-da',   sc:'কার্তিক-দা',reg:'aapni', color:'#0a5a63', role:'Tiffin-centre server',         can:12, blurb:'Polite service formulas. Ashun. Ki lagbe?'},
  {id:'prabir', name:'Prabir Babu', sc:'প্রবীর বাবু',reg:'aapni',color:'#1f52cf', role:'The landlord',                 can:8,  blurb:'Formal, careful. Takes aapni and gives directions, never a straight answer.'},
  {id:'mashima',name:'Reba Mashima',sc:'রেবা মাসিমা',reg:'aapni',color:'#7a5fd6', role:"Ananya's mother, Day 30",      can:15, blurb:'Understands some English, which is exactly the problem. Her lunch is the first verdict.'},
  {id:'thakuma',name:'Thakuma',     sc:'ঠাকুমা',    reg:'aapni', color:'#31405c', role:'The grandmother, Day 60',      can:11, blurb:'No English at all. Speaks only Bengali, and hers is the word that counts.'},
];

/* --- STORY TRACKS (pick the premise that fits you) ------------------------ */
const TRACKS = [
  { id:'love', name:'Kabir', nameSc:'কবির', namePh:'kobir', label:'Meet the family',
    tagline:'A partner, and a family who has never met you.',
    who:'You are new in Kolkata to be with Ananya. Her family knows nothing about you yet, and English will not get you through lunch.',
    rel:'Ananya is the reason you came.',
    d30:'Day 30 is lunch with her parents.',
    d60:'Day 60 is Thakuma, her grandmother, whose word decides everything.' },
  { id:'city', name:'Maya', nameSc:'মায়া', namePh:'maja', label:'New in the city',
    tagline:'A new job, a new para, a whole city to win over.',
    who:'You have just moved to Kolkata for work. Nobody here owes you a word of Bengali, and everyone notices the moment you try.',
    rel:'Ananya is the colleague who takes you under her wing.',
    d30:"Day 30 is your team's Pujo lunch, all of it in Bangla.",
    d60:'Day 60 is the neighbourhood adda that never once switches to English.' },
  { id:'roots', name:'Rian', nameSc:'রিয়ান', namePh:'rian', label:'Coming home',
    tagline:'Roots you can feel but have never been able to speak to.',
    who:'You were raised abroad and have come back to Kolkata to see the grandmother who raised your mother, and who speaks no English at all.',
    rel:'Ananya is the cousin who grew up here.',
    d30:'Day 30 is the family reunion where your cousins keep translating for you.',
    d60:'Day 60 is the conversation with Thakuma you have waited your whole life to have.' },
];

/* --- OPPOSITES (game) ----------------------------------------------------- */
const OPPOSITES = [
  ['bhalo','kharap'], ['boro','chhoto'], ['notun','purono'],
  ['beshi','kom'], ['ekhane','okhane'], ['hyañ','na'], ['daan','baam'], ['ekhon','pore'],
  ['shokal','raat'],
];

const WORD_OF_DAY = 'jhal';

/* --- BENGALI SCRIPT (Learn to write, হাতের লেখা) -------------------------- */
/* ch = the letter, name = its name, ipa = sound, ex/exsc/exen = example word */
const SCRIPT = {
  vowels: [
    {ch:'অ', name:'ô',   ipa:'/ɔ/', ex:'ôsomoy', exsc:'অসময়', exen:'wrong time'},
    {ch:'আ', name:'a',   ipa:'/a/', ex:'aam',    exsc:'আম',   exen:'mango'},
    {ch:'ই', name:'i',   ipa:'/i/', ex:'ilish',  exsc:'ইলিশ', exen:'hilsa fish'},
    {ch:'ঈ', name:'dirgho i', ipa:'/i/', ex:'ish', exsc:'ঈশ', exen:'(exclamation)'},
    {ch:'উ', name:'u',   ipa:'/u/', ex:'uNchu',  exsc:'উঁচু', exen:'high'},
    {ch:'ঊ', name:'dirgho u', ipa:'/u/', ex:'un', exsc:'ঊন', exen:'less by one'},
    {ch:'ঋ', name:'ri',  ipa:'/ri/',ex:'rishi',  exsc:'ঋষি', exen:'sage'},
    {ch:'এ', name:'e',   ipa:'/e/', ex:'ek',     exsc:'এক',  exen:'one'},
    {ch:'ঐ', name:'oi',  ipa:'/oi/',ex:'oi',     exsc:'ঐ',   exen:'that'},
    {ch:'ও', name:'o',   ipa:'/o/', ex:'ojon',   exsc:'ওজন', exen:'weight'},
    {ch:'ঔ', name:'ou',  ipa:'/ou/',ex:'ousudh', exsc:'ঔষুধ',exen:'medicine'},
  ],
  consonants: [
    {ch:'ক', name:'kô',  ipa:'/k/',  ex:'kaaj',  exsc:'কাজ', exen:'work'},
    {ch:'খ', name:'khô', ipa:'/kʰ/', ex:'khide', exsc:'খিদে',exen:'hunger'},
    {ch:'গ', name:'gô',  ipa:'/g/',  ex:'gaan',  exsc:'গান', exen:'song'},
    {ch:'ঘ', name:'ghô', ipa:'/gʱ/', ex:'ghum',  exsc:'ঘুম', exen:'sleep'},
    {ch:'ঙ', name:'ungô',ipa:'/ŋ/',  ex:'rong',  exsc:'রং',  exen:'colour'},
    {ch:'চ', name:'chô', ipa:'/tʃ/', ex:'cha',   exsc:'চা',  exen:'tea'},
    {ch:'ছ', name:'chhô',ipa:'/tʃʰ/',ex:'chhata', exsc:'ছাতা',exen:'umbrella'},
    {ch:'জ', name:'jô',  ipa:'/dʒ/', ex:'jol',   exsc:'জল',  exen:'water'},
    {ch:'ঝ', name:'jhô', ipa:'/dʒʱ/',ex:'jhal',  exsc:'ঝাল', exen:'spicy'},
    {ch:'ঞ', name:'niô', ipa:'/n/',  ex:'miÑa',  exsc:'মিঞা',exen:'mister'},
    {ch:'ট', name:'Tô',  ipa:'/ʈ/',  ex:'taka',  exsc:'টাকা',exen:'money'},
    {ch:'ঠ', name:'Thô', ipa:'/ʈʰ/', ex:'thik',  exsc:'ঠিক', exen:'right'},
    {ch:'ড', name:'Dô',  ipa:'/ɖ/',  ex:'daan',  exsc:'ডান', exen:'right side'},
    {ch:'ঢ', name:'Dhô', ipa:'/ɖʱ/', ex:'Dhaka', exsc:'ঢাকা',exen:'Dhaka'},
    {ch:'ণ', name:'murdha nô', ipa:'/n/', ex:'gun', exsc:'গুণ', exen:'quality'},
    {ch:'ত', name:'tô',  ipa:'/t̪/', ex:'taratari',exsc:'তাড়াতাড়ি',exen:'quickly'},
    {ch:'থ', name:'thô', ipa:'/t̪ʰ/',ex:'thaki',  exsc:'থাকি',exen:'I live'},
    {ch:'দ', name:'dô',  ipa:'/d̪/', ex:'dada',   exsc:'দাদা',exen:'elder brother'},
    {ch:'ধ', name:'dhô', ipa:'/d̪ʱ/',ex:'dhonnobaad',exsc:'ধন্যবাদ',exen:'thank you'},
    {ch:'ন', name:'nô',  ipa:'/n/',  ex:'naam',  exsc:'নাম', exen:'name'},
    {ch:'প', name:'pô',  ipa:'/p/',  ex:'poribar',exsc:'পরিবার',exen:'family'},
    {ch:'ফ', name:'phô', ipa:'/pʰ/', ex:'phul',  exsc:'ফুল', exen:'flower'},
    {ch:'ব', name:'bô',  ipa:'/b/',  ex:'bari',  exsc:'বাড়ি',exen:'home'},
    {ch:'ভ', name:'bhô', ipa:'/bʱ/', ex:'bhalo', exsc:'ভালো',exen:'good'},
    {ch:'ম', name:'mô',  ipa:'/m/',  ex:'maachh',exsc:'মাছ', exen:'fish'},
    {ch:'য', name:'jô',  ipa:'/dʒ/', ex:'joto',  exsc:'যত',  exen:'as much'},
    {ch:'র', name:'rô',  ipa:'/r/',  ex:'rasta', exsc:'রাস্তা',exen:'road'},
    {ch:'ল', name:'lô',  ipa:'/l/',  ex:'luchi', exsc:'লুচি',exen:'luchi'},
    {ch:'শ', name:'talobyo shô', ipa:'/ʃ/', ex:'shohor', exsc:'শহর', exen:'city'},
    {ch:'ষ', name:'murdha shô',  ipa:'/ʃ/', ex:'bhasha', exsc:'ভাষা', exen:'language'},
    {ch:'স', name:'donto shô',   ipa:'/ʃ/', ex:'shomoy', exsc:'সময়',  exen:'time'},
    {ch:'হ', name:'hô',  ipa:'/ɦ/',  ex:'hobe',  exsc:'হবে', exen:'will be'},
    {ch:'ড়', name:'Rô', ipa:'/ɽ/',  ex:'baRi',  exsc:'বাড়ি',exen:'home'},
    {ch:'য়', name:'ontostho jô', ipa:'/j/', ex:'jaay', exsc:'যায়', exen:'goes'},
  ],
  numerals: [
    {ch:'০', name:'shunno', ipa:'/ʃunno/', ex:'0'},
    {ch:'১', name:'ek',   ipa:'/æk/',  ex:'1'},
    {ch:'২', name:'dui',  ipa:'/dui/', ex:'2'},
    {ch:'৩', name:'tin',  ipa:'/t̪in/',ex:'3'},
    {ch:'৪', name:'chaar',ipa:'/tʃar/',ex:'4'},
    {ch:'৫', name:'panch',ipa:'/pãtʃ/',ex:'5'},
    {ch:'৬', name:'chhoy',ipa:'/tʃʰɔj/',ex:'6'},
    {ch:'৭', name:'shaat',ipa:'/ʃat̪/',ex:'7'},
    {ch:'৮', name:'aat',  ipa:'/aʈ/',  ex:'8'},
    {ch:'৯', name:'noy',  ipa:'/nɔj/', ex:'9'},
  ],
};

/* --- GUIDES (detailed reference) ------------------------------------------ */
const GUIDES = [
  { id:'tui-tumi-aapni', title:"Tui, tumi, aapni: picking the right 'you'", summary:"Bengali has three words for 'you', and each one bends the verb to match.", tags:'pronouns · politeness',
    body:`Bengali makes you choose how close you are to someone every time you say 'you'. There are three levels, and the verb ending shifts with each, so this is the first thing worth getting comfortable with.

Aapni is the respectful one. Use it with elders, strangers, shopkeepers, your friend's parents, anyone you'd want to be polite to. Tumi is the warm everyday form for friends, cousins, younger colleagues, people you're relaxed around. Tui is the most intimate, saved for very close friends, siblings, kids, and people you grew up with. Using tui too early sounds pushy, so when in doubt, go one level up.

Watch how the verb changes for 'you are doing' (kora, to do):

apni ki korchhen? | আপনি কী করছেন? | What are you doing? (respectful)
tumi ki korchho? | তুমি কী করছ? | What are you doing? (friendly)
tui ki korchhish? | তুই কী করছিস? | What are you doing? (intimate)

The pattern holds across verbs. The aapni ending tends to be -en or -n, tumi lands on -o, and tui takes -ish. A nice thing about Kolkata speech is that people relax the levels among friends quickly. Two twenty-somethings who just met might slide from tumi to tui within a day. But with an older Mashima at the market, you stay on aapni the whole time, and she will appreciate it. Get these three grooves into your ear and the endings start to feel automatic.` },
  { id:'to-be-achhi-thaki', title:"The many ways to 'be': achhi, the silent copula, and thaki", summary:"Bengali splits 'to be' into existence, a dropped verb, and living somewhere.", tags:'verbs · grammar',
    body:`English uses 'am, is, are' for everything. Bengali splits that job three ways, and once you see the split it is actually cleaner.

First, achhi and its family mean 'exist' or 'be present'. Use it for 'there is', 'I have', and 'I am here'. It changes with the person: ami achhi (I am), tumi achho, apni achhen, she achhe.

ami barite achhi | আমি বাড়িতে আছি | I am at home.
apnar kache khuchro achhe? | আপনার কাছে খুচরো আছে? | Do you have change?

Second, the fun part. When you say something like 'I am good' or 'she is a teacher', Bengali just drops the verb entirely. This is the zero copula. You put the two things side by side and let them sit.

ami khub khushi | আমি খুব খুশি | I am very happy.
tumi amar bondhu | তুমি আমার বন্ধু | You are my friend.
cha thanda | চা ঠান্ডা | The tea is cold.

Notice that ami bhalo achhi keeps achhi because it means being in a good state, while a flat description like ami khushi needs nothing.

Third, thaki means 'live' or 'stay', for where you reside. Do not reach for achhi when you mean 'I live in Kolkata'.

ami kolkatay thaki | আমি কলকাতায় থাকি | I live in Kolkata.
tumi kothay thako? | তুমি কোথায় থাকো? | Where do you live?

So: achhi for being present or having, nothing for plain descriptions, thaki for where you live. Sorting these out makes you sound noticeably more natural.` },
  { id:'now-vs-everyday', title:'Right now vs every day: korchhi and the simple present', summary:"One ending for what is happening this second, another for what you always do.", tags:'verbs · tense',
    body:`Bengali cleanly separates 'I am doing this right now' from 'I do this generally', and the two forms look different enough that you will not confuse them once they click.

The present continuous is the -chchhi family. For kora (do): ami korchhi, tumi korchho, apni korchhen, she korchhe. This is for the action in front of you at this moment.

ami ekhon khachchhi | আমি এখন খাচ্ছি | I am eating right now.
brishti porchhe | বৃষ্টি পড়ছে | It is raining.

The simple present is for habits and general truths. The ending is shorter: ami kori, tumi koro, apni koren, she kore.

ami roj cha khai | আমি রোজ চা খাই | I drink tea every day.
she office e kaj kore | সে অফিসে কাজ করে | She works at an office.

Here is a quirk worth knowing. The simple present in Bengali also covers the near future in casual speech, especially with a time word. So ami kal jai can mean 'I will go tomorrow'. Context and the time word carry it.

A quick way to feel the difference: if you can point at it happening, use -chchhi. If it is your routine or a fact about yourself, use the plain present. Ami cha khachchhi means the cup is at my lips. Ami cha khai means tea is my daily habit.` },
  { id:'numbers-money-bajar', title:'Numbers, money, and holding your own at the bajar', summary:'Enough counting and haggling phrases to shop without getting the tourist price.', tags:'numbers · shopping',
    body:`The bajar (market) is where your Bengali gets tested fast, so a handful of numbers and set phrases go a long way. Prices are in taka, and produce is usually sold by the kilo or the piece (piche).

Start with the core numbers: ek (1), dui (2), tin (3), char (4), pnach (5), chhoy (6), shat (7), aat (8), noy (9), dosh (10). Then bish (20), ponchash (50), sho (100).

er koto kore? | এর কত করে? | How much for this?
ek kilo aloo koto? | এক কিলো আলু কত? | How much is a kilo of potatoes?

The magic haggling verb is kama, to reduce. And beshi means 'too much', while daam means 'price'.

daam ta beshi, ektu komao | দাম টা বেশি, একটু কমাও | The price is high, bring it down a bit.
ponchash takay debe? | পঞ্চাশ টাকায় দেবে? | Will you give it for fifty taka?
thik achhe, dao | ঠিক আছে, দাও | Okay, give it.

A soft, friendly tone works better than a hard bargain. Sellers respond well to a smile and a little back and forth. One more useful word: khuchro, small change, which vendors are perpetually short of.` },
  { id:'case-endings-e-r-ke', title:'The little endings that do the heavy lifting: -e, -r, -ke', summary:'Three tiny suffixes that mark location, possession, and who is on the receiving end.', tags:'grammar · suffixes',
    body:`Bengali skips a lot of little words that English needs. Instead of separate words for 'in', 'of', and 'to', it sticks short endings onto the noun. Three of them cover most of daily speech.

The -e or -te ending marks location or time, roughly 'in', 'at', or 'on'.

ami barite achhi | আমি বাড়িতে আছি | I am at home.
shokal e uthi | সকালে উঠি | I get up in the morning.

The -r or -er ending marks possession, like 'of'. Amar is just ami plus -r, so 'my' is built the same way.

amar bondhur bari | আমার বন্ধুর বাড়ি | My friend's house.
kolkatar rasta | কলকাতার রাস্তা | The streets of Kolkata.

The -ke ending marks the person on the receiving end, 'to' or 'for'.

amake ekta cha dao | আমাকে একটা চা দাও | Give me a tea.
tomake bolchhi | তোমাকে বলছি | I am telling you.

Notice how amar (my) and amake (to me) come from the same ami, just with different tails. Once you spot that these endings are Lego pieces, you can build new phrases on the fly instead of memorizing each one.` },
  { id:'question-words-ki', title:'Asking things: question words and the tricky little ki', summary:"The main question words, plus why ki means both 'what' and a plain yes/no.", tags:'questions · grammar',
    body:`Asking questions in Bengali is refreshingly direct. You keep the sentence in normal order and just drop a question word in, no flipping things around like English does.

Here are the workhorses: ki (what), ke (who), kothay (where), kobe (when), keno (why), kemon (how), and koto (how much or many). Most of them start with a k sound, which makes them easy to group.

tumi ki khabe? | তুমি কী খাবে? | What will you eat?
bathroom kothay? | বাথরুম কোথায়? | Where is the bathroom?
tumi keno ashoni? | তুমি কেন আসোনি? | Why did you not come?

Now the part that trips people up. The word ki does double duty. With a long ee sound it means 'what'. But there is also a short ki that turns a statement into a yes or no question, working like a spoken question mark.

tumi ki bangla jano? | তুমি কি বাংলা জানো? | Do you know Bengali?
cha ki tairi? | চা কি তৈরি? | Is the tea ready?

In writing the two are spelled slightly differently (কী for 'what', কি for the yes or no marker), but in speech you tell them apart by what follows. In fast Kolkata speech people often drop the yes or no ki entirely and let their tone do the asking.` },
  { id:'family-address-terms', title:'Family words and how to address people you meet', summary:'Bengalis use kinship terms for nearly everyone, so knowing them makes you instantly warmer.', tags:'family · culture',
    body:`In Bengal you rarely address someone by a bare name. You reach for a family word instead, even with strangers, and it signals respect and warmth in one move.

Start with siblings and near-peers. Dada is elder brother, and you use it for any slightly older man, the guy at the tea stall, a helpful stranger. Didi is elder sister, for an older woman around your generation.

dada, ektu shunben? | দাদা, একটু শুনবেন? | Brother, could you listen a moment?
didi, eta koto? | দিদি, এটা কত? | Sister, how much is this?

For an older generation, the parent's-sibling words come out. Kaku is uncle, for an older man deserving respect. Mashima is aunty, warm and common for older women, your friend's mother, a neighbour.

Mashima, bhalo achhen? | মাসিমা, ভালো আছেন? | Aunty, are you well?

Go up one more generation for grandparents. Thakuma is father's mother, Dadu is grandfather. These carry real tenderness.

One tip. Match the term to the person's age relative to you, not to their exact family role, since that is how it actually works on the street. When unsure between dada and kaku, a younger-looking man gets dada, an older one gets kaku, and either way people smile.` },
  { id:'polite-imperative-requests', title:'Asking nicely: commands and requests without sounding rude', summary:'The imperative changes shape with politeness, so din and bosun soften what eso and boso say bluntly.', tags:'requests · politeness',
    body:`Telling someone to do something feels risky in a new language, but Bengali makes it manageable because the politeness is baked right into the verb ending. Match the ending to the same tui, tumi, aapni level you would use for that person, and you are safe.

The respectful commands (the aapni level) usually end in -un or -n, and they double as polite requests, closer to 'please do' than a bark.

bosun | বসুন | Please sit.
ektu opekkha korun | একটু অপেক্ষা করুন | Please wait a moment.
bolun | বলুন | Go ahead, say it.

The tumi-level commands are friendly and end in -o.

boso | বসো | Sit. (friendly)
esho | এসো | Come. (friendly, also a warm 'come in')

See the pair boso and bosun. Same verb, but bosun to your friend's grandmother and boso to your buddy. To make any request gentler still, add ektu (a little) or a soft na that works like 'won't you'.

boso na | বসো না | Do sit, won't you?

A reliable move for strangers: lead with dada or didi, then the -un verb. Dada, ektu bolben? is polite, natural, and hard to get wrong.` },
];

/* --- WRITING (essays) ----------------------------------------------------- */
const BLOG = [
  { id:'why-i-did-not-start-with-the-alphabet',
    title:'Why I did not start with the alphabet',
    deck:'The script is beautiful. It is also the slowest possible way to learn to speak.',
    date:'14 April 2026', mins:4,
    body:`The Bengali alphabet is genuinely beautiful. Roughly fifty letters, vowels that change shape depending on where they sit in a word, conjunct consonants that stack two or three characters into a single glyph that looks like a small piece of architecture. I could stare at it for a while. I also decided, very early, that I would not teach it first, and that decision annoyed a lot of people.

The annoyed people were mostly other learners, plus one teacher who felt I was cutting a corner that should not be cut. You cannot really know a language without its script, he wrote to me. Maybe he is right. But I did not have a language problem in the abstract. I had a grandmother problem. My girlfriend's thakuma (ঠাকুমা), her father's mother, speaks no English at all, and in a few months she was going to be sitting an arm's length from me at a lunch table in Kolkata, deciding whether the boy her granddaughter brought home could say a single warm word to her. She was not going to hand me a worksheet.

Here is what nobody says plainly. Learning to read Bengali and learning to speak Bengali are two different jobs that happen to share a name. When you start with the script, you spend your first six weeks learning that এ sounds like the e in get, and at the end of those six weeks you can sound out a signboard slowly, letter by letter, and you still cannot ask for tea. I have watched people do exactly this. They can read Ballygunge off the Metro map with real confidence, and they cannot tell the cha (চা) man at the stall to go easy on the sugar.

The sound of a language lives in the mouth, not on the page, and Kolkata Bengali in particular is spoken fast and soft and full of swallowed edges. People here say jol (জল) for water, not pani, and half the charm is in how the vowels lean. My real teacher was a stall near Gariahat. Ei je, ek cha (এই যে, এক চা), hey, one tea. Koto holo (কত হলো), how much. I learned those with my ears and my small change, and they stuck harder than any letter ever did.

Romanization is a crutch, and people love to say that like it settles the argument. Crutches are for people who need to walk today. I needed to walk today. I had a date on a calendar and a woman who had cooked for fifty years waiting to see whether I would tell her the food was good.

None of this means the script does not matter. It matters later, and it matters a lot, the day you want to read the names of fish laid out at the bajar (বাজার) so you stop pointing like a tourist. I went back and learned it, happily, once I could already talk. I am not against the alphabet. I am against the alphabet first.

The lunch happened. I sat down, I did my pronam (প্রণাম) to thakuma, and after the first mouthful I said, khub bhalo hoyeche (খুব ভালো হয়েছে), it has come out very good. She did not congratulate my grammar. She put more fish on my plate, which in that house is the whole examination, passed.` },
  { id:'first-hundred-words-that-earn-their-place',
    title:'The first hundred words that actually earn their place',
    deck:'Most beginner word lists solve a problem nobody has. Here is the order that survives a real lunch.',
    date:'19 May 2026', mins:4,
    body:`Every 'first 100 words' list I found before I built my own was written either for a tourist or for a textbook committee, and you can tell within about ten entries. Days of the week. Colors. The pen is on the table. I have now spent years around Bengali speakers and I have never once, in any kitchen or taxi or market, needed to inform someone that the pen was on the table. The list was solving a problem nobody has.

So I made a rule for which words earn a place. In your first week of actually being in it, would this word make thakuma smile, or would it get a transaction over the line. If neither, it waits. That is the whole filter, and it is stricter than it sounds.

The first ten words are not nouns at all. They are social glue, the things that decide whether a stranger warms to you before you have said anything with content. Kemon achen (কেমন আছেন), how are you, in the polite apni form. Bhalo achi (ভালো আছি), I am well. Dhonnobad (ধন্যবাদ), thank you. And the address words, which matter more in Bengali than almost any actual sentence: dada (দাদা) for an older man, didi (দিদি) for an older woman. Call the fish seller dada before you buy anything and watch the price soften.

Only then do the verbs come, and even then only a handful, worn smooth from use. Dao (দাও), give. Chai (চাই), want. Jabo (যাবো), I will go. And the two workhorses of the whole language, ache (আছে), there is, and its twin nei (নেই), there is not. You can point at almost anything, say its name, and bolt on one of these, and you have communicated. Machh ache (মাছ আছে), is there fish.

Numbers arrive next, the first five before anything else, because the two engines of daily life in Kolkata both run on counting. Ek, dui, tin (এক, দুই, তিন), and above all koto (কত), how much. The yellow taxi and the bajar (বাজার) are entire conversations built from koto and a number and a slow shake of the head.

Then, and this is where you actually win a family, the table words. Ar ektu (আর একটু), a little more, which you will need whether you want more or not, because refusing food is a negotiation and not a sentence. Darun (দারুণ) and osadharon (অসাধারণ) for wonderful, aimed squarely at the ranna (রান্না), the cooking.

The words I fought hardest to include are the ones most lists bury around lesson thirty, the repair kit. Bujhte parchi na (বুঝতে পারছি না), I do not understand. Aste bolun (আস্তে বলুন), please speak slowly. These belong in your first twenty words, not your two hundredth, because they are the difference between a conversation that survives your confusion and one that collapses the moment you lose the thread.

And what did I leave out on purpose. Colors. Days of the week. The weather. Most adjectives. A hundred words is not many. Spend them where somebody is standing in front of you, waiting to be talked to.` },
  { id:'what-other-bengali-apps-get-wrong-about-speaking',
    title:'What the other Bengali apps get wrong about speaking',
    deck:'I ground through all of them for a weekend. They are good software answering the wrong question.',
    date:'23 June 2026', mins:5,
    body:`Before I wrote a line of my own app I spent a weekend downloading every Bengali one I could find and grinding through the free tiers. This is not going to be a hit piece. Most of them are competent pieces of software made by people who clearly care. The trouble is that they are answering a question I did not have, which is roughly 'how do I recognize Bengali,' when mine was 'how do I say something to this woman at lunch on Sunday.'

The first thing that went wrong, in almost all of them, was the Bengali itself. There is no single spoken Bengali, and the version an app teaches matters enormously. Several of them fed me a flattened, pan-regional standard that leaned toward forms my girlfriend's family simply does not use. Water came out as pani in one app, and in Kolkata you say jol (জল). Small, but say pani at a Ballygunge lunch table and everyone will gently clock you as having learned from the wrong place.

The second and biggest problem is that tapping tiles is not talking. You can hold a four-hundred-day streak on some of these apps and never once have made a sound with your mouth. Recognizing cha (চা) among four glowing options is a genuinely different skill from standing at a stall, over the noise of traffic, and producing ek cha, cheeni kom (এক চা, চিনি কম), one tea, less sugar, while the man is already looking at the next customer.

Then there is register, and this is where I got properly annoyed. Bengali runs on the difference between tumi, apni, and tui, the familiar, the respectful, and the very intimate. It is not decoration. It is the load-bearing wall of every interaction. Most apps taught me a single flattened you and moved on. One cheerfully drilled tumi kemon acho (তুমি কেমন আছো) as the way to ask how someone is, which is lovely for my girlfriend and a small social bruise if I aim it at her grandmother, who gets kemon achen (কেমন আছেন).

There is also a strange split in how these apps treat the language physically. Half of them bury you in the script from minute one, so you are decoding letters before you can greet anybody. The other half hide the language behind cartoon mascots and gems and streak animations and almost never let you just hear a real Kolkata voice speaking at real speed.

And the sentences. I was taught, by more than one app, to say the equivalent of the elephant is drinking water and the boy has a red hat, sentences generated by something that has never been hungry at someone else's table. Not one of them taught me pet bhore geche (পেট ভরে গেছে), my stomach is full, which is a sentence I have now said perhaps two hundred times and had disbelieved every single time. Real life is small and repetitive and warm. You say the same forty things to the same people.

What I wanted was almost the opposite of all this. Fewer words, said out loud, in my own voice. The register I would actually be standing in, apni for the elders and tumi for the cousins. Everything tied to a place I could picture, the cha stall, the yellow taxi, the bajar (বাজার), a specific lunch table with a specific grandmother at the head of it.

The other apps could probably get me a decent score on a Bengali quiz. None of them were going to get thakuma to put more fish on my plate. That was the only test I cared about, and it turns out you have to build for the test you actually have.` },
];

/* --- DIALOGUE SCRIPTS (per chapter, "in the scene") ----------------------- */
const DIALOGUES = {
  "d1": [
    {"who":"Sourav","r":"Aaj theke amader modhye shudhu Bangla, bujhli? Ekta English shobdo-o na.","sc":"আজ থেকে আমাদের মধ্যে শুধু বাংলা, বুঝলি? একটা ইংরেজি শব্দও না।","en":"From today, only Bengali between us, got it? Not one English word."},
    {"who":"Kabir","r":"Thik ache, thik ache. Cheshta korchi.","sc":"ঠিক আছে, ঠিক আছে। চেষ্টা করছি।","en":"Okay, okay. I'm trying."},
    {"who":"Sourav","r":"Toh bol dekhi, tor naam ki?","sc":"তো বল দেখি, তোর নাম কী?","en":"So go on, what's your name?"},
    {"who":"Kabir","r":"Ami Kabir. Amar naam Kabir, tui toh jaanish!","sc":"আমি কবির। আমার নাম কবির, তুই তো জানিস!","en":"I'm Kabir. My name is Kabir, you know that!"},
    {"who":"Sourav","r":"Jani, tobu Bangla-y bol. Bah, shuru toh holo.","sc":"জানি, তবু বাংলায় বল। বাহ, শুরু তো হলো।","en":"I know, but say it in Bengali. There, we've started."},
    {"who":"Kabir","r":"Aay, bag-ta de, bike-e tuli. Dhonnobaad re.","sc":"আয়, ব্যাগটা দে, বাইকে তুলি। ধন্যবাদ রে।","en":"Come, give me the bag, let me load it on the bike. Thanks, mate."},
    {"who":"Sourav","r":"Aré, bondhur abar dhonnobaad ki! Otho, bari chol.","sc":"আরে, বন্ধুর আবার ধন্যবাদ কী! ওঠ, বাড়ি চল।","en":"Hey, thanks between friends? Get on, let's go home."}
  ],
  "d2": [
    {"who":"Bimala-di","r":"Nomoskar. Notun eshechen, na? Ei building-e?","sc":"নমস্কার। নতুন এসেছেন, না? এই বিল্ডিংয়ে?","en":"Hello. You've just moved in, haven't you? In this building?"},
    {"who":"Kabir","r":"Nomoskar. Ha, kal-i eshechi. Ami Kabir.","sc":"নমস্কার। হ্যাঁ, কালই এসেছি। আমি কবির।","en":"Hello. Yes, I arrived just yesterday. I'm Kabir."},
    {"who":"Bimala-di","r":"Bhalo, bhalo. Kemon achhen?","sc":"ভালো, ভালো। কেমন আছেন?","en":"Good, good. How are you?"},
    {"who":"Kabir","r":"Bhalo achi, aar aapni?","sc":"ভালো আছি, আর আপনি?","en":"I'm well, and you?"},
    {"who":"Bimala-di","r":"Ei cholche ekrokom. Dorkar hole nichey chole ashben.","sc":"এই চলছে একরকম। দরকার হলে নিচে চলে আসবেন।","en":"Getting by, so-so. If you need anything, come down."},
    {"who":"Kabir","r":"Nishchoi. Dhonnobaad.","sc":"নিশ্চয়ই। ধন্যবাদ।","en":"Of course. Thank you."},
    {"who":"Bimala-di","r":"Achha, tahole ekhon ashi. Dekha hobe.","sc":"আচ্ছা, তাহলে এখন আসি। দেখা হবে।","en":"All right, I'll be off then. See you."}
  ],
  "d4": [
    {"who":"Nemai-da","r":"Aré Kabir, boso boso. Ki lagbe, bolo?","sc":"আরে কবির, বসো বসো। কী লাগবে, বলো?","en":"Hey Kabir, sit, sit. What'll you have?"},
    {"who":"Kabir","r":"Amar cha chai, Nemai-da. Ek cup cha dao.","sc":"আমার চা চাই, নেমাই-দা। এক কাপ চা দাও।","en":"I want tea, Nemai-da. Give me one cup."},
    {"who":"Nemai-da","r":"Ek cup? Doodh cha na lal cha?","sc":"এক কাপ? দুধ চা না লাল চা?","en":"One cup? Milk tea or black tea?"},
    {"who":"Kabir","r":"Doodh cha-i dao. Chini ektu kom.","sc":"দুধ চা-ই দাও। চিনি একটু কম।","en":"Milk tea. A little less sugar."},
    {"who":"Nemai-da","r":"Nao, gorom gorom. Ekdom foam tule diyechi.","sc":"নাও, গরম গরম। একদম ফোম তুলে দিয়েছি।","en":"Here, nice and hot. Frothed it right up for you."},
    {"who":"Kabir","r":"Bah, darun. Koto holo?","sc":"বাহ, দারুণ। কত হলো?","en":"Wonderful. How much is it?"},
    {"who":"Nemai-da","r":"Sat taka. Roj toh eshei jachho, pore diyo.","sc":"সাত টাকা। রোজ তো এসেই যাচ্ছ, পরে দিয়ো।","en":"Seven rupees. You come every day anyway, pay later."},
    {"who":"Kabir","r":"Na na, ei nao. Dhonnobaad.","sc":"না না, এই নাও। ধন্যবাদ।","en":"No no, here you go. Thanks."}
  ],
  "d5": [
    {"who":"Joy","r":"Ki re Kabir, ki khobor?","sc":"কী রে কবির, কী খবর?","en":"Hey Kabir, what's up?"},
    {"who":"Kabir","r":"Ei toh, ekrokom achi. Saradin kaaj, matha gorom.","sc":"এই তো, একরকম আছি। সারাদিন কাজ, মাথা গরম।","en":"Eh, so-so. Work all day, head's fried."},
    {"who":"Joy","r":"Amaro tai. Kal ami 'dhonnobaad' bolte giye 'dhondho' bole phelechilam!","sc":"আমারও তাই। কাল আমি 'ধন্যবাদ' বলতে গিয়ে 'ধন্ধ' বলে ফেলেছিলাম!","en":"Me too. Yesterday I meant to say 'dhonnobaad' and said 'dhondho' instead!"},
    {"who":"Kabir","r":"Ha ha, tui toh amar theke ek step piechhiye achhish sob shomoy.","sc":"হা হা, তুই তো আমার থেকে এক স্টেপ পিছিয়ে আছিস সব সময়।","en":"Ha ha, you're always one step behind me."},
    {"who":"Joy","r":"Ta thik. Achha, ami ashi tahole, bus dhorte hobe.","sc":"তা ঠিক। আচ্ছা, আমি আসি তাহলে, বাস ধরতে হবে।","en":"True. Okay, I'm off then, got to catch the bus."},
    {"who":"Kabir","r":"Achha ja. Dekha hobe kal.","sc":"আচ্ছা যা। দেখা হবে কাল।","en":"Okay, go. See you tomorrow."}
  ],
  "d7": [
    {"who":"Bishu-da","r":"Kothay jaben, dada?","sc":"কোথায় যাবেন, দাদা?","en":"Where to, dada?"},
    {"who":"Kabir","r":"Gariahat jabo. Gariahat koto?","sc":"গড়িয়াহাট যাবো। গড়িয়াহাট কত?","en":"I'll go to Gariahat. How much to Gariahat?"},
    {"who":"Bishu-da","r":"Meter-e jaan. Beshi hobe na.","sc":"মিটারে যান। বেশি হবে না।","en":"Go by the meter. It won't be much."},
    {"who":"Kabir","r":"Thik ache. Cholun.","sc":"ঠিক আছে। চলুন।","en":"All right. Let's go."},
    {"who":"Kabir","r":"Oi holud badi-tar samne, ekhane thamun.","sc":"ওই হলুদ বাড়িটার সামনে, এখানে থামুন।","en":"In front of that yellow house, stop here."},
    {"who":"Kabir","r":"Koto holo?","sc":"কত হলো?","en":"How much is it?"},
    {"who":"Bishu-da","r":"Bahattor taka.","sc":"বাহাত্তর টাকা।","en":"Seventy-two rupees."},
    {"who":"Kabir","r":"Ei nin. Thik ache toh?","sc":"এই নিন। ঠিক আছে তো?","en":"Here you are. That's fine, right?"}
  ],
  "d9": [
    {"who":"Prabir Babu","r":"Toh, aapni notun bhaŗate. Aage kothay thaken?","sc":"তো, আপনি নতুন ভাড়াটে। আগে কোথায় থাকেন?","en":"So, you're the new tenant. Where did you live before?"},
    {"who":"Kabir","r":"Aage Dilli-te chhilam. Ekhon ami Kolkatay thaki.","sc":"আগে দিল্লিতে ছিলাম। এখন আমি কলকাতায় থাকি।","en":"I was in Delhi before. Now I live in Kolkata."},
    {"who":"Prabir Babu","r":"Achha. Beshidin thakben toh?","sc":"আচ্ছা। বেশিদিন থাকবেন তো?","en":"I see. You'll stay a while, yes?"},
    {"who":"Kabir","r":"Ha, bochor-khanek toh botei.","sc":"হ্যাঁ, বছরখানেক তো বটেই।","en":"Yes, at least a year for sure."},
    {"who":"Prabir Babu","r":"Ei lane diye soja jaben, tarpor daan dike. Oi holud gate-er badi-i amar.","sc":"এই গলি দিয়ে সোজা যাবেন, তারপর ডান দিকে। ওই হলুদ গেটের বাড়িই আমার।","en":"Go straight down this lane, then to the right. The house with the yellow gate is mine."},
    {"who":"Kabir","r":"Soja, tarpor daan dike. Bujhechi.","sc":"সোজা, তারপর ডান দিকে। বুঝেছি।","en":"Straight, then right. Got it."}
  ],
  "d11": [
    {"who":"Ananya","r":"Ei, obosheshe dhorle! Ki korcho ekhon?","sc":"এই, অবশেষে ধরলে! কী করছ এখন?","en":"Hey, you finally picked up! What are you doing now?"},
    {"who":"Kabir","r":"Ami kaaj korchi. Mane... korchilam. Tumi phone korle toh.","sc":"আমি কাজ করছি। মানে... করছিলাম। তুমি ফোন করলে তো।","en":"I'm working. I mean... I was. Then you called."},
    {"who":"Ananya","r":"Baba! Puro Bangla-y bolcho? Sourav dekhchi kaaj kore diyeche.","sc":"বাবা! পুরো বাংলায় বলছ? সৌরভ দেখছি কাজ করে দিয়েছে।","en":"Wow! You're speaking full Bengali? Sourav's clearly done his job."},
    {"who":"Ananya","r":"Ei je Bangla-y bolle, amar khub bhalo legeche.","sc":"এই যে বাংলায় বললে, আমার খুব ভালো লেগেছে।","en":"You speaking Bengali just now, I really liked it."},
    {"who":"Kabir","r":"Amaro bhalo lage. Cholo kothao jai.","sc":"আমারও ভালো লাগে। চলো কোথাও যাই।","en":"I like it too. Let's go somewhere."},
    {"who":"Ananya","r":"Cholo jai! List baniye rakhchi, palate parbe na kintu.","sc":"চলো যাই! লিস্ট বানিয়ে রাখছি, পালাতে পারবে না কিন্তু।","en":"Let's go! I'm making a list, you won't be able to escape."}
  ],
  "d13": [
    {"who":"Rahima","r":"Ei dada, tatka rui eseche, dekhun dekhun!","sc":"এই দাদা, টাটকা রুই এসেছে, দেখুন দেখুন!","en":"Hey dada, fresh rui has come in, look, look!"},
    {"who":"Kabir","r":"Bah, bhalo maachh. Ek kilo koto holo?","sc":"বাহ, ভালো মাছ। এক কিলো কত হলো?","en":"Nice fish. How much for a kilo?"},
    {"who":"Rahima","r":"Aapnar jonno char-sho, dada.","sc":"আপনার জন্য চারশো, দাদা।","en":"For you, four hundred, dada."},
    {"who":"Kabir","r":"Char-sho? Onek beshi. Ektu kom korun.","sc":"চারশো? অনেক বেশি। একটু কম করুন।","en":"Four hundred? That's too much. Bring it down a little."},
    {"who":"Rahima","r":"Achha, sade tin-sho din.","sc":"আচ্ছা, সাড়ে তিনশো দিন।","en":"All right, give three-fifty."},
    {"who":"Kabir","r":"Tin-sho-y hobe na? Roj-i toh nebo.","sc":"তিনশোয় হবে না? রোজই তো নেবো।","en":"Won't three hundred do? I'll buy every day."},
    {"who":"Rahima","r":"Uff, dada toh puro Bangali hoye gechen! Achha, tin-sho-i din.","sc":"উফ, দাদা তো পুরো বাঙালি হয়ে গেছেন! আচ্ছা, তিনশোই দিন।","en":"Ugh, dada's become a total Bengali! Fine, give three hundred."},
    {"who":"Kabir","r":"Thik ache, ei nin taka.","sc":"ঠিক আছে, এই নিন টাকা।","en":"All right, here's the money."}
  ],
  "d16": [
    {"who":"Ananya","r":"Toh kalke koto-tay dekha korchi? Bolo.","sc":"তো কালকে কটায় দেখা করছি? বলো।","en":"So what time are we meeting tomorrow? Tell me."},
    {"who":"Kabir","r":"Bikel panch-ta? Tumi office theke koto-tay berao?","sc":"বিকেল পাঁচটা? তুমি অফিস থেকে কটায় বেরোও?","en":"Evening five? What time do you leave office?"},
    {"who":"Ananya","r":"Panch-tay beroi. Sade-panch-tay lake-er dhare?","sc":"পাঁচটায় বেরোই। সাড়ে-পাঁচটায় লেকের ধারে?","en":"I leave at five. Five-thirty by the lake?"},
    {"who":"Kabir","r":"Sade-panch. Likhe nilam. Ekhon kota baje?","sc":"সাড়ে-পাঁচ। লিখে নিলাম। এখন কটা বাজে?","en":"Five-thirty. Noted. What time is it now?"},
    {"who":"Ananya","r":"Aré baba, aaj-ke noy, kal! Ekhon toh sondhye.","sc":"আরে বাবা, আজকে নয়, কাল! এখন তো সন্ধ্যে।","en":"Oh come on, not today, tomorrow! It's evening already."},
    {"who":"Kabir","r":"Ha ha, thik. Ami ekhon jabo, ektu kaaj ache.","sc":"হা হা, ঠিক। আমি এখন যাবো, একটু কাজ আছে।","en":"Ha ha, right. I'll go now, got a bit of work."},
    {"who":"Ananya","r":"Achha jao. Kal sade-panch-tay, cholo jai lake-e.","sc":"আচ্ছা যাও। কাল সাড়ে-পাঁচটায়, চলো যাই লেকে।","en":"Okay go. Tomorrow at five-thirty, let's go to the lake."}
  ],
  "d18": [
    {"who":"Piyali","r":"Ei Kabir, cha khabe? Ki korcho ekhane danŗiye?","sc":"এই কবির, চা খাবে? কী করছ এখানে দাঁড়িয়ে?","en":"Hey Kabir, want tea? What are you doing standing here?"},
    {"who":"Kabir","r":"Cha-r jonno eshechilam. Ami kaaj korchi saradin, matha dhoreche.","sc":"চায়ের জন্য এসেছিলাম। আমি কাজ করছি সারাদিন, মাথা ধরেছে।","en":"Just came for tea. I've been working all day, got a headache."},
    {"who":"Piyali","r":"Same here. Oi report-ta niye boshe achi, boring puro.","sc":"সেম হিয়ার। ওই রিপোর্টটা নিয়ে বসে আছি, বোরিং পুরো।","en":"Same here. Stuck on that report, totally boring."},
    {"who":"Kabir","r":"Tomar kal-ke-r presentation-ta darun chilo. Amar bhalo legeche.","sc":"তোমার কালকের প্রেজেন্টেশনটা দারুণ ছিল। আমার ভালো লেগেছে।","en":"Your presentation yesterday was great. I liked it."},
    {"who":"Piyali","r":"Sotti? Tension-e chilam.","sc":"সত্যি? টেনশনে ছিলাম।","en":"Really? I was so nervous."},
    {"who":"Kabir","r":"Na na, ekdom thik chilo. Chinta korchile keno?","sc":"না না, একদম ঠিক ছিল। চিন্তা করছিলে কেন?","en":"No no, it was spot on. Why were you worried?"},
    {"who":"Piyali","r":"Emni. Achha, cha ta niye jai, boss dakche.","sc":"এমনি। আচ্ছা, চা-টা নিয়ে যাই, বস ডাকছে।","en":"No reason. Okay, I'll take my tea, the boss is calling."}
  ],
  "d21": [
    {"who":"Ananya","r":"Dekho, phone-e chhobi ache. Ei je, ini amar baba. Ar pashe Ma.","sc":"দেখো, ফোনে ছবি আছে। এই যে, ইনি আমার বাবা। আর পাশে মা।","en":"Look, I have photos. Here, this is my father. And next to him, Ma."},
    {"who":"Kabir","r":"Ini tomar baba... ar ini didi, na?","sc":"ইনি তোমার বাবা... আর ইনি দিদি, না?","en":"This is your father... and this is your sister, right?"},
    {"who":"Ananya","r":"Ha, amar didi. Amader poribar kintu boro.","sc":"হ্যাঁ, আমার দিদি। আমাদের পরিবার কিন্তু বড়।","en":"Yes, my sister. Our family is big, though."},
    {"who":"Kabir","r":"Amar poribar-o boro. Ei sob chinte parbo, chinta koro na.","sc":"আমার পরিবারও বড়। এই সব চিনতে পারবো, চিন্তা করো না।","en":"My family is big too. I'll manage to learn them all, don't worry."},
    {"who":"Ananya","r":"Ar sob-cheye important... Thakuma. Or mon peole sob hoye gelo.","sc":"আর সবচেয়ে ইম্পর্ট্যান্ট... ঠাকুমা। ওঁর মন পেলে সব হয়ে গেল।","en":"And the most important... Thakuma. Win her over and it's all done."},
    {"who":"Kabir","r":"Thakuma... uni-i toh asol pariksha. Bhalo legeche, egiye rakhle amake.","sc":"ঠাকুমা... উনিই তো আসল পরীক্ষা। ভালো লেগেছে, এগিয়ে রাখলে আমাকে।","en":"Thakuma... she's the real test. I liked it, you've given me a head start."}
  ],
  "d24": [
    {"who":"Kartik-da","r":"Aashun, aashun, boshun. Ki lagbe bolun?","sc":"আসুন, আসুন, বসুন। কী লাগবে বলুন?","en":"Come, come, sit. What'll you have?"},
    {"who":"Kabir","r":"Ek plate luchi din. Sathe torkari.","sc":"এক প্লেট লুচি দিন। সাথে তরকারি।","en":"Give one plate of luchi. With the curry."},
    {"who":"Kartik-da","r":"Ekdom gorom nabche. Ar kichhu? Cha?","sc":"একদম গরম নাবছে। আর কিছু? চা?","en":"Coming down piping hot. Anything else? Tea?"},
    {"who":"Kabir","r":"Ha, amar cha chai. Ek cup.","sc":"হ্যাঁ, আমার চা চাই। এক কাপ।","en":"Yes, I want tea. One cup."},
    {"who":"Kabir","r":"Bah, darun phulechhe. Osadharon. Koto holo?","sc":"বাহ, দারুণ ফুলেছে। অসাধারণ। কত হলো?","en":"Look how puffed up! Wonderful. How much is it?"},
    {"who":"Kartik-da","r":"Luchi ar cha, sob miliye pochish taka.","sc":"লুচি আর চা, সব মিলিয়ে পঁচিশ টাকা।","en":"Luchi and tea, twenty-five altogether."},
    {"who":"Kabir","r":"Ei nin. Dhonnobaad, Kartik-da.","sc":"এই নিন। ধন্যবাদ, কার্তিক-দা।","en":"Here you go. Thank you, Kartik-da."}
  ],
  "d27": [
    {"who":"Rahima","r":"Aré dada, aaj mishtir dokane? Ki lagbe, bolun?","sc":"আরে দাদা, আজ মিষ্টির দোকানে? কী লাগবে, বলুন?","en":"Oh dada, at the sweet shop today? What do you need?"},
    {"who":"Kabir","r":"Ananya-der bari jachhi. Bhalo sandesh chai, ek box.","sc":"অনন্যাদের বাড়ি যাচ্ছি। ভালো সন্দেশ চাই, এক বাক্স।","en":"I'm going to Ananya's house. I want good sandesh, one box."},
    {"who":"Rahima","r":"Jol-bhora sandesh nin, ekdom fresh. Koto-ta debo?","sc":"জলভরা সন্দেশ নিন, একদম ফ্রেশ। কতটা দেবো?","en":"Take jol-bhora sandesh, absolutely fresh. How much shall I give?"},
    {"who":"Kabir","r":"Ek kilo din. Koto holo?","sc":"এক কিলো দিন। কত হলো?","en":"Give a kilo. How much is it?"},
    {"who":"Rahima","r":"Panch-sho, dada. Baksho-shuddhu.","sc":"পাঁচশো, দাদা। বাক্সসুদ্ধু।","en":"Five hundred, dada. Box included."},
    {"who":"Kabir","r":"Ektu kom korun na, prothom bar jachhi oder bari.","sc":"একটু কম করুন না, প্রথম বার যাচ্ছি ওদের বাড়ি।","en":"Bring it down a bit, it's my first time going to their place."},
    {"who":"Rahima","r":"(hese) Sasurbari-r byapar, bujhi. Achha, sade-char-sho din.","sc":"(হেসে) শ্বশুরবাড়ির ব্যাপার, বুঝি। আচ্ছা, সাড়ে-চারশো দিন।","en":"(laughing) In-laws' matter, I understand. Fine, give four-fifty."},
    {"who":"Kabir","r":"Thik ache. Dhonnobaad, Rahima.","sc":"ঠিক আছে। ধন্যবাদ, রহিমা।","en":"All right. Thank you, Rahima."}
  ],
  "d30": [
    {"who":"Kabir","r":"Nomoskar, Mashima. Ami Kabir. Amar naam Kabir.","sc":"নমস্কার, মাসিমা। আমি কবির। আমার নাম কবির।","en":"Hello, Aunty. I'm Kabir. My name is Kabir."},
    {"who":"Reba Mashima","r":"Nomoskar. Esho baba, boso. Rasta chinte oshubidhe hoyni toh?","sc":"নমস্কার। এসো বাবা, বসো। রাস্তা চিনতে অসুবিধে হয়নি তো?","en":"Hello. Come, dear, sit. No trouble finding the way?"},
    {"who":"Kabir","r":"Na na, Mashima. Chinta korben na, thikthak eshe gechi.","sc":"না না, মাসিমা। চিন্তা করবেন না, ঠিকঠাক এসে গেছি।","en":"No no, Aunty. Don't worry, I got here just fine."},
    {"who":"Reba Mashima","r":"Tumi English-e bolte paro, jano toh? Amra ektu-adhtu bujhi.","sc":"তুমি ইংরেজিতে বলতে পারো, জানো তো? আমরা একটু-আধটু বুঝি।","en":"You can speak in English, you know? We understand a little."},
    {"who":"Kabir","r":"Jani Mashima, kintu ami Bangla-tei bolbo.","sc":"জানি মাসিমা, কিন্তু আমি বাংলাতেই বলবো।","en":"I know, Aunty, but I'll speak in Bengali."},
    {"who":"Kabir","r":"Uff, osadharon ranna. Ei maachh-ta... khub bhalo legeche.","sc":"উফ, অসাধারণ রান্না। এই মাছটা... খুব ভালো লেগেছে।","en":"Oh, wonderful cooking. This fish... I liked it very much."},
    {"who":"Reba Mashima","r":"Aro nao tahole, lojja koro na.","sc":"আরো নাও তাহলে, লজ্জা করো না।","en":"Take more then, don't be shy."},
    {"who":"Kabir","r":"Ha Mashima, aro ektu bhaat din. Sotti darun.","sc":"হ্যাঁ মাসিমা, আরো একটু ভাত দিন। সত্যি দারুণ।","en":"Yes, Aunty, give a little more rice. Truly delicious."}
  ],
  "d34": [
    {"who":"Bishu-da","r":"Dada, ei brishti-te berolen? Uthe poŗun taratari!","sc":"দাদা, এই বৃষ্টিতে বেরোলেন? উঠে পড়ুন তাড়াতাড়ি!","en":"Dada, you went out in this rain? Get in quickly!"},
    {"who":"Kabir","r":"Uff, brishti porche toh thamchei na. Puro rasta jol.","sc":"উফ, বৃষ্টি পড়ছে তো থামছেই না। পুরো রাস্তা জল।","en":"Ugh, the rain just won't stop. The whole road's under water."},
    {"who":"Bishu-da","r":"Boshun, chhata-ta gutiye nin. Kothay jaben?","sc":"বসুন, ছাতাটা গুটিয়ে নিন। কোথায় যাবেন?","en":"Sit, fold your umbrella. Where will you go?"},
    {"who":"Kabir","r":"Ami bari jabo, Bishu-da. Rashbehari, oi lane-ta.","sc":"আমি বাড়ি যাবো, বিশু-দা। রাসবিহারী, ওই গলিটা।","en":"I'll go home, Bishu-da. Rashbehari, that lane."},
    {"who":"Kabir","r":"Isss, ei jam-e amar matha ghurche.","sc":"ইস, এই জ্যামে আমার মাথা ঘুরছে।","en":"Ugh, this jam is making my head spin."},
    {"who":"Bishu-da","r":"Janla-ta ektu khulun, hawa lagbe. Sob thikthak toh?","sc":"জানলাটা একটু খুলুন, হাওয়া লাগবে। সব ঠিকঠাক তো?","en":"Open the window a little, get some air. Everything all right?"},
    {"who":"Kabir","r":"Ha, ekhon thik lagche. Aste aste cholun, tara nei.","sc":"হ্যাঁ, এখন ঠিক লাগছে। আস্তে আস্তে চলুন, তাড়া নেই।","en":"Yes, feeling okay now. Drive slowly, there's no hurry."}
  ],
  "d40": [
    {"who":"Passer-by","r":"Aré dada, hariye gechen naki? Kothay jaben bolun.","sc":"আরে দাদা, হারিয়ে গেছেন নাকি? কোথায় যাবেন বলুন।","en":"Hey dada, have you got lost? Tell me where you're going."},
    {"who":"Kabir","r":"Ha, puro guliye gechi. Hazra-r mor-er kachhe ekta boi-er dokan.","sc":"হ্যাঁ, পুরো গুলিয়ে গেছি। হাজরার মোড়ের কাছে একটা বইয়ের দোকান।","en":"Yes, I'm completely muddled. A bookshop near Hazra crossing."},
    {"who":"Passer-by","r":"O, bujhechi. Ei soja jaben, ekdom soja.","sc":"ও, বুঝেছি। এই সোজা যাবেন, একদম সোজা।","en":"Oh, I see. Go straight this way, dead straight."},
    {"who":"Kabir","r":"Soja... tarpor?","sc":"সোজা... তারপর?","en":"Straight... then?"},
    {"who":"Passer-by","r":"Tarpor daan dike ghure, char number goli. Peye jaben.","sc":"তারপর ডান দিকে ঘুরে, চার নম্বর গলি। পেয়ে যাবেন।","en":"Then turn right, the fourth lane. You'll find it."},
    {"who":"Kabir","r":"Soja, tarpor daan dike, char number goli. Dhonnobaad!","sc":"সোজা, তারপর ডান দিকে, চার নম্বর গলি। ধন্যবাদ!","en":"Straight, then right, the fourth lane. Thank you!"}
  ],
  "d45": [
    {"who":"Ananya","r":"Kabir, cholo jai oi pandal-tay! Taratari eso, line boro hoye jachhe.","sc":"কবির, চলো যাই ওই প্যান্ডেলটায়! তাড়াতাড়ি এসো, লাইন বড় হয়ে যাচ্ছে।","en":"Kabir, let's go to that pandal! Come quickly, the line's getting long."},
    {"who":"Kabir","r":"Aschi aschi! Baba, ki bhiŗ. Dhak-er awaj-e kan pata daay.","sc":"আসছি আসছি! বাবা, কী ভিড়। ঢাকের আওয়াজে কান পাতা দায়।","en":"Coming, coming! Wow, what a crowd. Can barely hear over the dhak."},
    {"who":"Ananya","r":"Protima-ta dekhecho? Ei bochor-er thim-ta amar darun legeche.","sc":"প্রতিমাটা দেখেছ? এই বছরের থিমটা আমার দারুণ লেগেছে।","en":"Have you seen the idol? I loved this year's theme."},
    {"who":"Kabir","r":"Sotti, osadharon. Amaro khub bhalo legeche, eto alo, eto lok.","sc":"সত্যি, অসাধারণ। আমারও খুব ভালো লেগেছে, এত আলো, এত লোক।","en":"Really, stunning. I liked it very much too, so many lights, so many people."},
    {"who":"Ananya","r":"Bhoy peo na, ei toh mohora, asol toh Thakuma-r sathe.","sc":"ভয় পেয়ো না, এই তো মহড়া, আসল তো ঠাকুমার সাথে।","en":"Don't be scared, this is just the rehearsal, the real one's with Thakuma."},
    {"who":"Kabir","r":"Ha, sei din-tar apekkhay achi. Cholo egoi, dekha hobe sabar sathe.","sc":"হ্যাঁ, সেই দিনটার অপেক্ষায় আছি। চলো এগোই, দেখা হবে সবার সাথে।","en":"Yes, I'm waiting for that day. Let's move ahead, I'll meet everyone."}
  ],
  "d52": [
    {"who":"Sourav","r":"Chol dekhi, ready toh? Thakuma jodi bole 'kemon achho', ki bolbi?","sc":"চল দেখি, রেডি তো? ঠাকুমা যদি বলে 'কেমন আছ', কী বলবি?","en":"Come on, ready? If Thakuma says 'how are you', what'll you say?"},
    {"who":"Kabir","r":"Bhalo achi, Thakuma. Ekdom bhalo achi.","sc":"ভালো আছি, ঠাকুমা। একদম ভালো আছি।","en":"I'm well, Thakuma. Perfectly well."},
    {"who":"Sourav","r":"Bah. 'Ki koro?' bolle?","sc":"বাহ। 'কী করো?' বললে?","en":"Good. If she says 'what do you do'?"},
    {"who":"Kabir","r":"Ami kaaj korchi, ekta office-e.","sc":"আমি কাজ করছি, একটা অফিসে।","en":"I'm working, at an office."},
    {"who":"Sourav","r":"Ranna niye jiggesh korle, bhalo legeche kina?","sc":"রান্না নিয়ে জিজ্ঞেস করলে, ভালো লেগেছে কিনা?","en":"If she asks about the food, whether you liked it?"},
    {"who":"Kabir","r":"Bolbo, khub bhalo legeche, osadharon ranna.","sc":"বলবো, খুব ভালো লেগেছে, অসাধারণ রান্না।","en":"I'll say, I liked it very much, wonderful cooking."},
    {"who":"Sourav","r":"Ekdom thik ache. Ready tui.","sc":"একদম ঠিক আছে। রেডি তুই।","en":"Perfect. You're ready."}
  ],
  "d60": [
    {"who":"Kabir","r":"Pronaam, Thakuma.","sc":"প্রণাম, ঠাকুমা।","en":"My respects, Thakuma."},
    {"who":"Thakuma","r":"Esho, esho baba. Kachhe esho, bhalo kore dekhi tomake.","sc":"এসো, এসো বাবা। কাছে এসো, ভালো করে দেখি তোমাকে।","en":"Come, come, dear. Come close, let me look at you properly."},
    {"who":"Kabir","r":"Ami aapnar songe Bangla-i bolbo, Thakuma. Ekta shobdo-o English na.","sc":"আমি আপনার সঙ্গে বাংলাই বলবো, ঠাকুমা। একটা শব্দও ইংরেজি না।","en":"I'll speak only Bengali with you, Thakuma. Not one word of English."},
    {"who":"Thakuma","r":"Tai naki? Eto Bangla shikhle amar jonyo?","sc":"তাই নাকি? এত বাংলা শিখলে আমার জন্য?","en":"Is that so? You learned all this Bengali for me?"},
    {"who":"Kabir","r":"Apnader kachhe thakbo bole. Ananya-r mukhe apnar kotha koto shunechi.","sc":"আপনাদের কাছে থাকবো বলে। অনন্যার মুখে আপনার কথা কত শুনেছি।","en":"So I can be close to your family. I've heard so much about you from Ananya."},
    {"who":"Thakuma","r":"Aaj ranna kheyecho? Kemon holo?","sc":"আজ রান্না খেয়েছ? কেমন হলো?","en":"Did you eat today? How was it?"},
    {"who":"Kabir","r":"Khub bhalo legeche, Thakuma. Emon ranna kothao khaini.","sc":"খুব ভালো লেগেছে, ঠাকুমা। এমন রান্না কোথাও খাইনি।","en":"I liked it very much, Thakuma. I've never had cooking like this anywhere."},
    {"who":"Kabir","r":"Amake ashirbaad korun, Thakuma.","sc":"আমাকে আশীর্বাদ করুন, ঠাকুমা।","en":"Please give me your blessing, Thakuma."},
    {"who":"Thakuma","r":"(mathay haat) Bhalo theko, sukhe theko. Ei ashirbaad roilo.","sc":"(মাথায় হাত) ভালো থেকো, সুখে থেকো। এই আশীর্বাদ রইল।","en":"(hand on his head) Be well, be happy. You have my blessing."}
  ]
};

/* --- PHONETICS (broad IPA, Kolkata cholti), merged onto WORDS/PHRASES ----- */
const IPA_WORDS = {
  ami:'/ami/', tumi:'/tumi/', tui:'/tui/', aapni:'/apni/', ini:'/ini/', she:'/ʃe/',
  nomoskar:'/nɔmoʃkar/', salamalaikum:'/assalamu alaikum/', kemon:'/kæmon/', achi:'/atʃʰi/',
  achhen:'/atʃʰen/', bhalo:'/bʱalo/', khobor:'/kʰɔbor/', cholche:'/tʃoltʃʰe/', ekrokom:'/ækrɔkom/',
  dhonnobaad:'/dʱɔnːobad/', dekha:'/dekʰa/', hobe:'/hobe/', ashi:'/aʃi/',
  baba:'/baba/', ma:'/ma/', chhele:'/tʃʰele/', meye:'/meje/', bhai:'/bʱai/', bon:'/bon/',
  poribar:'/poribar/', bondhu:'/bondʱu/', dada:'/dada/', didi:'/didi/', boudi:'/boudi/',
  Mashima:'/maʃima/', Kaku:'/kaku/', Thakuma:'/ʈʰakuma/', shaheb:'/ʃaheb/', babu:'/babu/',
  cha:'/tʃa/', jol:'/dʒɔl/', luchi:'/lutʃi/', bhaat:'/bʱat/', maachh:'/matʃʰ/', mishti:'/miʃʈi/',
  ranna:'/ranːa/', plate:'/pleʈ/', khide:'/kʰide/',
  taxi:'/ʈæksi/', jaben:'/dʒaben/', kothay:'/kotʰae/', thamun:'/tʰamun/', ekhane:'/ekʰane/',
  okhane:'/okʰane/', shoja:'/ʃodʒa/', daan:'/ɖan/', baam:'/bã/', rasta:'/raʃta/', bari:'/baɽi/', thaki:'/tʰaki/',
  koto:'/kɔto/', taka:'/ʈaka/', daam:'/dam/', beshi:'/beʃi/', kom:'/kɔm/', bajar:'/badʒar/', dokan:'/dokan/', kilo:'/kilo/',
  ek:'/æk/', dui:'/dui/', tin:'/tin/', chaar:'/tʃar/', panch:'/pãtʃ/', chhoy:'/tʃʰɔe/', shaat:'/ʃat/',
  aat:'/aʈ/', noy:'/nɔe/', dosh:'/dɔʃ/', baje:'/badʒe/', shomoy:'/ʃɔmɔe/', shokal:'/ʃɔkal/',
  bikel:'/bikel/', raat:'/rat/', aaj:'/adʒ/', kal:'/kal/', ekhon:'/ækʰon/', pore:'/pɔre/',
  kharap:'/kʰarap/', boro:'/bɔɽo/', chhoto:'/tʃʰoʈo/', notun:'/notun/', purono:'/purono/',
  shundor:'/ʃundor/', khushi:'/kʰuʃi/', klanto:'/klanto/', jhal:'/dʒʱal/', khub:'/kʰub/',
  taratari:'/taɽataɽi/', thikthak:'/ʈʰikʈʰak/', matha_ghurche:'/matʰa gʱurtʃʰe/', chhata:'/tʃʰata/',
  brishti:'/briʃʈi/', ghum:'/gʱum/', gaan:'/gan/', khela:'/kʰæla/', bason:'/baʃon/', kaaj:'/kadʒ/',
  bishram:'/biʃram/', chinta:'/tʃinta/',
  ki:'/ki/', ke:'/ke/', keno:'/kæno/', hyañ:'/hæ̃/', na:'/na/', thik:'/ʈʰik/', bujhechi:'/budʒʱetʃʰi/',
  chai:'/tʃai/', jabo:'/dʒabo/', korcho:'/kortʃʰo/', din:'/din/', dao:'/dao/', cholo:'/tʃolo/',
  lagbe:'/lagbe/', ashun:'/aʃun/', bosun:'/boʃun/', pronaam:'/pronam/', ashirbaad:'/aʃirbad/',
};
const _IW={}; Object.keys(IPA_WORDS).forEach(k=>_IW[k]={ipa:IPA_WORDS[k]});
const IPA_PHRASES = {
  p_iam:'/ami kobir/', p_yourname:'/tor nam ki/', p_myname:'/amar nam kobir/', p_nomoskar:'/nɔmoʃkar/',
  p_salam:'/assalamu alaikum/', p_walaikum:'/oalaikum assalam/', p_howru_f:'/kæmon atʃʰen/', p_howru:'/kæmon atʃʰo/',
  p_imwell:'/bʱalo atʃʰi/', p_wellandyou:'/bʱalo atʃʰi ar apni/', p_khobor:'/ki kʰɔbor/', p_soso:'/oi ækrɔkom/',
  p_thanks:'/dʱɔnːobad/', p_seeyou:'/dekʰa hobe/', p_imoff:'/atʃʰːa aʃi/', p_wherelive:'/kotʰae tʰaken/',
  p_ilivein:'/ami kolkatae tʰaki/', p_wherego:'/kotʰae dʒaben/', p_toGariahat:'/gɔɽiahaʈ kɔto/',
  p_stophere:'/ekʰane tʰamun/', p_gostraight:'/ʃodʒa dʒaben/', p_turnright:'/ɖan dike/', p_whattime:'/kɔʈa badʒe/',
  p_gonow:'/ækʰon dʒabo/', p_howmuch:'/kɔto holo/', p_toomuch:'/ɔnek beʃi/', p_reduce:'/damʈa ækʈu koman/',
  p_wanttea:'/amar tʃa tʃai/', p_onecup:'/æk kap tʃa dao/', p_whatneed:'/ki lagbe/', p_oneluchi:'/æk pleʈ lutʃi din/',
  p_thisisfather:'/ini amar baba/', p_bigfamily:'/amar poribar bɔɽo/', p_doing:'/ki kortʃʰo/', p_working:'/ami kadʒ kortʃʰi/',
  p_iliked:'/amar bʱalo legetʃʰe/', p_fine:'/ʈʰik atʃʰe/', p_letsgo:'/tʃolo dʒai/', p_raining:'/briʃʈi pɔɽtʃʰe/',
  p_dizzy:'/amar matʰa gʱurtʃʰe/', p_hurry:'/taɽataɽi eʃo/', p_allfine:'/ʃɔb ʈʰikʈʰak/', p_dontworry:'/tʃinta korben na/',
  p_gohome:'/ami baɽi dʒabo/', p_nomoskar_ma:'/nɔmoʃkar maʃima/', p_lovedfood:'/ranːaʈa ɔʃadʱaron/',
  p_verymuch:'/kʰub bʱalo legetʃʰe/', p_pronam:'/pronam ʈʰakuma/', p_onlybangla:'/ami apnar ʃoŋge baŋlai bolbo/',
  p_blessme:'/amake aʃirbad korun/',
};
const _IP={}; Object.keys(IPA_PHRASES).forEach(k=>_IP[k]={ipa:IPA_PHRASES[k]});
function mergePhonetics(){
  WORDS.forEach(w=>{ if(_IW[w.r]) w.ph=_IW[w.r].ipa; });
  Object.keys(PHRASES).forEach(id=>{ if(_IP[id]) PHRASES[id].ph=_IP[id].ipa; });
}
mergePhonetics();
