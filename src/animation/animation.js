const animItems = document.querySelectorAll(".anima__items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animaOnScroll);

  function animaOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animnStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animnStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animnStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("active");
      } else {
        if (!animItem.classList.contains("anima__hidden")) {
          animItem.classList.remove("active");
        }
      }
    }
  }
  // функция найдена в иннете, для получения значения (сверху слева)
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
  setTimeout(() => {
    animaOnScroll();
  }, 300);
}
