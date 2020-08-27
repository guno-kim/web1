const sliderList = document.querySelector(".slider_list");
const sliderBox = document.querySelector(".slider_box");
const sliderContents = document.querySelectorAll(".slider_content");
const sliderPagination = document.querySelector(".slider_pagination");
const sliderMain = document.querySelector(".slider_main");

const sliderPreBtn = document.querySelector(".slider_pre_button");
const sliderNextBtn = document.querySelector(".slider_next_button");
const sliderLength = sliderContents.length;

let curIndex = 0;

function setHeight() {
  let style = getComputedStyle(sliderBox);
  sliderMain.setAttribute("style", "height:" + style.height);
  sliderMain.style.height = style.height;
}

setInterval(function () {
  setHeight();
}, 50);

function sliderMove(index) {
  sliderContents[curIndex].classList.remove("showing");
  sliderContents[curIndex].style.display = "none";
  curIndex = index;
  sliderContents[curIndex].classList.add("showing");
  sliderContents[curIndex].style.display = "block";
}

sliderContents[0].classList.add("showing");
sliderContents[0].style.display = "block";
// button addEventListener
sliderPreBtn.addEventListener("click", function () {
  pageDots[curIndex].classList.remove("dot_active");
  if (curIndex > 0) {
    sliderMove(curIndex - 1);
  } else {
    sliderMove(sliderLength - 1);
  }
  pageDots[curIndex].classList.add("dot_active");
});

sliderNextBtn.addEventListener("click", function () {
  pageDots[curIndex].classList.remove("dot_active");

  if (curIndex < sliderLength - 1) {
    sliderMove(curIndex + 1);
  } else {
    sliderMove(0);
  }
  pageDots[curIndex].classList.add("dot_active");
});

// pagenation
function addPage(i) {
  return '<li class="dot" data-index="' + i + '"> <a> </a> </li>';
}

let sliderPageText = "";
for (let i = 0; i < sliderLength; i++) {
  sliderPageText += addPage(i);
}
sliderPagination.innerHTML = sliderPageText;
const pageDots = document.querySelectorAll(".dot");

pageDots[0].classList.add("dot_active");

for (let i = 0; i < pageDots.length; i++) {
  pageDots[i].addEventListener("click", function (e) {
    pageDots[curIndex].classList.remove("dot_active");
    sliderMove(e.target.dataset.index);
    pageDots[curIndex].classList.add("dot_active");
  });
}
