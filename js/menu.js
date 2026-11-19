(() => {
  const menu = document.querySelector("[data-menu]");
  const open = document.querySelector("[data-menu-open]");
  const close = document.querySelector("[data-menu-close]");
  function setOpen(isOpen, restoreFocus = true) {
    menu.classList.toggle("is-open", isOpen);
    open.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) close.focus();
    else if (restoreFocus) open.focus();
  }
  open.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  menu.addEventListener("click", (event) => {
    if (event.target.closest(".mobile-nav-link")) setOpen(false, false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open"))
      setOpen(false);
  });
})();
