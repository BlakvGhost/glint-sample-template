  const ratio = .1 
  const options = { root:null, rootMargin:'0px', threshold:ratio }
  const toobserve = function(entries,observer) { entries.forEach(function(entry) {
     if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        let i=0;let x=0;let y=0;let xy=0
        setInterval(()=>{if (i<128) {document.querySelector('.js-35').innerHTML=i;i++;}},100)
        setInterval(()=>{if (x<1506) {document.querySelector('.js-12').innerHTML=x;x++;}},10)
        setInterval(()=>{if (y<110) {document.querySelector('.js-200').innerHTML=y;y++;}},100)
        setInterval(()=>{if (xy<103) {document.querySelector('.js-1200').innerHTML=xy;xy++;}},100)
      }else{ entry.target.classList.remove('reveal-visible') } });
     } 
 const observer = new IntersectionObserver(toobserve,options)
 document.querySelectorAll('.reveal').forEach(function(r) { observer.observe(r) })

 window.addEventListener('click',(evt)=>{
   let target = evt.target
   const menux = document.querySelector('.menu')
  menux.defaultPrevented
  if (target.contains(menux.children[0]) || target.contains(menux.children[1]) ) {
    document.querySelector('.under-menu').style.transform = 'translate(506%)';document.querySelector('.under-menu').classList.add('transs');document.querySelector('.delay').classList.add('delay-1');
  } else {
    document.querySelector('.under-menu').style.transform = 'translate(630%)';document.querySelector('.delay').classList.remove('delay-1');}})

var i = 0;let index = 0
var slides = document.querySelectorAll('.main-persons div')
document.querySelector('.next-btn').addEventListener('click',()=>{
    if (index<slides.length-1) {slides.forEach((elmts)=>{elmts.style.transform = `translateX(${-i}%)`;elmts.classList.add('transs')});i+=100;;index++;} else {i=0;index=0}})
document.querySelector('.prev-btn').addEventListener('click',()=>{
  i-=100;
  if (index>=1) {slides.forEach((elmts)=>{elmts.style.transform = `translateX(${-i}%)`});index--;} else {index=0;i=0}})
  var compteur = 0;let ind = 0;
  var slide = document.querySelectorAll('.main-persons li')
  var dots = document.querySelectorAll('.dot')
  document.querySelectorAll('.main-persons li img').forEach((item)=>{
    item.addEventListener('dragenter',(events)=>{
      dots[1].style.backgroundColor = 'blue'
      if (ind<slide.length-1) {slide.forEach((elmts)=>{elmts.style.transform = `translateX(${-compteur}%)`;elmts.classList.add('transs')});compteur+=100;;ind++;} else {compteur=0;ind=1}})
      item.addEventListener('drag',(events)=>{
      if (events.offsetX<1) {slide.forEach((elmts)=>{elmts.style.transform = `translateX(${-compteur}%)`});ind--;} else {ind=0;compteur=0}
  })  })