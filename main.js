const banner = document.querySelector(".banner");

function bannerBackground() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    banner.style.backgroundColor = "white";
    banner.style.borderBottom = "1px darkgray solid ";
  } else {
    banner.style.backgroundColor = "transparent";
    banner.style.borderBottom = "none ";
  }
}
setInterval(function () {
  bannerBackground(), 20;
});

const buttons = document.querySelectorAll(".anchor");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    e.preventDefault();
    const anchor = document.querySelector(e.target.dataset.anchor);
    var location = anchor.offsetTop - 147;
    window.scrollTo({ top: location, behavior: "smooth" });
  });
}
