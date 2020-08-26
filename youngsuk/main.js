const banner = document.querySelector(".banner");

function bannerBackground() {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 50) {
    banner.style.backgroundColor = "white";
    banner.style.borderBottom = "1px darkgray solid ";
  } else {
    banner.style.backgroundColor = "transparent";
    banner.style.borderBottom = "none ";
  }
}
setInterval(() => bannerBackground(), 20);

const buttons = document.querySelectorAll(".anchor");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const anchor = document.querySelector(`${e.target.dataset.anchor}`);
    var location = anchor.offsetTop - 147;
    window.scrollTo({ top: location, behavior: "smooth" });
  })
);
