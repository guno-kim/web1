const sliderList = document.querySelector(".slider_list");
const sliderContents = document.querySelectorAll(".slider_content");
const sliderPagination = document.querySelector(".slider_pagination");

const sliderPreBtn = document.querySelector(".slider_pre_button");
const sliderNextBtn = document.querySelector(".slider_next_button");

const sliderLength = sliderContents.length;
const sliderWidth = 800;
const sliderSpeed = 300;

sliderList.style.width = sliderLength * sliderWidth + "px";

let curIndex = 0;

function sliderMove(sliderSpeed, index) {
  sliderList.style.transition = sliderSpeed + "ms";
  sliderList.style.transform = `translate3d(-${
    sliderWidth * curIndex
  }px,0px,0px)`;
}

sliderPreBtn.addEventListener("click", function () {
  pageDots[curIndex].classList.remove("dot_active");
  if (curIndex > 0) {
    curIndex--;
    sliderMove(sliderSpeed, curIndex);
  } else {
    curIndex = sliderLength - 1;
    sliderMove(sliderSpeed * 2, curIndex);
  }
  pageDots[curIndex].classList.add("dot_active");
});

sliderNextBtn.addEventListener("click", function () {
  pageDots[curIndex].classList.remove("dot_active");

  if (curIndex < sliderLength - 1) {
    curIndex++;
    sliderMove(sliderSpeed, curIndex);
  } else {
    curIndex = 0;
    sliderMove(sliderSpeed * 2, curIndex);
  }
  pageDots[curIndex].classList.add("dot_active");
});

function addPage(i) {
  return `<li class="dot" data-index="${i}">
    <a></a>
  </li>`;
}

let sliderPageText = "";
for (let i = 0; i < sliderLength; i++) {
  sliderPageText += addPage(i);
}
sliderPagination.innerHTML = sliderPageText;

const pageDots = document.querySelectorAll(".dot");
pageDots[0].classList.add("dot_active");

pageDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    pageDots[curIndex].classList.remove("dot_active");
    curIndex = e.target.dataset.index;
    sliderMove(sliderSpeed, curIndex);
    pageDots[curIndex].classList.add("dot_active");
  });
});
