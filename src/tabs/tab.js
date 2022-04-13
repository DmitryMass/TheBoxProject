const tabs = document.querySelectorAll(".projects__item");
const tabContent = document.querySelectorAll(".projects__content");
const tabsParent = document.querySelector(".projects__items");

function hideContent() {
  tabContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });
  tabs.forEach((item) => {
    item.classList.remove("projects__item-active");
  });
}

function showContent(i = 0) {
  tabContent[i].classList.add("show", "fade");
  tabContent[i].classList.remove("hide");
  tabs[i].classList.add("projects__item-active");

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("projects__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
}

hideContent();
showContent();
