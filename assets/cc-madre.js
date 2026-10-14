(function(){
 var root=document.documentElement;if(!root.classList.contains('madre'))return;
 document.querySelectorAll('.mdr-sprig:not(.mdr-sprig-c)').forEach(function(sp){if(!('IntersectionObserver' in window))return;sp.classList.add('pre');var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){sp.classList.remove('pre');sp.classList.add('go');so.disconnect()}})},{threshold:.25});so.observe(sp)});
 var ms=document.querySelector('.mdr-mast');
 if(ms&&'IntersectionObserver' in window){new IntersectionObserver(function(es){root.classList.toggle('mdr-stuck',!es[0].isIntersecting)},{rootMargin:'-2px 0px 0px 0px'}).observe(ms)}
 var dt=document.querySelector('[data-mdr-date]');
 if(dt){try{var t=new Date().toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'America/Argentina/Buenos_Aires'});dt.textContent=t.charAt(0).toUpperCase()+t.slice(1)}catch(e){}}
 var bgb=document.getElementById('bg'),mn=document.getElementById('mn'),hd=document.getElementById('hd');
 if(bgb&&mn&&hd)bgb.addEventListener('click',function(){mn.style.top=Math.max(0,hd.getBoundingClientRect().bottom)+'px'});
 var T=Date.UTC(2026,9,18,3,0,0),now=Date.now(),d=Math.ceil((T-now)/864e5);
 var chip=now>=T?'Hoy es el día':d<=1?'Es mañana':'Faltan '+d+' días';
 var n,u;if(now>=T){n='HOY';u='es el día'}else if(d<=1){n='1';u='día'}else{n=String(d);u='días'}
 document.querySelectorAll('[data-mdr-chip]').forEach(function(e){e.textContent=chip});
 document.querySelectorAll('[data-mdr-u]').forEach(function(e){e.textContent=u});
 document.querySelectorAll('[data-mdr-n]').forEach(function(el){
  el.textContent=n;
  var to=parseInt(n,10);if(isNaN(to)||!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  el.textContent='0';
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;o.disconnect();
   var t0=null;function st(t){if(t0===null)t0=t;var k=Math.min((t-t0)/1100,1);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(st)}requestAnimationFrame(st)})},{threshold:.6});
  o.observe(el);
 });

 /* cuenta regresiva viva */
 var cd=document.querySelector('[data-mdr-cd]');
 if(cd){var q=function(s){return cd.querySelector(s)},eD=q('[data-d]'),eH=q('[data-h]'),eM=q('[data-m]'),eS=q('[data-s]'),pad=function(n){return n<10?'0'+n:''+n};
  function tk(){var ms=T-Date.now();if(ms<=0){cd.innerHTML='<div style="min-width:0;padding:6px 18px"><b style="font-size:26px">¡Hoy es el día!</b></div>';clearInterval(iv);return}
   var s=Math.floor(ms/1000);eD.textContent=Math.floor(s/86400);eH.textContent=pad(Math.floor(s%86400/3600));eM.textContent=pad(Math.floor(s%3600/60));eS.textContent=pad(s%60);
   eS.classList.remove('tick');void eS.offsetWidth;eS.classList.add('tick')}
  tk();var iv=setInterval(tk,1000)}
 /* selector de regalos */
 var pk=document.querySelector('.mdr-pk'),tag=document.querySelector('[data-mdr-tag]');
 if(pk&&tag){
  var D=[['Bienestar &amp; Salud','Un spa, un tratamiento de estética o un perfume para ella.','/bienestar-salud/'],['Moda &amp; Tendencias','Un pañuelo de seda, una cartera o joyería de autor.','/moda-tendencias/'],['Gastronomía de nivel','Un almuerzo de domingo en ese restaurante que siempre quiso conocer.','/gastronomia-de-nivel/'],['Decoración &amp; Arquitectura','Algo para su casa: textiles, velas o ese mueble que la haga feliz.','/decoracion-arquitectura/'],['Escapadas &amp; Travel','Una escapada de fin de semana para regalarle tiempo.','/escapadas-travel/']];
  var bs=pk.querySelectorAll('button'),ims=document.querySelectorAll('.mdr-arch img'),cur=0,auto,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function go(i){cur=i;bs.forEach(function(b,k){b.classList.toggle('on',k===i);b.setAttribute('aria-pressed',k===i)});ims.forEach(function(m,k){m.classList.toggle('on',k===i)});
   tag.href=D[i][2];tag.querySelector('small').innerHTML=D[i][0];tag.querySelector('b').textContent=D[i][1].replace(/&amp;/g,'&');
   if(!rm){tag.classList.remove('swing');void tag.offsetWidth;tag.classList.add('swing')}}
  var gp=function(n,i){if(window.gtag)gtag('event',n,{gift:bs[i]?bs[i].textContent:''})};
  var held=false,stopped=false;
  bs.forEach(function(b,k){b.addEventListener('click',function(){go(k);stopped=true;gp('madre_gift_pick',k)})});
  tag.addEventListener('click',function(){gp('madre_gift_open',cur)});
  var cr=document.querySelector('.mdr-cr');['mouseenter','focusin'].forEach(function(e){cr.addEventListener(e,function(){held=true});pk.addEventListener(e,function(){held=true})});['mouseleave','focusout'].forEach(function(e){cr.addEventListener(e,function(){held=false});pk.addEventListener(e,function(){held=false})});
  if(!rm)auto=setInterval(function(){if(!held&&!stopped&&!document.hidden)go((cur+1)%bs.length)},5200);
 }

 /* guía: dónde festejar */
 var gl=document.getElementById('mdr-lg'),chips=document.querySelector('.mdr-fl-chips');
 if(gl&&chips){
  var L=window.MADRE_LUGARES||[],TP=[['todos','Todos','Tu lugar acá'],['desayuno','Desayunos','Tu desayuno acá'],['almuerzo','Almuerzos','Tu almuerzo acá'],['merienda','Meriendas','Tu merienda acá'],['escapada','Escapadas','Tu escapada acá'],['spa','Spa y bienestar','Tu propuesta acá']],
   wa=function(t){return 'https://wa.me/541160512401?text='+encodeURIComponent(t)},el=function(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
  function card(l){var c=el('article','mdr-lc');var tp=TP.filter(function(t){return t[0]===l.tipo})[0];c.appendChild(el('span','mdr-tp',tp?tp[1].replace(/s$/,''):'Lugar'));c.appendChild(el('h3',0,l.nombre));if(l.zona)c.appendChild(el('div','mdr-zn',l.zona));if(l.descripcion)c.appendChild(el('p',0,l.descripcion));
   var ft=el('div','mdr-ft'),m=el('div','mdr-mt');if(l.horario)m.appendChild(el('span',0,l.horario));if(l.precio)m.appendChild(el('span',0,l.precio));ft.appendChild(m);var a=el('div','mdr-ac');
   if(l.whatsapp){var r=el('a','mdr-b1','Reservar');r.href='https://wa.me/'+String(l.whatsapp).replace(/\D/g,'')+'?text='+encodeURIComponent('Hola! Vi '+l.nombre+' en la guía del Día de la Madre de Conexión con Vos y quiero reservar.');a.appendChild(r)}
   if(l.instagram){var i=el('a','mdr-b2','Instagram');i.href='https://www.instagram.com/'+String(l.instagram).replace('@','')+'/';i.target='_blank';i.rel='noopener';a.appendChild(i)}
   ft.appendChild(a);c.appendChild(ft);return c}
  var PH={todos:['desayuno','almuerzo','merienda'],desayuno:['desayuno'],almuerzo:['almuerzo'],merienda:['merienda'],escapada:['escapada'],spa:['spa']},PL={desayuno:'Desayuno',almuerzo:'Almuerzo',merienda:'Merienda',escapada:'Escapada',spa:'Spa y bienestar'};
  function slot(t,f,k){var a=el('a','mdr-lc slot');var pa=PH[f]||PH.todos,ph=pa[k%pa.length],im=document.createElement('img');im.src='/img/guia-'+ph+'.webp';im.alt='';im.loading='lazy';im.width=500;im.height=500;im.className='mdr-sph';a.appendChild(im);var lb=el('span','mdr-spt',PL[ph]);a.appendChild(lb);a.href=wa('Hola! Tengo un lugar y quiero sumarlo a la guía del Día de la Madre de Conexión con Vos ('+t.toLowerCase().replace(' acá','')+'). ¿Me cuentan cómo participar?');a.appendChild(el('span','mdr-plus','+'));a.appendChild(el('b',0,t));a.appendChild(el('small',0,'Espacio disponible en la guía del Día de la Madre'));a.appendChild(el('span','mdr-go','Sumar mi lugar →'));return a}
  function draw(f){var ls=L.filter(function(x){return f==='todos'||x.tipo===f}),n=ls.length,s=n<3?3-n:(n%3?3-n%3:0),t=TP.filter(function(x){return x[0]===f})[0][2];gl.textContent='';ls.forEach(function(x){gl.appendChild(card(x))});for(var k=0;k<s;k++)gl.appendChild(slot(t,f,k))}
  TP.forEach(function(t,k){var n=t[0]==='todos'?L.length:L.filter(function(x){return x.tipo===t[0]}).length,b=el('button',k?'':'on',t[1]);b.type='button';b.setAttribute('aria-pressed',k?'false':'true');if(n){var i=el('i',0,n);b.appendChild(i)}
   b.addEventListener('click',function(){chips.querySelectorAll('button').forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});b.classList.add('on');b.setAttribute('aria-pressed','true');draw(t[0]);if(window.gtag)gtag('event','madre_guia_filtro',{tipo:t[0]})});chips.appendChild(b)});
  draw('todos');
 }
})();

/* guía: filtro por ocasión */
(function(){var w=document.getElementById('mdr-ig');if(!w)return;var bs=document.querySelectorAll('.mdr-ig-chips button'),cs=w.querySelectorAll('.mdr-ic');
 bs.forEach(function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-f');bs.forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});b.classList.add('on');b.setAttribute('aria-pressed','true');
  cs.forEach(function(c){c.classList.toggle('mdr-hid',f!=='todas'&&c.getAttribute('data-g')!==f)});if(window.gtag)gtag('event','madre_guia_filtro',{tipo:f})})});
})();
