const UNITS=[[5,"Out and about"]];
let U=5,PLANS=[],M={},S={i:0,tab:"slides",g:"memory"};
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
function rngOf(seed){let h=2166136261;for(const ch of String(seed)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}
  return()=>{h+=0x6D2B79F5;let t=Math.imul(h^h>>>15,1|h);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function shuffle(a,r=Math.random){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function loadJs(src,ok){return new Promise((res,rej)=>{const s=document.createElement("script");s.src=src;s.onload=res;s.onerror=()=>rej(new Error(src));document.head.appendChild(s)})}
const cur=()=>({p:PLANS[S.i],m:M[PLANS[S.i].id]});

/* ---------- slides ---------- */
let deck=null;
function slidesOf(){const{p,m}=cur();
  return[{k:"title"},...m.cards.map(c=>({k:"card",c})),...p.sent.map(s=>({k:"sent",s}))]}
function slideHtml(s,p){
  if(s.k==="title")return`<div class="sl-in"><div class="sl-id">${esc(p.id)}</div><div class="sl-big" lang="en">${esc(p.title)}</div><div class="sl-sub">อ16101 ภาษาอังกฤษ ป.6 · Unit ${U} ${esc(UNITS.find(u=>u[0]===U)[1])}</div></div>`;
  if(s.k==="card")return`<div class="sl-in"><div class="sl-ic">${esc(s.c.ic)}</div><div class="sl-big" lang="en">${esc(s.c.en)}</div><div class="sl-sub">${esc(s.c.th)}</div></div>`;
  return`<div class="sl-in"><div class="sl-sent" lang="en">${esc(s.s)}</div></div>`}
function openDeck(){deck={list:slidesOf(),n:0};const d=$("deck");d.hidden=false;paintDeck();document.body.style.overflow="hidden"}
function paintDeck(){const{p}=cur();$("slide").innerHTML=slideHtml(deck.list[deck.n],p);$("dcount").textContent=(deck.n+1)+" / "+deck.list.length;
  $("dprev").disabled=deck.n===0;$("dnext").disabled=deck.n===deck.list.length-1}
function stepDeck(d){if(!deck)return;const n=deck.n+d;if(n<0||n>=deck.list.length)return;deck.n=n;paintDeck()}
function closeDeck(){$("deck").hidden=true;deck=null;document.body.style.overflow=""}

/* ---------- worksheet ---------- */
function blank(a,w){return`<span class="bl${w?" "+w:""}"><b class="an">${esc(a)}</b></span>`}
function secHtml(sec,seed){const r=rngOf(seed);let h=`<section class="ws-sec">${sec.title?`<h3>${esc(sec.title)}</h3>`:""}<p class="ws-i">${esc(sec.instr||"")}</p>`;
  if(sec.t==="fill"){
    if(sec.bank)h+=`<div class="bank">${shuffle(sec.bank,r).map(b=>`<span lang="en">${esc(b)}</span>`).join("")}</div>`;
    h+=`<ol class="ws-l">${sec.items.map(it=>`<li lang="en">${esc(it.q).replace("___",blank(it.a))}</li>`).join("")}</ol>`}
  else if(sec.t==="match"){
    const L=sec.pairs.map(p=>p[0]),R=shuffle(sec.pairs.map((p,i)=>i),r);
    const letter=i=>String.fromCharCode(65+i);
    h+=`<div class="mt"><ol class="ws-l" lang="en">${L.map((l,i)=>`<li>${blank(letter(R.indexOf(i)),"sm")} ${esc(l)}</li>`).join("")}</ol>
      <ul class="mt-r" lang="en">${R.map((ix,k)=>`<li><b>${letter(k)}</b> ${esc(sec.pairs[ix][1])}</li>`).join("")}</ul></div>`}
  else if(sec.t==="order"){
    const idx=shuffle(sec.lines.map((_,i)=>i),r);
    h+=`<ul class="ws-l np" lang="en">${idx.map(i=>`<li>${blank(i+1,"sm")} ${esc(sec.lines[i])}</li>`).join("")}</ul>`}
  else if(sec.t==="write"){h+=Array.from({length:sec.lines},()=>`<div class="ln"></div>`).join("")}
  else if(sec.t==="draw"){h+=`<div class="box" style="height:${sec.h||240}px"></div>`}
  else if(sec.t==="check"){h+=`<ul class="ws-l np">${sec.items.map(x=>`<li><span class="cb"></span> ${esc(x)}</li>`).join("")}</ul>`}
  else if(sec.t==="table"){h+=`<table class="tb"><tr>${sec.cols.map(c=>`<th lang="en">${esc(c)}</th>`).join("")}</tr>${sec.rows.map(r=>`<tr><th lang="en">${esc(r)}</th>${sec.cols.slice(1).map(()=>"<td></td>").join("")}</tr>`).join("")}</table>`}
  else if(sec.t==="venn"){h+=`<svg class="venn" viewBox="0 0 300 170" role="img" aria-label="Venn diagram"><circle cx="115" cy="85" r="75" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="185" cy="85" r="75" fill="none" stroke="currentColor" stroke-width="1.5"/><g font-size="12" text-anchor="middle" fill="currentColor"><text x="75" y="14">${esc(sec.labels[0])}</text><text x="150" y="14">${esc(sec.labels[1])}</text><text x="225" y="14">${esc(sec.labels[2])}</text></g></svg>`}
  return h+`</section>`}
function wsHtml(){const{p,m}=cur();
  return`<div class="sheet" id="sheet"><div class="ws-h"><div><b lang="en">${esc(p.title)}</b><span>อ16101 ภาษาอังกฤษ ป.6 · Unit ${U} · แผน ${esc(p.id)}</span></div><div class="nm">ชื่อ ................................ เลขที่ ......</div></div>
   ${m.ws.map((s,k)=>secHtml(s,p.id+"-"+k)).join("")}</div>`}

/* ---------- games ---------- */
let G={};
function memoryHtml(){const{m}=cur();const cs=shuffle(m.cards).slice(0,6);
  const tiles=shuffle(cs.flatMap((c,i)=>[{id:i,t:c.en,l:"en"},{id:i,t:c.th,l:"th"}]));G={k:"memory",tiles,open:[],done:new Set(),moves:0,lock:false};
  return memoryPaint()}
function memoryPaint(){const won=G.done.size===G.tiles.length/2;
  return`<div class="gm-info"><span>จับคู่คำอังกฤษกับความหมาย</span><b>ครั้งที่เปิด ${G.moves}</b></div>
  <div class="mem">${G.tiles.map((t,i)=>{const on=G.open.includes(i)||G.done.has(t.id);return`<button class="tile${on?" on":""}${G.done.has(t.id)?" ok":""}" data-act="tile" data-i="${i}" ${on?"disabled":""} ${t.l==="en"?'lang="en"':""}>${on?esc(t.t):"?"}</button>`}).join("")}</div>
  ${won?`<p class="win">เก่งมาก! จับคู่ครบใน ${G.moves} ครั้ง</p>`:""}<button class="btn" data-act="again">เล่นใหม่</button>`}
function tileClick(i){if(G.lock||G.open.includes(i))return;G.open.push(i);
  if(G.open.length===2){G.moves++;const[a,b]=G.open;
    if(G.tiles[a].id===G.tiles[b].id&&a!==b){G.done.add(G.tiles[a].id);G.open=[];$("gbody").innerHTML=memoryPaint()}
    else{G.lock=true;$("gbody").innerHTML=memoryPaint();setTimeout(()=>{G.open=[];G.lock=false;$("gbody").innerHTML=memoryPaint()},900)}}
  else $("gbody").innerHTML=memoryPaint()}
function quizBuild(){const{m}=cur();const cs=m.cards,qs=[];
  shuffle(cs).slice(0,10).forEach((c,k)=>{const others=shuffle(cs.filter(x=>x!==c)).slice(0,3);
    if(k%2===0)qs.push({q:`“${c.en}” แปลว่าอะไร`,en:true,opts:shuffle([c.th,...others.map(o=>o.th)]),a:c.th});
    else qs.push({q:`ข้อใดคือ “${c.th}”`,opts:shuffle([c.en,...others.map(o=>o.en)]),a:c.en,optEn:true})});
  G={k:"quiz",qs,n:0,sc:0,pick:null};return quizPaint()}
function quizPaint(){if(G.n>=G.qs.length)return`<p class="win">ได้ ${G.sc} / ${G.qs.length} คะแนน</p><button class="btn" data-act="again">เล่นใหม่</button>`;
  const q=G.qs[G.n];return`<div class="gm-info"><span>ข้อ ${G.n+1} / ${G.qs.length}</span><b>คะแนน ${G.sc}</b></div><p class="qq">${esc(q.q)}</p>
  <div class="opts">${q.opts.map((o,i)=>{let c="";if(G.pick!=null){if(o===q.a)c=" good";else if(i===G.pick)c=" bad"}
    return`<button class="opt${c}" data-act="opt" data-i="${i}" ${G.pick!=null?"disabled":""} ${q.optEn?'lang="en"':""}>${esc(o)}</button>`}).join("")}</div>
  ${G.pick!=null?`<button class="btn" data-act="qnext">${G.n+1>=G.qs.length?"ดูคะแนน":"ข้อถัดไป"}</button>`:""}`}
function pickBuild(){const{m}=cur();G={k:"pick",deck:shuffle(m.cards),n:0,show:false};return pickPaint()}
function pickPaint(){const c=G.deck[G.n];
  if(!c)return`<p class="win">สุ่มครบทุกใบแล้ว</p><button class="btn" data-act="again">สุ่มใหม่</button>`;
  return`<div class="gm-info"><span>ใบที่ ${G.n+1} / ${G.deck.length}</span></div><div class="pk"><div class="pk-ic">${esc(c.ic)}</div>
  ${G.show?`<div class="pk-en" lang="en">${esc(c.en)}</div><div class="pk-th">${esc(c.th)}</div>`:`<div class="pk-th">ทายคำจากภาพ</div>`}</div>
  <div class="row"><button class="btn alt" data-act="reveal">${G.show?"ซ่อนคำ":"เฉลยคำ"}</button><button class="btn" data-act="pnext">ใบถัดไป</button></div>`}
function gameHtml(){const{p,m}=cur();
  const tabs=[["memory","จับคู่ความจำ"],["quiz","ควิซ"],["pick","สุ่มบัตร"]];
  const body=S.g==="memory"?memoryHtml():S.g==="quiz"?quizBuild():pickBuild();
  return`<div class="seg">${tabs.map(t=>`<button data-act="g" data-g="${t[0]}" class="${S.g===t[0]?"on":""}">${t[1]}</button>`).join("")}</div>
  <div class="card" id="gbody">${body}</div>
  ${m.game?`<p class="gnote">เกมในแผนนี้: <b>${esc(m.game)}</b> — ใช้ “สุ่มบัตร” หรือพิมพ์บัตรคำไปเล่นในห้อง ดูวิธีเล่นในแผนสอน <a href="index.html#p${U}-${p.id.split(".")[1]}">แผน ${esc(p.id)}</a></p>`:""}`}

/* ---------- cards ---------- */
function cardsHtml(){const{m}=cur();
  return`<div class="cgrid" id="cgrid">${m.cards.map(c=>`<button class="fc" data-act="fc"><span class="fc-ic">${esc(c.ic)}</span><span class="fc-en" lang="en">${esc(c.en)}</span><span class="fc-th">${esc(c.th)}</span></button>`).join("")}</div>`}

/* ---------- page ---------- */
function render(){const{p}=cur();
  const tabs=[["slides","สไลด์"],["cards","บัตรคำ"],["ws","ใบงาน"],["game","เกม"]];
  let body="";
  if(S.tab==="slides")body=`<div class="card"><p>สไลด์ ${slidesOf().length} หน้า (ชื่อแผน + บัตรคำ ${cur().m.cards.length} ใบ + ประโยคหลัก ${p.sent.length} ประโยค) แตะขวา/ซ้ายหรือปัดเพื่อเปลี่ยนหน้า</p><button class="btn" data-act="deck">เริ่มนำเสนอ</button></div>`;
  else if(S.tab==="cards")body=`<div class="tools"><button class="btn alt" data-act="hideth">ซ่อน/แสดงคำแปลไทย</button><button class="btn alt" data-act="print">พิมพ์บัตรคำ</button></div><p class="hint">แตะบัตรเพื่อซ่อน/แสดงคำแปล</p>${cardsHtml()}`;
  else if(S.tab==="ws")body=`<div class="tools"><button class="btn alt" data-act="ans">แสดง/ซ่อนเฉลย</button><button class="btn alt" data-act="print">พิมพ์ใบงาน</button></div>${wsHtml()}`;
  else body=gameHtml();
  $("app").innerHTML=`<header class="hero"><div class="eyebrow">สื่อการสอน · Unit ${U} ${esc(UNITS.find(u=>u[0]===U)[1])}</div><div class="id">${esc(p.id)}</div><h1 lang="en">${esc(p.title)}</h1>
   <a class="back" href="index.html#p${U}-${p.id.split(".")[1]}">เปิดแผนสอน ${esc(p.id)} →</a></header>
   <div class="seg tabs" role="tablist">${tabs.map(t=>`<button role="tab" data-act="tab" data-t="${t[0]}" class="${S.tab===t[0]?"on":""}">${t[1]}</button>`).join("")}</div>${body}`;
  $("goback").href="index.html#p"+U+"-"+p.id.split(".")[1];
  $("pick").value=S.i;$("prev").disabled=S.i===0;$("next").disabled=S.i===PLANS.length-1;
  document.title="สื่อ "+p.id+" "+p.title}
function go(i){S.i=Math.max(0,Math.min(PLANS.length-1,i));try{history.replaceState(null,"","#p"+PLANS[S.i].id.replace(".","-"))}catch(e){}render();window.scrollTo(0,0)}
document.addEventListener("click",e=>{const b=e.target.closest("[data-act]");if(!b)return;const a=b.dataset.act;
  if(a==="tab"){S.tab=b.dataset.t;render()}
  else if(a==="deck")openDeck();
  else if(a==="fc"){b.classList.toggle("hide")}
  else if(a==="hideth"){const g=$("cgrid");const on=!g.classList.contains("noth");g.classList.toggle("noth",on);g.querySelectorAll(".fc").forEach(x=>x.classList.remove("hide"))}
  else if(a==="ans")$("sheet").classList.toggle("showans");
  else if(a==="print")window.print();
  else if(a==="g"){S.g=b.dataset.g;render()}
  else if(a==="again"){render()}
  else if(a==="tile")tileClick(+b.dataset.i);
  else if(a==="opt"){const q=G.qs[G.n];G.pick=+b.dataset.i;if(q.opts[G.pick]===q.a)G.sc++;$("gbody").innerHTML=quizPaint()}
  else if(a==="qnext"){G.n++;G.pick=null;$("gbody").innerHTML=quizPaint()}
  else if(a==="reveal"){G.show=!G.show;$("gbody").innerHTML=pickPaint()}
  else if(a==="pnext"){G.n++;G.show=false;$("gbody").innerHTML=pickPaint()}
  else if(a==="dprev")stepDeck(-1);else if(a==="dnext")stepDeck(1);else if(a==="dclose")closeDeck()});
document.addEventListener("keydown",e=>{if(!deck)return;if(e.key==="ArrowRight"||e.key===" ")stepDeck(1);else if(e.key==="ArrowLeft")stepDeck(-1);else if(e.key==="Escape")closeDeck()});
let tx=null;document.addEventListener("touchstart",e=>{if(deck)tx=e.touches[0].clientX},{passive:true});
document.addEventListener("touchend",e=>{if(!deck||tx==null)return;const d=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(d)>50)stepDeck(d<0?1:-1)},{passive:true});
(async function init(){
  $("unit").innerHTML=UNITS.map(u=>`<option value="${u[0]}">Unit ${u[0]} ${esc(u[1])}</option>`).join("");
  try{await loadJs("data/u"+U+".js");await loadJs("data/m"+U+".js")}catch(e){$("app").innerHTML='<div class="card">โหลดข้อมูลสื่อไม่สำเร็จ กรุณาเชื่อมต่ออินเทอร์เน็ตแล้วลองใหม่</div>';return}
  PLANS=WLU[U].PLANS;M=WLM[U];
  $("pick").innerHTML=PLANS.map((p,i)=>`<option value="${i}">${esc(p.id)} ${esc(p.title)}</option>`).join("");
  $("pick").onchange=e=>go(+e.target.value);$("prev").onclick=()=>go(S.i-1);$("next").onclick=()=>go(S.i+1);
  const m=(location.hash||"").match(/^#p(\d+)-(\d+)$/);if(m){const f=PLANS.findIndex(p=>p.id===m[1]+"."+m[2]);if(f>=0)S.i=f}
  window.addEventListener("hashchange",()=>{const m=(location.hash||"").match(/^#p(\d+)-(\d+)$/);if(!m)return;const f=PLANS.findIndex(p=>p.id===m[1]+"."+m[2]);if(f>=0&&f!==S.i){S.i=f;render()}});
  $("foot").textContent="สื่อการสอน อ16101 ภาษาอังกฤษ ป.6 · RISE 6 · โรงเรียนบ้านวังลึก(ยุวนาฏชนูทิศ)";
  render()})();
