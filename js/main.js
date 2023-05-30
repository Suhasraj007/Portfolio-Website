document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {

  const project = document.querySelector("#projects");
  const view = document.querySelector(".header__project--extender");

  project.addEventListener("mouseover", (event) => {
    view.style.display = "block";
  });

  view.addEventListener("mouseover", (event) => {
    view.style.display = "block";
  });

  view.addEventListener("mouseout", (event) => {
    view.style.display = "none";
  });

  project.addEventListener("mouseout", (event) => {
      view.style.display = "none";
  });

  let lastKnownScrollPosition = 0;

  function doSomething() {
    // Do something with the scroll position
    nav = document.querySelector('.header__nav--container');
    nav.style.background = "#121426";
    nav.style.display = "flex";
    nav.style.flexFlow = "row nowrap";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
  }

  function revert(){
    nav = document.querySelector('.header__nav--container');
    nav.style.background = "none";
    nav.style.flexFlow = "column nowrap";
  }

  document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
  
    if (lastKnownScrollPosition > 730) {
        doSomething();
    } else{
        revert();
    }

  });

}


