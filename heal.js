/* =========================================================
   heal.js  |  "Just to Heal" mode for Dhiren Oad's site
   Add ONE line to index.html, just before </body>, AFTER your main script:
   <script src="heal.js"></script>
   ========================================================= */
(()=>{
const DIR='assets/', EXT='.mp3';   // songs: assets/m1.mp3 ... assets/m50.mp3  (change EXT if needed)

/* 50 song names: Nepali | Roman */
const T=`मनको शान्त किनारा|Manko Shant Kinara
आमाको काखजस्तै|Aamako Kakhajastai
बादलभित्रको घाम|Badalbhitrako Gham
पुराना चिट्ठीहरू|Purana Chitthiharu
मौन उकालो|Maun Ukalo
फेरि फर्किएँ आफैंतिर|Pheri Phirkiye Aafaitir
झरीको धुन|Jharika Dhun
अधुरा सपनाहरू|Adhura Sapanaharu
हिमालको काखमा|Himalko Kakhama
एक सास शान्ति|Ek Saas Shanti
साँझको पहेँलो उज्यालो|Sanjhako Pahelo Ujyalo
बिर्सिएका बाटाहरू|Birsieka Bataharu
मनभित्रको मुहान|Manbhitrako Muhan
टाढाको घरको सम्झना|Tadhako Gharko Samjhana
आँसुको मीठो स्वाद|Aansuko Mitho Swad
पहाडी हावा|Pahadi Hawa
मायाको मसिनो धागो|Mayako Masino Dhago
चुपचाप बग्दै|Chupchap Bagdai
जुनेली रात|Juneli Raat
बाल्यकालका गल्लीहरू|Balyakalka Gallilharu
बिस्तारै निको हुँदै|Bistarai Niko Hudai
आफ्नै छायाँसँग|Aafnai Chhayasanga
घाँटीमा अड्किएको गीत|Ghantima Adkieko Geet
फूलले भन्यो|Phulle Bhanyo
शिशिरको पात|Shishirko Paat
मनको पुरानो डायरी|Manko Purano Diary
आकाशभरि तारा|Aakashbhari Tara
कसैलाई नभनेको कुरा|Kasailai Nabhaneko Kura
आमाको लोरी|Aamako Lori
नदीको किनारमा|Nadiko Kinarama
सिमलको रातो फूल|Simalko Rato Phool
मेरो भित्रको मौसम|Mero Bhitrako Mausam
धुवाँ र सम्झना|Dhuwa Ra Samjhana
पर्खाइको मीठो पीडा|Parkhaiko Mitho Pida
हरेक बिहानको आशा|Harek Bihanko Asha
चौतारीको छहारी|Chautariko Chhahari
मुटुको मसिनो कम्पन|Mutuko Masino Kampan
बिना शब्दको माया|Bina Shabdako Maya
कोइलीको बिहानी|Koiliko Bihani
सुस्त सुस्त पाइलाहरू|Susta Susta Pailaharu
क्षमा आफैंलाई|Kshama Aafailai
एकान्तको सङ्गीत|Ekantako Sangeet
पुरानो घरको आँगन|Purano Gharko Aangan
हिउँ पग्लिएको बिहान|Hiun Paglieko Bihan
सम्झनाको झ्याल|Samjhanako Jhyal
शान्तिको घण्टी|Shantiko Ghanti
मनले मनलाई सुन्दा|Manle Manlai Sunda
उज्यालोतिरको यात्रा|Ujyalotirko Yatra
आशाको सानो दियो|Ashako Sano Diyo
घर फर्किने बाटो|Ghar Phirkine Bato`.split('\n').map((l,i)=>{const[n,r]=l.split('|');return{src:DIR+'m'+(i+1)+EXT,n,r}});

const Q=['मन शान्त भयो भने संसार पनि शान्त देखिन्छ।','आज एक सास गहिरो लिऊँ, बाँकी आफैं मिल्छ।','निको हुनलाई हतार चाहिँदैन।','थकान पनि यात्राकै हिस्सा हो।','आफ्नै गतिमा हिँड्नु पनि साहस हो।','मौनतामा पनि सङ्गीत हुन्छ।'];

const $=s=>document.querySelector(s);

/* ---------- styles ---------- */
const grain="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")";
const f=document.createElement('link');f.rel='stylesheet';f.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&display=swap';document.head.append(f);
const st=document.createElement('style');st.textContent=`
body.heal{padding-bottom:120px}
#hv{position:fixed;inset:0;z-index:45;pointer-events:none;opacity:0;transition:opacity 2s;
  background:radial-gradient(ellipse at center,#0000 45%,#1a0e0699 100%),#b8793a1a;mix-blend-mode:soft-light}
#hv::before{content:"";position:absolute;inset:-50%;background:${grain};opacity:.16;animation:gj .9s steps(5) infinite}
#hv.on{opacity:1}
@keyframes gj{20%{transform:translate(-3%,2%)}40%{transform:translate(2%,-3%)}60%{transform:translate(-2%,-1%)}80%{transform:translate(3%,3%)}}
.pt{position:fixed;top:-5vh;z-index:44;pointer-events:none;width:9px;height:13px;border-radius:80% 0 80% 0;
  background:linear-gradient(135deg,#f5d6a0,#c98a52);opacity:0;animation:fl linear infinite}
body.heal .pt{opacity:.55}
@keyframes fl{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(40px,55vh) rotate(180deg)}100%{transform:translate(-20px,108vh) rotate(380deg)}}

#hl{position:fixed;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translate(-50%,170%);
  width:min(1000px,94vw);z-index:60;display:flex;align-items:center;gap:18px;padding:12px 22px 12px 14px;
  border-radius:14px;color:#f4e6c8;font-family:'Cormorant Garamond',Georgia,serif;overflow:hidden;
  background:linear-gradient(135deg,#f0d49a33,#6b3f1f40),#1e160e59;
  -webkit-backdrop-filter:blur(18px) sepia(.55) saturate(1.2);backdrop-filter:blur(18px) sepia(.55) saturate(1.2);
  border:1px solid #f1d9a670;box-shadow:0 18px 50px #000b,inset 0 1px 0 #fff3,inset 0 0 44px #c8934a26;
  transition:transform 1.1s cubic-bezier(.2,.8,.2,1)}
#hl::before{content:"";position:absolute;inset:0;background:${grain};opacity:.2;mix-blend-mode:overlay;pointer-events:none}
#hl.on{transform:translate(-50%,0)}
.dk{flex:none;width:56px;height:56px;border-radius:50%;position:relative;
  background:repeating-radial-gradient(circle,#0d0905 0 2px,#2a1d11 3px 4px);box-shadow:0 4px 14px #000a,0 0 0 2px #f1d9a640}
.dk::after{content:"";position:absolute;inset:19px;border-radius:50%;background:radial-gradient(circle,#2a1d11 0 12%,#e3b66f 14%,#b9803f)}
.dk::before{content:"";position:absolute;inset:4px;border-radius:50%;background:conic-gradient(#fff0,#fff3 8%,#fff0 20%,#fff0 50%,#fff3 58%,#fff0 70%)}
#hl.pl .dk{animation:sp 7s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}
.hi{flex:1;min-width:0;position:relative}
.hi small{display:block;font-size:13px;letter-spacing:.08em;color:#e3c48d;font-style:italic}
.hi b{display:block;font:500 clamp(17px,2.6vw,22px)/1.35 'Noto Sans Devanagari',serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hi em{display:block;font-size:15px;color:#d9bf8f}
.bar{height:2px;margin-top:8px;background:#f4e6c826;border-radius:2px;overflow:hidden}
.bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#e3b66f,#fff1cf)}
.q{flex:0 1 240px;font:500 clamp(13px,1.5vw,15px)/1.5 'Noto Sans Devanagari',serif;color:#e7d3a8;opacity:.85;text-align:right;transition:opacity .8s}
.eq{display:flex;gap:3px;align-items:flex-end;height:20px;flex:none}
.eq s{width:3px;height:30%;background:#e3b66f;border-radius:2px}
#hl.pl .eq s{animation:eq 1s ease-in-out infinite}
.eq s:nth-child(2){animation-delay:.2s!important}.eq s:nth-child(3){animation-delay:.45s!important}.eq s:nth-child(4){animation-delay:.1s!important}
@keyframes eq{50%{height:100%}}
#hp{flex:none;width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:#f4e6c81f;
  border:1px solid #f1d9a6aa;color:#fbefd2;position:relative;transition:background .25s,transform .25s}
#hp:hover{background:#e3b66f55;transform:scale(1.07)}
#hp svg{width:20px;height:20px;fill:currentColor}
#hp .i2{display:none}#hl.pl #hp .i1{display:none}#hl.pl #hp .i2{display:block}
@media(max-width:640px){.q{display:none}.eq{display:none}#hl{gap:12px;padding:10px 14px 10px 10px}.dk{width:46px;height:46px}.dk::after{inset:15px}}
@media(prefers-reduced-motion:reduce){#hv::before,.pt,#hl.pl .dk,#hl.pl .eq s{animation:none!important}}
`;document.head.append(st);

/* ---------- DOM ---------- */
const hv=document.createElement('div');hv.id='hv';
const hl=document.createElement('div');hl.id='hl';hl.setAttribute('role','region');hl.setAttribute('aria-label','Healing music player');
hl.innerHTML=`<div class="dk"></div>
<div class="hi"><small id="hc">Just to Heal</small><b id="ht">...</b><em id="hr"></em><div class="bar"><i id="hg"></i></div></div>
<div class="eq"><s></s><s></s><s></s><s></s></div>
<div class="q" id="hq"></div>
<button id="hp" aria-label="Pause or resume music"><svg class="i1" viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg><svg class="i2" viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg></button>`;
document.body.append(hv,hl);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)for(let i=0;i<14;i++){
  const p=document.createElement('i');p.className='pt';
  p.style.cssText=`left:${Math.random()*100}vw;animation-duration:${14+Math.random()*14}s;animation-delay:${-Math.random()*20}s;transform:scale(${.6+Math.random()*.8})`;
  document.body.append(p)}

/* ---------- audio: random order, no repeats until all 50 are played ---------- */
const au=new Audio();au.preload='auto';
let q=[],cur=-1,fails=0,fadeT;
const shuffle=()=>{q=T.map((_,i)=>i);for(let i=q.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[q[i],q[j]]=[q[j],q[i]]}if(q[0]===cur)q.push(q.shift())};
function fadeIn(){clearInterval(fadeT);au.volume=0;fadeT=setInterval(()=>{au.volume=Math.min(.85,au.volume+.05);if(au.volume>=.85)clearInterval(fadeT)},120)}
function next(){
  if(!q.length)shuffle();
  cur=q.shift();const s=T[cur];
  au.src=s.src;
  $('#ht').textContent=s.n;$('#hr').textContent=s.r;
  $('#hc').textContent='Now healing · '+String(cur+1).padStart(2,'0')+' of '+T.length;
  const k=$('#hq');k.style.opacity=0;setTimeout(()=>{k.textContent=Q[Math.random()*Q.length|0];k.style.opacity=.85},700);
  if('mediaSession' in navigator)navigator.mediaSession.metadata=new MediaMetadata({title:s.n,artist:'Just to Heal',album:'Dhiren Oad'});
  fadeIn();au.play().catch(()=>{});
}
au.onended=()=>{fails=0;next()};
au.onerror=()=>{if(++fails<6)setTimeout(next,400);else{$('#hc').textContent='Songs not found';$('#ht').textContent='Check assets/ folder and file names';$('#hr').textContent=''}};
au.ontimeupdate=()=>{$('#hg').style.width=(au.duration?au.currentTime/au.duration*100:0)+'%'};
au.onplaying=()=>{fails=0;hl.classList.add('pl')};
au.onpause=()=>hl.classList.remove('pl');
const toggle=()=>au.paused?au.play().catch(()=>{}):au.pause();
$('#hp').onclick=toggle;   // the ONLY control: pause / resume
if('mediaSession' in navigator){
  navigator.mediaSession.setActionHandler('play',()=>au.play());
  navigator.mediaSession.setActionHandler('pause',()=>au.pause());
  ['previoustrack','nexttrack','seekto','seekbackward','seekforward'].forEach(a=>{try{navigator.mediaSession.setActionHandler(a,null)}catch(e){}});
}

/* ---------- heal mode on / off ---------- */
function start(){
  document.body.classList.add('heal');hv.classList.add('on');hl.classList.add('on');
  if(cur<0)next();else au.play().catch(()=>{});
}
function stop(){
  au.pause();document.body.classList.remove('heal');hv.classList.remove('on');hl.classList.remove('on');
}

/* ---------- new profile: "Just to Heal" ---------- */
const pp=$('.pp');
pp.insertAdjacentHTML('beforeend','<button id="hb" data-p="Just to Heal"><i style="background:linear-gradient(135deg,#6b9a82,#2e5e63)">🌿</i>Just to Heal</button>');
$('#hb').onclick=()=>{
  $('#pf').style.display='none';
  $('#who').textContent='🌿';
  $('#cwt').textContent='Continue Watching, Just to Heal';
  $('#gr').textContent='Breathe in. Let the music carry the rest.';
  scrollTo(0,0);start();
};
pp.querySelectorAll('button:not(#hb)').forEach(b=>b.addEventListener('click',stop));
$('#who').addEventListener('click',stop);
})();
