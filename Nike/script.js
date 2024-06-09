const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimentions = item.getBoundingClientRect();
  let contaWidth = containerDimentions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += contaWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= contaWidth;
  });
});
