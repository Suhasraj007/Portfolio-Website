document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  var typed = new Typed("#element", {
    strings: ["Fornt end developer", "Back end developer", "Java Programmer"],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
  });

  const project = document.querySelector("#projects");
  const view = document.querySelector(".header__project--extender");

  project.addEventListener("mouseover", (event) => {
    view.style.display = "block";
    console.log(event);
  });

  view.addEventListener("mouseout", (event) => {
    view.style.display = "none";
    console.log(event);

  });

  view.addEventListener("mouseover", (event2) => {
    view.style.display = "block";
    console.log(event);
  });

  project.addEventListener("mouseout", (event) => {
    view.style.display = "none";
    console.log(event);

  });

  let lastKnownScrollPosition = window.scrollY;

  function doSomething() {
    // Do something with the scroll position
    nav = document.querySelector(".header__nav--container");
    ht = document.querySelector(".header__title");
    prext = document.querySelector(".header__project--extender");
    li = document.querySelectorAll(".header__nav--items");

    nav.style.background = "#121426";
    nav.style.display = "flex";
    nav.style.flexFlow = "row nowrap";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    ht.style.width = "300px";
    ht.style.margin = "5px 0px 5px 0px";
    prext.style.top = "60px";
    li.forEach((element) => {
      element.style.margin = "15px 0px 0px 0px";
      element.style.padding = "0px 0px 15px 0px";
    });
  }

  function revert() {
    nav = document.querySelector(".header__nav--container");
    nav.style.background = "none";
    nav.style.flexFlow = "column nowrap";
    ht.style.margin = "20px 0px 0px";
    prext.style.top = "125px";
    li.forEach((element) => {
      element.style.margin = "15px 0px 5px 0px";
      element.style.padding = "0px 0px 10px 0px";
    });
  }

  document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (lastKnownScrollPosition > 730) {
      doSomething();
    } else {
      revert();
    }
  });
};
