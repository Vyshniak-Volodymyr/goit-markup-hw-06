(() => {
  const menu = document.querySelector('[data-menu]');
  const open = document.querySelector('[data-menu-open]');
  const close = document.querySelector('[data-menu-close]');
  function setOpen(isOpen) {
    menu.classList.toggle('is-open', isOpen);
    open.setAttribute('aria-expanded', String(isOpen));
  }
  open.addEventListener('click', () => setOpen(true));
  close.addEventListener('click', () => setOpen(false));
})();
