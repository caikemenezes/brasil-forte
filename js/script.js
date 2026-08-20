const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.querySelectorAll('.main-nav a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('.compare-card').forEach(card => {
  const slider = card.querySelector('input[type="range"]');
  const after = card.querySelector('.after');
  slider.addEventListener('input', () => {
    after.style.clipPath = `inset(0 0 0 ${slider.value}%)`;
  });
});

const resultsCarousel = document.querySelector('.results-carousel');
if (resultsCarousel) {
  const track = resultsCarousel.querySelector('.results-track');
  const pages = [...resultsCarousel.querySelectorAll('.results-page')];
  const counter = resultsCarousel.querySelector('.results-counter');
  let currentPage = 0;

  const showResultsPage = index => {
    currentPage = (index + pages.length) % pages.length;
    track.style.transform = `translateX(-${currentPage * 100}%)`;
    pages.forEach((page, pageIndex) => page.setAttribute('aria-hidden', String(pageIndex !== currentPage)));
    counter.textContent = `${currentPage + 1} de ${pages.length}`;
  };

  resultsCarousel.querySelector('.results-prev').addEventListener('click', () => showResultsPage(currentPage - 1));
  resultsCarousel.querySelector('.results-next').addEventListener('click', () => showResultsPage(currentPage + 1));
}

const whatsappNumber = '5511999999999';
const whatsappMessage = encodeURIComponent('Olá, conheci a Brasil Forte pelo site e gostaria de solicitar um orçamento para impermeabilização.');
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const form = document.querySelector('.quote-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = 'Confira os campos obrigatórios antes de enviar.';
    return;
  }
  const data = new FormData(form);
  const message = encodeURIComponent(`Olá, gostaria de solicitar um orçamento.\n\nNome: ${data.get('nome')}\nTelefone: ${data.get('telefone')}\nE-mail: ${data.get('email') || 'Não informado'}\nImóvel: ${data.get('imovel')}\nCidade: ${data.get('cidade')}\nProblema: ${data.get('problema')}\nDescrição: ${data.get('descricao')}`);
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  status.textContent = 'Solicitação preparada. Continue o atendimento pelo WhatsApp.';
});

const sections = [...document.querySelectorAll('main section[id], header[id]')];
window.addEventListener('scroll', () => {
  const current = sections.filter(section => section.offsetTop <= window.scrollY + 140).at(-1);
  document.querySelectorAll('.main-nav a').forEach(link => link.classList.toggle('active', current && link.hash === `#${current.id}`));
}, { passive: true });
