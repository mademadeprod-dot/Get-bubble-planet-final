// Mobile nav toggle
const navBtn = document.querySelector('.nav__mobile-btn');
const navLinks = document.querySelector('.nav__links');
if(navBtn && navLinks){
  navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    navBtn.classList.remove('open');
    navLinks.classList.remove('open');
  }));
}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item');
    const wasOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el=>el.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});

// Open first FAQ item by default
const firstFaq=document.querySelector('.faq-item');
if(firstFaq) firstFaq.classList.add('open');

// Scroll reveal
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
