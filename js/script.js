document.addEventListener('DOMContentLoaded', ()=>{
  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.animate-up').forEach(el=>io.observe(el));

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
    });
  }

  // carousel simple
  const slides = document.querySelectorAll('.slide');
  if(slides.length){
    let i=0; const show=(n)=>{slides.forEach((s,idx)=>s.style.display=(idx===n?'block':'none'));};
    show(0); setInterval(()=>{ i=(i+1)%slides.length; show(i); },5000);
  }

  // form simulate
  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.name?.value?.trim();
      const email = form.email?.value?.trim();
      const msg = form.message?.value?.trim();
      if(!name||!email||!msg){ alert('Completa todos los campos.'); return; }
      const status = document.querySelector('#form-msg'); if(status) status.textContent='Enviando...';
      setTimeout(()=>{ if(status) status.textContent='✅ Enviado. Te contactamos pronto.'; form.reset(); },900);
    });
  }
});