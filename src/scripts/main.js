// Contact form handler (HubSpot-compatible placeholder)
function handleSubmit(event){
  event.preventDefault();
  // In production, replace this with HubSpot Forms API submission or let HubSpot's embed script take over.
  // The form field 'name' attributes match HubSpot's default property names (firstname, lastname, email, company, message).
  const form = document.getElementById('contact-form');
  const thankyou = document.getElementById('form-thankyou');
  form.style.display = 'none';
  thankyou.classList.add('active');
  // Scroll to keep the thank-you in view
  thankyou.scrollIntoView({ behavior: 'smooth', block: 'center' });
  return false;
}

// Count-up animation
function animateCount(el){
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const start = performance.now();
  function step(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if(progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Intersection observers
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => revealObserver.observe(el));

// Count-up trigger
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.querySelectorAll('.count').forEach(animateCount);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.dash, .showcase-screen, .benchmark').forEach(el => countObserver.observe(el));

// Product showcase caption switching
document.querySelectorAll('.caption-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.caption-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// Subtle cursor-reactive ambient shift on hero
const hero = document.querySelector('.hero');
const ambient = document.querySelector('.hero-ambient');
if(hero && ambient){
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    ambient.style.transform = `translate(${x}px, ${y}px)`;
  });
}
