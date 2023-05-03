// Gets all elements inside a flex container and calcs the space between each child. Then it sets new width for product name breadcrumb for better layout
function calcSpaceBetween(selector) {
  const parent = document.querySelector(selector);
  const childCount = parent.children.length;
  const prodText = document.querySelector(".breadcrumbs--list-item__product a");

  for (let i = 0; i < childCount - 1; i++) {
    const currentElm = parent.children[i];
    const nextElm = parent.children[i + 1];
    const currentElmPos =
      currentElm.offsetLeft + currentElm.getBoundingClientRect().width;
    const nextElmPos = nextElm.offsetLeft;
    const spaceBetween = nextElmPos - currentElmPos;

    if (spaceBetween > 25) {
      const prodTextWidth = prodText.offsetWidth;
      prodText.style.width = prodTextWidth + 50 + "px";
      calcSpaceBetween(selector);
    }
    if (spaceBetween < 5) {
      const prodTextWidth = prodText.offsetWidth;
      prodText.style.width = prodTextWidth - 50 + "px";
      calcSpaceBetween(selector);
    }
  }
}

if (window.screen.width < 1008) {
  calcSpaceBetween("nav .breadcrumbs--list");
}

var debounce;
window.addEventListener("resize", (event) => {
  //Debounce
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    if (window.screen.width < 1008) {
      calcSpaceBetween("nav .breadcrumbs--list");
    }
  }, 10);
});

// Swiper
var elem = document.querySelector(".product-media--carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  prevNextButtons: false,
  pageDots: false,
});

// Swiper
var elem = document.querySelector(".recommended-products--carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  groupCells: true,
});

// accordion
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// colour and size selector
const colourSelectors = document.querySelectorAll(
  ".product-info--colour-selector ul li"
);

colourSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    const currentlyActive = document.querySelector(
      ".product-info--colour-selector ul li.active"
    );
    currentlyActive.classList.remove("active");
    selector.classList.add("active");
  });
});

const sizeSelectors = document.querySelectorAll(
  ".product-info--size-selector ul li"
);

sizeSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    const currentlyActive = document.querySelector(
      ".product-info--size-selector ul li.active"
    );
    currentlyActive.classList.remove("active");
    selector.classList.add("active");
  });
});
