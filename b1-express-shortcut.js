/* AYDA B1 · Ana sayfaya dersleri bozmadan alıştırma kitabı bağlantısı. */
(()=>{"use strict";
const ID="ayda-b1-express-card";
const st=document.createElement("style");
const selector="#"+ID;
st.textContent=[
selector+"{width:min(1180px,calc(100% - 40px));margin:19px auto 29px;padding:23px 27px;background:#fff;border:1px solid #dbe3ea;border-left:5px solid #e8c37b;border-radius:16px;display:flex;justify-content:space-between;align-items:center;gap:18px;box-shadow:0 8px 25px #0b1b310d;text-decoration:none;color:#142b44;transition:border-color .16s,box-shadow .16s}",
selector+":hover{border-color:#a3b5c5;box-shadow:0 12px 30px #0b1b3115}",
selector+":focus-visible{outline:3px solid #214d75;outline-offset:3px}",
selector+" .ayda-b1-express-heading{display:block;font-size:clamp(18px,2.5vw,22px);font-weight:850;letter-spacing:-.018em;color:#102541;line-height:1.3}",
selector+" .ayda-b1-express-copy{display:block;font-size:13px;line-height:1.6;color:#536779;margin-top:6px}",
selector+" .ayda-b1-express-link{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;background:#102541;min-height:45px;padding:11px 16px;color:white;font-size:13px;font-weight:750;white-space:nowrap}",
"@media(max-width:640px){"+selector+"{width:calc(100% - 24px);margin:13px auto 21px;padding:17px 16px;flex-direction:column;align-items:stretch;gap:12px}"+selector+" .ayda-b1-express-link{width:100%}}",
"@media(prefers-reduced-motion:reduce){"+selector+"{transition:none}}"
].join("\n");
document.head.append(st);
function mount(){
 const gate=document.getElementById("aydaProtectedContent");
 if(!gate||getComputedStyle(gate).display==="none")return;
 const hero=gate.querySelector(".hero");
 if(!hero||document.getElementById(ID))return;
 const link=document.createElement("a");link.id=ID;link.href="./express/";
 link.setAttribute("aria-label","AYDA B1 Komple Alıştırmalar çalışma kitabını aç");
 const content=document.createElement("span");
 const heading=document.createElement("strong");heading.className="ayda-b1-express-heading";heading.textContent="B1 Komple Alıştırmalar";
 const caption=document.createElement("span");caption.className="ayda-b1-express-copy";caption.textContent="24 ünite · 576 özgün soru · Türkçe konu mantığı · Okuma, yazma ve konuşma";
 const action=document.createElement("span");action.className="ayda-b1-express-link";action.textContent="Çalışmaya başla →";
 content.append(heading,caption);link.append(content,action);
 hero.insertAdjacentElement("afterend",link);
}
let pending=false;
const observer=new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;mount()})});
observer.observe(document.getElementById("root")||document.body,{childList:true,subtree:true});
const gate=document.getElementById("aydaProtectedContent");
if(gate)observer.observe(gate,{attributes:true,attributeFilter:["style","class"]});
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount,{once:true});else mount();
})();
