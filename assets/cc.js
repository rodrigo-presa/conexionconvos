
(function(){
 var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.1}):null;
 document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*80+'ms';io?io.observe(el):el.classList.add('vis')});
 var hd=document.getElementById('hd');function sc(){hd.classList.toggle('sc',scrollY>20)}addEventListener('scroll',sc,{passive:true});sc();
 var tbs=document.querySelectorAll('.tb'),ps=document.querySelectorAll('.pane'),cur=0,timer;
 function show(i){cur=i;tbs.forEach(function(t,j){t.classList.toggle('on',j==i)});ps.forEach(function(p,j){p.classList.toggle('on',j==i)})}
 tbs.forEach(function(t,i){t.addEventListener('click',function(){show(i);clearInterval(timer)})});
 var bg=document.getElementById('bg');function tg(o){document.body.classList.toggle('menu-open',o);bg.setAttribute('aria-expanded',o)}bg.addEventListener('click',function(){tg(!document.body.classList.contains('menu-open'))});document.querySelectorAll('#mn a').forEach(function(a){a.addEventListener('click',function(){tg(false)})});
 var fb=document.getElementById('fab');setTimeout(function(){fb.classList.remove('show')},6000);
 timer=setInterval(function(){show((cur+1)%tbs.length)},4500);
 document.querySelectorAll('.q button').forEach(function(b){b.addEventListener('click',function(){var q=b.parentNode,on=q.classList.contains('on');document.querySelectorAll('.q').forEach(function(x){x.classList.remove('on')});if(!on)q.classList.add('on')})});
})();
 (function(){var els=document.querySelectorAll('[data-count]');if(!els.length)return;var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function fmt(n){return Math.round(n).toLocaleString('es-AR')}
  function run(el){var to=+el.dataset.count,t0=null,d=1600;function st(t){if(t0===null)t0=t;var k=Math.min((t-t0)/d,1),e=1-Math.pow(1-k,3);el.textContent=fmt(to*e);if(k<1)requestAnimationFrame(st)}requestAnimationFrame(st)}
  if(rm||!('IntersectionObserver' in window))return;
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);o.unobserve(e.target)}})},{threshold:.6});
  els.forEach(function(el){o.observe(el)});
 })();
 (function(){
  document.addEventListener('click',function(e){
   var a=e.target.closest&&e.target.closest('a[href*="wa.me"]');
   if(!a||!window.gtag)return;
   var s=a.closest('section,header,footer,.mdr-band,.final'),
       lugar=(s&&(s.id||s.className)||'pagina').toString().split(' ')[0].slice(0,40);
   gtag('event','generate_lead',{method:'whatsapp',pagina:location.pathname,lugar:lugar});
  },true);
 })();

 // Share WA: URL dinámica en .nt-share
 (function(){
  var wa=document.querySelector('.nt-share a[href*="wa.me"]');
  if(!wa)return;
  var title=(document.querySelector('h1')||document.querySelector('title')||{}).textContent||document.title;
  title=title.replace(/ \| Conexi.n con Vos\s*$/,'').trim();
  wa.href='https://wa.me/?text='+encodeURIComponent(title+' — '+location.href);
 })();

 // ── Topbar: fecha, reloj, clima, dólar ──
 (function(){
  if(!document.getElementById('tbDate') && !document.getElementById('tbTemp')) return;

  // Inyectar .tb-clock CSS si no existe
  if(!document.querySelector('style[data-tb-clock]')){
   var s=document.createElement('style');
   s.setAttribute('data-tb-clock','');
   s.textContent='.tb-clock{font-weight:700;color:var(--ink,#15141A);font-variant-numeric:tabular-nums;font-size:13px;padding-left:8px;border-left:1px solid rgba(21,20,26,.12);margin-left:8px}';
   document.head.appendChild(s);
  }

  // Inyectar span#tbClock dentro de .tb-wx si no existe
  var wx=document.getElementById('tbWx');
  if(wx && !document.getElementById('tbClock')){
   var span=document.createElement('span');
   span.className='tb-clock'; span.id='tbClock';
   span.setAttribute('aria-label','Hora actual');
   wx.appendChild(span);
  }

  var DIAS=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  var MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

  // Fecha
  var now=new Date();
  var el=document.getElementById('tbDate');
  if(el) el.textContent=DIAS[now.getDay()]+' '+now.getDate()+' de '+MESES[now.getMonth()]+' '+now.getFullYear();

  // Reloj
  function tick(){var c=document.getElementById('tbClock');if(!c)return;var t=new Date();c.textContent=String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0');}
  tick(); setInterval(tick,15000);

  // Clima
  (async function(){
   try{
    var r=await fetch('https://wttr.in/Buenos+Aires?format=j1',{signal:AbortSignal.timeout(6000)});
    var d=await r.json(), c=d.current_condition[0];
    var temp=Math.round(parseFloat(c.temp_C));
    var desc=c.lang_es&&c.lang_es[0]&&c.lang_es[0].value||c.weatherDesc&&c.weatherDesc[0]&&c.weatherDesc[0].value||'';
    var et=document.getElementById('tbTemp'), ed=document.getElementById('tbDesc');
    if(et) et.textContent=temp+'°C';
    if(ed) ed.textContent='Buenos Aires · '+desc;
   }catch(e){var w=document.getElementById('tbWx');if(w)w.style.display='none';}
  })();

  // Dólar
  (async function(){
   try{
    var r=await fetch('https://dolarapi.com/v1/dolares',{signal:AbortSignal.timeout(8000)});
    var list=await r.json();
    var get=function(casa){return list.find(function(d){return d.casa===casa;});};
    var fmt=function(n){return '$'+Math.round(n).toLocaleString('es-AR');};
    var oficial=get('oficial'), blue=get('blue'), mep=get('bolsa');
    if(!oficial||!blue)throw 0;
    var box=document.getElementById('tbUsd'); if(!box)return;
    var html='<span>USD</span>';
    html+='<span>Oficial <b>'+fmt(oficial.venta)+'</b></span>';
    html+='<span>Blue <b>'+fmt(blue.venta)+'</b></span>';
    if(mep)html+='<span>MEP <b>'+fmt(mep.venta)+'</b></span>';
    box.innerHTML=html;
   }catch(e){var b=document.getElementById('tbUsd');if(b)b.style.display='none';}
  })();
 })();
