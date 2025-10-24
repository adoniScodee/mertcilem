
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

function submitContact(e){
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value || 'Ziyaretçi';
  alert(name + ', mesajınız alındı. En kısa sürede size dönüş yapacağız. (Demo)');
  form.reset();
}

// Lazy load images (simple)
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('img[data-src]').forEach(img=>{
    img.src = img.dataset.src;
  });
});
