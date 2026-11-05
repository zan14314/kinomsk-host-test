const dialog = document.querySelector('.video-dialog');
const video = dialog.querySelector('video');
const rail = document.querySelector('.rail');
const main = document.querySelector('main');
const railPanels = [...rail.querySelectorAll('.rail__panel')];
const railSections = [
  document.querySelector('.hero'),
  document.querySelector('.section--story'),
  document.querySelector('.section--concept'),
  document.querySelector('.section--method'),
  document.querySelector('.section--result'),
  document.querySelector('.section--film'),
  document.querySelector('.section--people'),
  document.querySelector('.section--future'),
  document.querySelector('.cta'),
];

function sizeRail() {
  rail.style.height = `${main.offsetHeight}px`;
  railPanels.forEach((panel, index) => {
    panel.style.height = `${railSections[index].offsetHeight}px`;
  });
}

window.addEventListener('load', sizeRail);
window.addEventListener('resize', sizeRail);
new ResizeObserver(sizeRail).observe(main);
sizeRail();

document.querySelectorAll('[data-open-video]').forEach((button) => {
  button.addEventListener('click', () => {
    dialog.showModal();
    video.play().catch(() => {});
  });
});

document.querySelectorAll('[data-scroll-video]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#film').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelector('[data-close-video]').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => video.pause());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
