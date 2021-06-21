document.write(`
  <header id="section__top">
    <button class='btn__burger'>SHOW MENU</button>
    
    <nav>
      <ul>
        <li><a onclick="toggleSideDrawer()" href="#section__1">Home</a></li>
        <li><a onclick="toggleSideDrawer()" href="#section__2">About Us</a></li>
        <li><a onclick="toggleSideDrawer()" href="#section__3">Services</a></li>
      </ul>
    </nav>
    <div class="header__backdrop" onclick="toggleSideDrawer()"></div>
  </header>
`);

// LOAD CSS
let head = document.getElementsByTagName("head")[0];
let link = document.createElement("link");

link.rel = "stylesheet";
link.href = "styles/header.css";

head.appendChild(link);

let toggleShow = false;

const btnElem = document.getElementsByClassName("btn__burger")[0];

btnElem.addEventListener("click", toggleSideDrawer);

function toggleSideDrawer() {
  toggleShow = !toggleShow;

  const navElem = document.getElementsByTagName("nav")[0];
  const headerBackdrop = document.getElementsByClassName("header__backdrop")[0];

  if (toggleShow) {
    navElem.setAttribute("class", "nav__show");
    headerBackdrop.setAttribute(
      "class",
      "header__backdrop header__backdrop_show"
    );
  } else {
    navElem.setAttribute("class", null);
    headerBackdrop.setAttribute("class", "header__backdrop");
  }
}
