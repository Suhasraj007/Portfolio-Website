document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  // var typed = new Typed("#element", {
  //   strings: ["Fornt end developer", "Back end developer", "Java Programmer"],
  //   typeSpeed: 50,
  //   loop: true,
  //   loopCount: Infinity,
  // });

  const textArea = document.getElementById("element");
  const animateText = [
    "Front end developer",
    "Back end developer",
    "Java Programmer",
  ];
  let text = 0;
  trial(text);

  setInterval(() => {
    text = (text + 1) % animateText.length;
    trial(text);
  }, (animateText[text].length + 1.1) * 100);

  function trial(text) {
    for (let index = 0; index < animateText[text].length; index++) {
      animate(index);
    }

    function animate(index) {
      setTimeout(() => {
        textArea.textContent += `${animateText[text].charAt(index)}`;
      }, index * 100);
      reanimate();
    }

    function reanimate() {
      setTimeout(() => {
        textArea.textContent = " ";
      }, (animateText[text].length + 1) * 100);
    }
  }

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
    } else {
      revert();
    }
  });
  
};
