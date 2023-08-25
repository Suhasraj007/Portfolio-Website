document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const textArea = document.getElementById("element");
  const animateText = [
    "Front end developer",
    "Back end developer",
    "Java Programmer",
  ];

  let animationInterval;
  let animateTimeout = [];
  let reanimateTimeout = [];

  function startAnimation() {
    let text = 0;
    trial(text);
  
    animationInterval = setInterval(() => {
      text = (text + 1) % animateText.length;
      trial(text);
    }, (animateText[text].length + 1.1) * 100);
  
    function trial(text) {
      for (let index = 0; index < animateText[text].length; index++) {
        animate(index);
      }
  
      function animate(index) {
        animateTimeout[index] = setTimeout(() => {
          textArea.textContent = `${textArea.textContent}${animateText[text].charAt(index)}`;
        }, index * 100);
        reanimate(index);
      }
  
      function reanimate(index) {
        reanimateTimeout[index] = setTimeout(() => {
          textArea.textContent = " ";
        }, (animateText[text].length + 1) * 100);
      }
    }
  }

  function stopAnimation() {
    clearInterval(animationInterval);
    animateTimeout.forEach((ele) => clearTimeout(ele));
    reanimateTimeout.forEach((ele) => clearTimeout(ele));
    textArea.textContent = " ";
  }

  function handleVisibilityChange() {
    if (window.document.visibilityState === "visible") {
      startAnimation();
    } else {
      stopAnimation();
    }
  }
  
  // Listen for visibility change events
  document.addEventListener("visibilitychange", handleVisibilityChange);

  startAnimation();

  const project = document.querySelector("#projects");
  const view = document.querySelector(".header__project--extender");

  project.addEventListener("mouseover", (event) => {
    let width = screen.width;
    if (width > 700) {
      view.style.display = "block";
    }
  });

  view.addEventListener("mouseout", (event) => {
    view.style.display = "none";
  });

  view.addEventListener("mouseover", (event) => {
    view.style.display = "block";
  });

  project.addEventListener("mouseout", (event) => {
    view.style.display = "none";
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
    ht = document.querySelector(".header__title");
    prext = document.querySelector(".header__project--extender");
    li = document.querySelectorAll(".header__nav--items");

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

    if (lastKnownScrollPosition > 730 && screen.width > 700) {
      doSomething();
    } else if (lastKnownScrollPosition < 730 && screen.width > 700) {
      revert();
    }
  });

  const toggleButton = document.getElementsByClassName(
    "header__nav--toggle"
  )[0];
  const headerNavList = document.getElementsByClassName("header__nav--list")[0];

  toggleButton.addEventListener("click", () => {
    headerNavList.classList.toggle("active");
  });

  headerNavList.addEventListener("click", () => {
    headerNavList.classList.toggle("active");
  });
};
