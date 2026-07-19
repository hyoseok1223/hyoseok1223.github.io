document.querySelectorAll('.compare').forEach((comparison) => {
  comparison.querySelector('input').addEventListener('input', (event) => {
    comparison.style.setProperty('--position', `${event.target.value}%`);
  });
});

document.querySelector('[data-copy]').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(document.querySelector('#bibtex code').textContent);
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = 'Copy'; }, 1400);
  } catch { button.textContent = 'Select text'; }
});
