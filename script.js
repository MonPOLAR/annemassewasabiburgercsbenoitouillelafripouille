// Tape la commande caractère par caractère, puis lance la séquence d'animation
document.addEventListener('DOMContentLoaded', () => {
  const command = document.getElementById('command');
  const text = command.dataset.text;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    command.textContent = text;
    document.body.classList.add('go');
    return;
  }

  let i = 0;
  const type = () => {
    command.textContent = text.slice(0, ++i);
    if (i < text.length) {
      setTimeout(type, 45 + Math.random() * 60);
    } else {
      setTimeout(() => document.body.classList.add('go'), 400);
    }
  };

  setTimeout(type, 600);
});
