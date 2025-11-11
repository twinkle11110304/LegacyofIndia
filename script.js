// basic interactivity for the demo site

// banner close
document.addEventListener('DOMContentLoaded', ()=>{
  const close = document.getElementById('closeBanner');
  if(close){
    close.addEventListener('click', ()=> {
      const b = document.getElementById('banner');
      b.style.display='none';
    });
  }

  // keep simple nav highlight based on filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav .nav-item').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.includes(path)) a.classList.add('active');
  });
});
