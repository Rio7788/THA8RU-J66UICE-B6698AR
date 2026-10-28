import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import * as FS from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import * as AU from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {firebaseConfig} from "./firebase-config.js";
export {FS,AU};
export const configured=!/^YOUR/.test(firebaseConfig.apiKey);
const app=configured?initializeApp(firebaseConfig):null;
export const db=configured?FS.getFirestore(app):null;
export const auth=configured?AU.getAuth(app):null;
export const WA="94789280918",MAPS="https://maps.app.goo.gl/sts6Jc5GBXbinUr2A";
export let lang=localStorage.tharu_lang||'en';
export const shop={open:true};

const T={en:{nav_home:'Home',nav_menu:'Menu',nav_cart:'Cart',open:'Open now',closed:'Closed',eyebrow:'100% fresh fruit',h1:'Fresh. Cold. Squeezed just for you.',sub:'Real fruit juices, smoothies and shakes, made fresh to order at THARU Juice Bar.',order:'Order now',dir:'Get directions',gal:'Our shop',rev:'Customer reviews',revp:'Enjoyed your drink? Tell the world, or find us on the map.',revbtn:'Leave a Review / Get Directions on Google Maps',about:'About us',aboutp:'Every glass at THARU Juice Bar is made from fruit picked for freshness, blended in front of you, and served ice cold.',p1t:'Fresh fruit',p1d:'Chosen every morning.',p2t:'Less sugar',p2d:'Naturally sweet, your way.',p3t:'Fast service',p3d:'Ready in minutes.',p4t:'Fair prices',p4d:'Great taste for everyone.',contact:'Contact us',contactp:'Questions or big orders? Message us on WhatsApp.',wa:'Chat on WhatsApp',menuT:'Our menu',all:'All',juice:'Juices',smoothie:'Smoothies',shake:'Shakes',other:'Others',add:'Add to cart',oos:'Out of stock',none:'No items in this category yet.',added:'Added to cart',cartT:'Your cart',cartEmpty:'Your cart is empty.',backmenu:'Browse the menu',total:'Total',name:'Your name',phone:'Phone number',type:'Order type',pickup:'Pickup',delivery:'Delivery',addr:'Address / note',send:'Place order via WhatsApp',closedmsg:'We are closed right now, so orders are paused.',wOrder:'New order',rs:'Rs.',rm:'Remove',fill:'Please enter your name and phone number.'},
si:{nav_home:'මුල් පිටුව',nav_menu:'මෙනුව',nav_cart:'කරත්තය',open:'දැන් විවෘතයි',closed:'වසා ඇත',eyebrow:'100% නැවුම් පළතුරු',h1:'නැවුම්. සිසිල්. ඔබටම සාදන.',sub:'THARU Juice Bar හි ඇණවුමට අනුව නැවුම්ව සාදන සැබෑ පළතුරු යුෂ, ස්මූති සහ ෂේක්.',order:'දැන් ඇණවුම් කරන්න',dir:'මාර්ගය බලන්න',gal:'අපගේ සාප්පුව',rev:'පාරිභෝගික සමාලෝචන',revp:'ඔබේ පානය රසවත් වුණාද? අපට සමාලෝචනයක් තබන්න, නැතහොත් සිතියමෙන් අපව සොයාගන්න.',revbtn:'සමාලෝචනයක් තබන්න / Google Maps හරහා මාර්ගය බලන්න',about:'අප ගැන',aboutp:'THARU Juice Bar හි සෑම වීදුරුවක්ම නැවුම් බව බලා තෝරාගත් පළතුරුවලින් ඔබ ඉදිරිපිටම සාදා, අයිස් සිසිලසින් පිරිනමනු ලැබේ.',p1t:'නැවුම් පළතුරු',p1d:'සෑම උදෑසනකම තෝරාගන්නා.',p2t:'සීනි අඩුයි',p2d:'ස්වභාවික මිහිරි, ඔබේ රුචියට.',p3t:'ඉක්මන් සේවාව',p3d:'විනාඩි කිහිපයකින් සූදානම්.',p4t:'සාධාරණ මිල',p4d:'සැමට ගැළපෙන රසවත් පානයන්.',contact:'අප අමතන්න',contactp:'ප්‍රශ්න හෝ විශාල ඇණවුම් සඳහා WhatsApp හරහා පණිවිඩයක් එවන්න.',wa:'WhatsApp හරහා කතා කරන්න',menuT:'අපගේ මෙනුව',all:'සියල්ල',juice:'යුෂ',smoothie:'ස්මූති',shake:'ෂේක්',other:'වෙනත්',add:'කරත්තයට දමන්න',oos:'තොගයේ නැත',none:'මෙම ප්‍රවර්ගයේ තවමත් අයිතම නැත.',added:'කරත්තයට එක් කළා',cartT:'ඔබේ කරත්තය',cartEmpty:'ඔබේ කරත්තය හිස්ය.',backmenu:'මෙනුව බලන්න',total:'මුළු මුදල',name:'ඔබේ නම',phone:'දුරකථන අංකය',type:'ඇණවුම් වර්ගය',pickup:'ගෙන යාම',delivery:'ගෙන්වා දීම',addr:'ලිපිනය / සටහන',send:'WhatsApp හරහා ඇණවුම තබන්න',closedmsg:'දැනට අපි වසා ඇත, ඒ නිසා ඇණවුම් නවතා ඇත.',wOrder:'නව ඇණවුමක්',rs:'රු.',rm:'ඉවත් කරන්න',fill:'කරුණාකර ඔබේ නම සහ දුරකථන අංකය ඇතුළත් කරන්න.'}};
export const t=k=>T[lang][k]??k;
export const nm=o=>lang==='si'?(o.nameSi||o.nameEn):(o.nameEn||o.nameSi);
export const money=n=>t('rs')+' '+Number(n).toLocaleString('en-US');

const P={
orange:'<circle cx="12" cy="12" r="9.5"/><path d="M12 3.5v17M3.5 12h17M6 6l12 12M18 6L6 18" stroke="#fff9eb" stroke-width="1.3" fill="none"/>',
leaf:'<path d="M20.5 3.5C10 3 4 8.500 4 15c0 1.800.6 3.300 1.500 4.500C7 14 10.500 10.500 15 9c-4 3-6.500 6-8 11 8 1 13.500-4.500 13.500-16.500z"/>',
drop:'<path d="M12 2.500C8 8 5.500 11 5.500 14.500a6.500 6.500 0 0 0 13 0C18.500 11 16 8 12 2.500z"/>',
clock:'<circle cx="12" cy="12" r="9.500" fill="none" stroke="currentColor" stroke-width="2.400"/><path d="M12 6.500V12l3.800 2.300" fill="none" stroke="currentColor" stroke-width="2.400" stroke-linecap="round"/>',
tag:'<path d="M3 3h8.500L21 12.500 12.500 21 3 11.500zM7.500 6.500a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3z" fill-rule="evenodd"/>',
star:'<path d="M12 2l3 6.500 7 .9-5.200 4.800 1.400 7L12 17.600 5.800 21.200l1.400-7L2 9.400l7-.9z"/>',
cart:'<path d="M3 3h2.200l2.600 11h10.500l2.200-8H6.200" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="19.500" r="1.800"/><circle cx="17" cy="19.500" r="1.800"/>',
sun:'<circle cx="12" cy="12" r="5"/><path d="M12 1.500v3M12 19.500v3M1.500 12h3M19.500 12h3M4.600 4.600l2.100 2.100M17.300 17.300l2.100 2.100M4.600 19.400l2.100-2.100M17.300 6.700l2.100-2.100" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
moon:'<path d="M20 14.500A8.500 8.500 0 1 1 9.500 4a7 7 0 0 0 10.500 10.500z"/>',
wa:'<path d="M12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2z"/><path d="M8.500 8.500c0 3 3 6 6 6l1.200-1.500-2-1-.8.800c-1-.4-1.900-1.300-2.300-2.300l.8-.8-1-2z" fill="#fff9eb"/>',
pin:'<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z" fill-rule="evenodd"/>'};
export const ico=n=>`<svg class="i" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${P[n]||''}</svg>`;

export const getCart=()=>{try{return JSON.parse(localStorage.tharu_cart)||[]}catch{return[]}};
export const badge=()=>{const e=document.getElementById('cc');if(e)e.textContent=getCart().reduce((a,i)=>a+i.q,0)};
export const setCart=c=>{localStorage.tharu_cart=JSON.stringify(c);badge()};
export function toast(m){const e=document.createElement('div');e.className='toast';e.setAttribute('role','status');e.textContent=m;document.body.append(e);setTimeout(()=>e.remove(),2000)}

function paint(){
  const st=document.getElementById('st');
  if(st)st.innerHTML=`<i class="dot ${shop.open?'on':''}"></i>${t(shop.open?'open':'closed')}`;
  const b=document.getElementById('bn');
  if(b){const x=lang==='si'?(shop.annSi||shop.annEn):(shop.annEn||shop.annSi);b.textContent=x||'';b.hidden=!x}
}
export function applyLang(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
  const lg=document.getElementById('lg');
  if(lg)lg.innerHTML=`[ <span class="${lang==='si'?'a':''}">සිංහල</span> | <span class="${lang==='en'?'a':''}">English</span> ]`;
  paint();document.dispatchEvent(new Event('langchange'));
}
export function mountHeader(active){
  const nav=[['index.html','nav_home'],['menu.html','nav_menu'],['cart.html','nav_cart']];
  document.getElementById('hdr').innerHTML=`<header><div id="bn" class="banner" hidden></div><div class="wrap"><div class="hbar"><a class="brand" href="index.html"><img src="images/logo001.png" alt="THARU Juice Bar logo"><span>THARU<br><small>Juice Bar</small></span></a><div class="tools"><button class="btn s l" id="lg" aria-label="Language"></button><button class="btn s g" id="th" aria-label="Dark / light mode"></button></div></div><nav class="nav">${nav.map(([h,k])=>`<a class="${h===active?'on':''}" href="${h}">${k==='nav_cart'?'<span data-ico="cart"></span>':''}<span data-i18n="${k}"></span>${k==='nav_cart'?'<b id="cc" class="cc">0</b>':''}</a>`).join('')}<span id="st" class="st"></span></nav></div></header>`;
  const f=document.getElementById('ftr');
  if(f)f.innerHTML=`<footer>&copy; ${new Date().getFullYear()} THARU Juice Bar</footer>`;
  document.querySelectorAll('[data-ico]').forEach(e=>e.innerHTML=ico(e.dataset.ico));
  const th=document.getElementById('th'),dk=()=>document.documentElement.dataset.theme==='dark';
  const pt=()=>th.innerHTML=ico(dk()?'sun':'moon');pt();
  th.onclick=()=>{const d=dk()?'light':'dark';document.documentElement.dataset.theme=d;localStorage.tharu_theme=d;pt()};
  document.getElementById('lg').onclick=()=>{lang=lang==='si'?'en':'si';localStorage.tharu_lang=lang;applyLang()};
  badge();applyLang();
  if(db)FS.onSnapshot(FS.doc(db,'settings','shop'),s=>{Object.assign(shop,{open:true},s.exists()?s.data():{});paint();document.dispatchEvent(new Event('shopchange'))},()=>{});
}
