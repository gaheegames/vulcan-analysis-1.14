
(function(){
  var b=document.querySelector('.hamb'),n=document.querySelector('nav.main');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  var hs=[].slice.call(document.querySelectorAll('main h2[id]'));
  var tr=document.querySelector('.prog .track');if(!tr||!hs.length)return;
  var fill=tr.querySelector('.fill'),m=tr.querySelector('.masc'),dots=[];
  hs.forEach(function(h,i){var d=document.createElement('button');d.className='dot';d.type='button';d.title=h.textContent;d.setAttribute('aria-label',h.textContent);
    d.style.left='calc(28px + (100% - 56px) * '+(hs.length>1?i/(hs.length-1):0)+')';
    d.addEventListener('click',function(){h.scrollIntoView({behavior:'smooth'});});tr.appendChild(d);dots.push(d);});
  function upd(){var y=window.scrollY+window.innerHeight*0.35,k=0;
    for(var i=0;i<hs.length;i++){if(hs[i].getBoundingClientRect().top+window.scrollY<=y)k=i;}
    var t0=hs[k].getBoundingClientRect().top+window.scrollY,t1=k+1<hs.length?hs[k+1].getBoundingClientRect().top+window.scrollY:document.documentElement.scrollHeight-window.innerHeight;
    var f=t1>t0?Math.min(1,Math.max(0,(y-t0)/(t1-t0))):1;if(window.scrollY<=0)f=0;
    var p=hs.length>1?(k+(k<hs.length-1?f:0))/(hs.length-1):1;
    var end=(window.innerHeight+window.scrollY)>=document.documentElement.scrollHeight-2;if(end)p=1;
    fill.style.width='calc((100% - 56px) * '+p+')';m.style.left='calc(28px + (100% - 56px) * '+p+')';
    dots.forEach(function(d,i){d.classList.toggle('on',i<=k||end);});}
  window.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
})();
