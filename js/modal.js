(() => {
  const modal = document.querySelector("[data-modal]");
  const open = document.querySelector("[data-modal-open]");
  const close = document.querySelector("[data-modal-close]");
  function setOpen(isOpen) {
    modal.classList.toggle("is-open", isOpen);
    modal.setAttribute("aria-hidden", String(!isOpen));
    if (isOpen) close.focus();
    else open.focus();
  }
  open.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open"))
      setOpen(false);
  });
})();
