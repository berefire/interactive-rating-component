export function show(element) {
  element.hidden = false;

  requestAnimationFrame(() => {
    element.classList.remove("is-hidden");
    element.classList.add("is-visible");
  });
}

export function hide(element) {
  return new Promise((resolve) => {
    let resolved = false;
    const finish = () => {
      if (resolved) return;
      resolved = true;
      element.hidden = true;
      resolve();
    };
    element.classList.remove("is-visible");
    element.classList.add("is-hidden");
    element.addEventListener("transitionend", finish, { once: true });
    setTimeout(finish, 350);
  });
}
