(function(){
'use strict';
const key='kinostudiya_analytics_consent_v1', id=113677817;
let choice=null; try { choice=localStorage.getItem(key); } catch(e) {}
window['disableYaCounter'+id]=choice!=='yes';
function start(){ if(window.__ym113677817Initialized)return; window['disableYaCounter'+id]=false; window.__ym113677817Initialized=true;
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=Date.now();k=e.createElement(t);a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=113677817','ym');
  window.ym(id,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:'dataLayer',accurateTrackBounce:true,trackLinks:true,referrer:document.referrer,url:location.href});
}
if(choice==='yes')start();
function init(){
 const style=document.createElement('style'); style.textContent='#cookie-choice{position:fixed;z-index:2147483000;right:24px;bottom:24px;width:min(440px,calc(100vw - 32px));box-sizing:border-box;padding:23px 24px;background:#080b0f;color:#eee;border:0.5px solid #c9a84c;box-shadow:0 8px 32px #0008;font:300 15px/1.5 "Cera Pro",sans-serif}#cookie-choice[hidden]{display:none}#cookie-choice p{margin:0 0 3px}#cookie-choice a{display:inline-block;color:#c9a84c;text-decoration:underline;text-underline-offset:3px}#cookie-choice .cookie-buttons{display:flex;gap:10px;margin-top:19px}#cookie-choice button{flex:1;min-width:0;min-height:46px;padding:10px 8px;border:0.5px solid #c9a84c;background:transparent;color:#c9a84c;cursor:pointer;font:700 11px/1.2 "Cera Pro",sans-serif;letter-spacing:2px;text-transform:uppercase}#cookie-choice button:hover,#cookie-choice button:focus-visible{background:#c9a84c;color:#0b1019}#cookie-choice button:focus-visible,#cookie-choice a:focus-visible{outline:2px solid #fff;outline-offset:3px}@media(max-width:600px){#cookie-choice{right:16px;bottom:16px;padding:18px 18px;font-size:14px}#cookie-choice .cookie-buttons{margin-top:15px}#cookie-choice button{min-height:44px;letter-spacing:1.4px}}';document.head.appendChild(style);
 const box=document.createElement('section');box.id='cookie-choice';box.setAttribute('aria-label','Настройки cookies');box.hidden=true;box.innerHTML='<p>Мы используем cookies для анализа работы сайта. <a href="/#" id="cookie-policy">Политика конфиденциальности</a></p><div class="cookie-buttons"><button type="button" id="cookie-yes">Принять</button><button type="button" id="cookie-no">Отклонить</button></div>';document.body.appendChild(box);
 box.querySelector('#cookie-policy').onclick=function(e){if(typeof window.openPrivacy==='function'){e.preventDefault();window.openPrivacy()}};
 function choose(value){let old=choice;choice=value;try{localStorage.setItem(key,value)}catch(e){}box.hidden=true;if(value==='yes')start();else {window['disableYaCounter'+id]=true;if(old==='yes')location.reload()}}
 box.querySelector('#cookie-yes').onclick=()=>choose('yes');box.querySelector('#cookie-no').onclick=()=>choose('no');if(choice!=='yes'&&choice!=='no')box.hidden=false;
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();