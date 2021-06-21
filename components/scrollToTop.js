document.write(`
    <a class="btn__totop">Press to top</a>
`);

btnToTop = document.getElementsByClassName("btn__totop")[0];

document.addEventListener("scroll", bodyScrollHandler);
btnToTop.addEventListener("click", scrollToTop);

function bodyScrollHandler(event) {
  const scrolledBelow = window.pageYOffset > 250;

  btnToTop.setAttribute("class", "btn__totop");

  if (scrolledBelow) {
    btnToTop.setAttribute("class", "btn__totop btn__totop__show");
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
