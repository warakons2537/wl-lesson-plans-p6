(window.WLM=window.WLM||{})[5]=(()=>{
const C=(en,th,ic)=>({en,th,ic});
const K={
 tr:C("turn right into Green Street","เลี้ยวขวาเข้าถนน Green Street","➡️"),
 tl:C("turn left into Apple Street","เลี้ยวซ้ายเข้าถนน Apple Street","⬅️"),
 ol:C("on the left","ทางซ้ายมือ","⬅️"),
 or:C("on the right","ทางขวามือ","➡️"),
 oc:C("on the corner","ตรงหัวมุม","📍"),
 zc:C("cross the zebra crossing","ข้ามทางม้าลาย","🚸"),
 wa:C("walk along the street","เดินไปตามถนน","🚶"),
 nt:C("next to","ติดกับ / ข้าง ๆ","🏫🏪"),
 op:C("opposite","ตรงข้าม","🏫⇄🏪"),
 fr:C("in front of","ข้างหน้า","⬆️🏫"),
 bh:C("behind","ข้างหลัง","🏫⬇️"),
 bw:C("between","ระหว่าง","🏫🏪🏦"),
 hos:C("hospital","โรงพยาบาล","🏥"),
 zoo:C("zoo","สวนสัตว์","🦁"),
 sup:C("supermarket","ซูเปอร์มาร์เก็ต","🛒"),
 sch:C("school","โรงเรียน","🏫"),
 bk:C("bookshop","ร้านหนังสือ","📖"),
 lib:C("library","ห้องสมุด","📚"),
 pol:C("police station","สถานีตำรวจ","🚓"),
 cin:C("cinema","โรงภาพยนตร์","🎬"),
 the:C("theatre","โรงละคร","🎭"),
 spc:C("sports centre","ศูนย์กีฬา","🏟️"),
 but:C("butcher’s","ร้านขายเนื้อ","🥩"),
 grn:C("greengrocer’s","ร้านขายผักและผลไม้","🥬"),
 che:C("chemist’s","ร้านขายยา","💊"),
 hai:C("hairdresser’s","ร้านทำผม","💇"),
 bak:C("baker’s","ร้านเบเกอรี่","🥖"),
 den:C("dentist’s","คลินิกทันตกรรม","🦷"),
 aqu:C("aquarium","พิพิธภัณฑ์สัตว์น้ำ","🐠")
};
const DIR=[K.tr,K.tl,K.ol,K.or,K.oc,K.zc,K.wa,K.nt,K.op,K.fr,K.bh,K.bw];
const SHOPS=[K.but,K.grn,K.che,K.hai,K.bak,K.den,K.the,K.spc];
const GR=[C("parents","พ่อแม่","👪"),C("grandparents","ปู่ย่าตายาย","👴👵")];
const OLD=[K.zoo,K.cin,K.the,C("shopping centre","ห้างสรรพสินค้า","🏬"),C("circus","ละครสัตว์","🎪"),K.aqu,
 C("went skateboarding","เล่นสเก็ตบอร์ด","🛹"),C("went cycling","ปั่นจักรยาน","🚴"),C("wrote letters","เขียนจดหมาย","✉️"),
 C("made jam","ทำแยม","🍓"),C("flew kites","เล่นว่าว","🪁"),...GR];
return {
"5.1":{cards:DIR,game:"เดินตามคำบอกทาง (White Street / Black Street)",ws:[
 {t:"fill",title:"1) เติมคำให้ถูกต้อง",instr:"เลือกคำจากกรอบมาเติมในช่องว่าง",bank:["along","zebra","on","next","Turn","opposite"],items:[
  {q:"Walk ___ the street.",a:"along"},{q:"Cross the ___ crossing.",a:"zebra"},{q:"It’s ___ your left.",a:"on"},
  {q:"The school is ___ to the bookshop.",a:"next"},{q:"___ right into Green Street.",a:"Turn"},
  {q:"The park is ___ the library. It is across the road.",a:"opposite"}]},
 {t:"draw",title:"2) วาดแผนที่อย่างง่าย",instr:"วาดสถานที่อย่างน้อย 5 แห่ง กำหนดจุดเริ่มต้น และตั้งชื่อถนน",h:260}]},
"5.2":{cards:[K.hos,K.zoo,K.sup,K.sch,K.bk,C("How do I get to …?","…ไปอย่างไร (ถามทาง)","❓"),C("Excuse me","ขอโทษนะ (เรียกให้คนสนใจ)","🙋"),K.nt,K.op,K.fr,K.bh,K.bw],game:"Directions game",ws:[
 {t:"fill",title:"1) เติมคำให้ถูกต้อง",instr:"เลือกคำจากกรอบมาเติมในช่องว่าง",bank:["How","Excuse","opposite","along","left"],items:[
  {q:"___ do I get to the hospital?",a:"How"},{q:"___ me, how do I get to the zoo?",a:"Excuse"},
  {q:"It’s ___ the school.",a:"opposite"},{q:"Walk ___ the street.",a:"along"},{q:"Turn ___ into Apple Street.",a:"left"}]},
 {t:"order",title:"2) เรียงบทสนทนา",instr:"เขียนเลข 1–5 หน้าประโยคให้เรียงเป็นบทสนทนา",lines:[
  "Excuse me, how do I get to the zoo?","Walk along the street.","Turn left into Apple Street.","It’s opposite the school.","Thank you."]}]},
"5.3":{cards:[C("map","แผนที่","🗺️"),C("pavement","ทางเท้า","🚶"),C("take bus number 11","ขึ้นรถประจำทางหมายเลข 11","🚌"),C("bus stop","ป้ายรถประจำทาง","🚏"),K.fr,
 C("along the street","ไปตามถนน","🛣️"),K.zc,C("on your left","ทางซ้ายมือของคุณ","⬅️"),C("turn left into … Street","เลี้ยวซ้ายเข้าถนน …","↰"),C("get off","ลงจากรถ","🔽")],game:"Where am I?",ws:[
 {t:"fill",title:"1) เติมคำให้ถูกต้อง",instr:"เลือกคำจากกรอบมาเติมในช่องว่าง",bank:["11","supermarket","along","left"],items:[
  {q:"Take bus number ___ on Main Street.",a:"11"},{q:"The bus stop is in front of the ___.",a:"supermarket"},
  {q:"The bus takes you ___ the street.",a:"along"},{q:"Walk along Black Street. It’s on your ___.",a:"left"}]},
 {t:"write",title:"2) เขียนบอกทาง",instr:"ดูแผนที่ น.67 Ex.5 เขียนบอกทางไปห้องสมุด เริ่มที่รถประจำทางหมายเลข 11 หน้าซูเปอร์มาร์เก็ต",lines:5}]},
"5.4":{cards:SHOPS,game:"เกมทบทวนร้านค้า",ws:[
 {t:"match",title:"1) จับคู่สถานที่กับจุดประสงค์",instr:"เขียนตัวอักษรหน้าข้อให้ตรงกับสถานที่",pairs:[
  ["butcher’s","to buy meat"],["greengrocer’s","to buy fruit and vegetables"],["chemist’s","to buy medicine"],["hairdresser’s","to cut your hair"],
  ["baker’s","to buy bread"],["dentist’s","to check your teeth"],["theatre","to watch a play"],["sports centre","to play sports"]]},
 {t:"fill",title:"2) เติมคำให้ถูกต้อง",instr:"เติมคำในบทสนทนา",items:[
  {q:"Where did you go yesterday? — I ___ to the baker’s.",a:"went"},{q:"Why did you go there? — ___ buy some bread.",a:"To"}]}]},
"5.5":{cards:[C("buy – bought","ซื้อ","🛍️"),C("fly – flew","บิน","✈️"),C("make – made","ทำ","🍰"),C("write – wrote","เขียน","✏️"),C("go – went","ไป","🚶"),C("see – saw","เห็น","👀"),
 C("didn’t buy","ไม่ได้ซื้อ","🚫🛍️"),C("didn’t fly","ไม่ได้บิน","🚫✈️"),C("didn’t make","ไม่ได้ทำ","🚫🍰"),C("didn’t write","ไม่ได้เขียน","🚫✏️"),C("didn’t go","ไม่ได้ไป","🚫🚶"),C("didn’t see","ไม่ได้เห็น","🚫👀")],game:"OX / Present to Past",ws:[
 {t:"fill",title:"เติมกริยาในวงเล็บเป็น Past simple (บอกเล่าหรือปฏิเสธตามที่กำหนด)",instr:"เขียนคำตอบในช่องว่าง",items:[
  {q:"She ___ an email. (write)",a:"wrote"},{q:"She ___ a letter. (not write)",a:"didn’t write"},{q:"Mum ___ a cake. (make)",a:"made"},
  {q:"I ___ any bread. (not buy)",a:"didn’t buy"},{q:"My uncle ___ to Chiang Mai. (fly)",a:"flew"},{q:"We ___ to the cinema. (not go)",a:"didn’t go"},
  {q:"I ___ a tiger at the zoo. (see)",a:"saw"},{q:"He ___ a new bag yesterday. (buy)",a:"bought"}]}]},
"5.6":{cards:[...SHOPS,K.aqu,C("to","/tə/ เสียงเบา (เสียงเต็ม /tuː/)","🔉"),C("some","/səm/ เสียงเบา","🔉"),C("and","/ənd/ เสียงเบา","🔉")],game:"",ws:[
 {t:"fill",title:"1) เติมคำให้ถูกต้อง",instr:"เลือกคำจากกรอบมาเติมในช่องว่าง",bank:["aquarium","to","bears","some"],items:[
  {q:"Last weekend, I went to the ___ to see the animals.",a:"aquarium"},{q:"I went to the baker’s ___ buy some bread.",a:"to"},
  {q:"She saw tigers, giraffes, ___ and lions.",a:"bears"},{q:"I went to the chemist’s to buy ___ medicine.",a:"some"}]},
 {t:"match",title:"2) จับคู่ประโยคให้สมบูรณ์",instr:"เขียนตัวอักษรหน้าข้อให้ตรงกับส่วนท้ายประโยค",pairs:[
  ["I went to the baker’s","to buy some bread."],["I went to the aquarium","to see the animals."],["I went to the chemist’s","to buy some medicine."],["I went to the butcher’s","to buy some meat."]]},
 {t:"match",title:"3) จับคู่คำกับเสียงเบา (weak form)",instr:"เขียนตัวอักษรหน้าข้อ",pairs:[["to","/tə/"],["some","/səm/"],["and","/ənd/"]]}]},
"5.7":{cards:[K.nt,K.op,K.fr,K.bh,K.bw,K.hos,K.den,K.spc,K.pol,K.the,K.che],game:"Follow me",ws:[
 {t:"order",title:"1) เรียงบทสนทนา",instr:"เขียนเลข 1–5 หน้าประโยคให้เรียงเป็นบทสนทนา",lines:[
  "Excuse me, where’s the chemist’s, please?","It’s on Park Road.","How do I get there?","Walk along Main Street.","OK. Thank you."]},
 {t:"fill",title:"2) เติมคำให้ถูกต้อง",instr:"เขียนคำตอบในช่องว่าง",items:[
  {q:"Excuse me, where’s the chemist’s, ___?",a:"please"},{q:"It’s ___ Park Road.",a:"on"},{q:"Walk ___ Main Street.",a:"along"},{q:"How do I get ___?",a:"there"}]}]},
"5.8":{cards:[C("Belgium","เบลเยียม","🇧🇪"),C("Brazil","บราซิล","🇧🇷"),C("Germany","เยอรมนี","🇩🇪"),C("Canada","แคนาดา","🇨🇦"),C("Switzerland","สวิตเซอร์แลนด์","🇨🇭"),
 C("France","ฝรั่งเศส","🇫🇷"),C("Italy","อิตาลี","🇮🇹"),C("China","จีน","🇨🇳"),C("Japan","ญี่ปุ่น","🇯🇵"),
 C("sausages","ไส้กรอก","🌭"),C("chocolate","ช็อกโกแลต","🍫"),C("maple syrup","น้ำเชื่อมเมเปิล","🍁"),C("olive oil","น้ำมันมะกอก","🫒"),C("coffee","กาแฟ","☕"),C("wine","ไวน์","🍷")],game:"",ws:[
 {t:"match",title:"1) จับคู่ประเทศกับสินค้าที่มีชื่อเสียง",instr:"เขียนตัวอักษรหน้าข้อให้ตรงกับสินค้า [ตรวจสอบ: เยอรมนี/แคนาดา/อิตาลี ให้ตรงกับ น.73 Ex.3]",pairs:[
  ["Belgium","chocolate"],["Brazil","coffee"],["Germany","sausages"],["Canada","maple syrup"],["France","wine"],["Italy","olive oil"]]},
 {t:"fill",title:"2) เติมคำให้ถูกต้อง",instr:"เขียนคำตอบในช่องว่าง",bank:["for","wine","bought","coffee"],items:[
  {q:"What product is France famous ___?",a:"for"},{q:"France is famous for its ___.",a:"wine"},
  {q:"What did you buy from Belgium? — I ___ chocolate.",a:"bought"},{q:"Brazil is famous for its ___.",a:"coffee"}]}]},
"5.9":{cards:[K.nt,K.op,K.fr,K.bh,K.bw,K.cin,K.lib,K.che,K.den,K.pol],game:"",ws:[
 {t:"fill",title:"เติมคำให้ถูกต้อง",instr:"เลือกคำจากกรอบมาเติมในช่องว่าง",bank:["went","didn’t","to","Main"],items:[
  {q:"Pat’s grandparents ___ to the market to buy food.",a:"went"},{q:"They ___ go to the supermarket.",a:"didn’t"},
  {q:"I went to a farm ___ see sheep and cows.",a:"to"},{q:"Where’s the police station? — It’s on ___ Street.",a:"Main"}]}]},
"5.10":{cards:OLD,game:"",ws:[
 {t:"fill",title:"1) parent หรือ grandparent",instr:"เขียนคำตอบในช่องว่าง (ไม่เติม s)",items:[
  {q:"One mum or dad = a ___",a:"parent"},{q:"One grandmother or grandfather = a ___",a:"grandparent"}]},
 {t:"table",title:"2) บันทึกข้อมูลสัมภาษณ์",instr:"เขียนสถานที่และกิจกรรมที่ทำตอนเด็ก (ตัวอย่าง: When I was young, I went to the zoo.)",cols:["","Places","Activities"],rows:["My grandparent","Me","Both"]},
 {t:"venn",title:"3) แผนภาพเวนน์",instr:"เขียนสิ่งที่ปู่/ตาหรือย่า/ยายและตนเองทำ และสิ่งที่ทำเหมือนกันลงในแผนภาพ",labels:["My grandparent","Both","Me"]}]},
"5.11":{cards:OLD,game:"เกมใบ้คำ",ws:[
 {t:"check",title:"1) ฟังเพื่อน ประเมินการพูด",instr:"ทำเครื่องหมาย ✓ ในข้อที่เพื่อนทำได้",items:[
  "ทักทายก่อนนำเสนอและขอบคุณเมื่อพูดจบ","อ่านออกเสียงคำศัพท์และประโยคถูกต้อง","พูดอย่างมั่นใจ","สบตาผู้ฟัง","ใช้ภาษาท่าทางประกอบ"]},
 {t:"write",title:"2) feedback ให้เพื่อน",instr:"จุดเด่นหรือสิ่งที่ชอบ 2 ข้อ",lines:2},
 {t:"write",title:"",instr:"สิ่งที่ปรับปรุงให้ดียิ่งขึ้นได้ 1 ข้อ",lines:1}]}
};
})();
