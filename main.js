let title = document.getElementById("title");
let tree1 = document.getElementById("tree1");
let tree2 = document.getElementById("tree2");
let fence1 = document.getElementById("fence1");
let fence2 = document.getElementById("fence2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let windowWidth = window.innerWidth;

  title.style.marginTop = value * 2.5 + "px";
  fence1.style.left = value * -1.5 + "px";
  fence2.style.left = value * 1.5 + "px";

  let fenceParallaxFactor = 0.5;
  if (windowWidth < 768) {
    fenceParallaxFactor = 0.2;
  } else if (windowWidth > 1200) {
    fenceParallaxFactor = 0.8;
  }

  fence1.style.left = value * fenceParallaxFactor + "px";
  fence2.style.left = value * -fenceParallaxFactor + "px";
});

window.addEventListener("load", () => {
  let windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    title.style.fontSize = "3em";
    tree1.style.left = "0";
    tree2.style.left = "0";
    fence1.style.left = "0";
    fence2.style.left = "0";
  } else if (windowWidth >= 768 && windowWidth < 1200) {
    title.style.fontSize = "4em";
    tree1.style.left = "-100px";
    tree2.style.left = "100px";
    fence1.style.left = "-50px";
    fence2.style.left = "50px";
  } else {
    title.style.fontSize = "5em";
    tree1.style.left = "-150px";
    tree2.style.left = "150px";
    fence1.style.left = "-100px";
    fence2.style.left = "100px";
  }
});

function myFunction() {
  var x = document.getElementById("centered_nav");
  if (x.className === "rc_nav") {
    x.className += " responsive";
  } else {
    x.className = "rc_nav";
  }
}

$(".js-input").keyup(function () {
  if ($(this).val()) {
    $(this).addClass("not-empty");
  } else {
    $(this).removeClass("not-empty");
  }
});

var popupViews = document.querySelectorAll(".popup-view");
var popupBtns = document.querySelectorAll(".popup-btn");
var closeBtns = document.querySelectorAll(".close-btn");

var popup = function (popupClick) {
  popupViews[popupClick].classList.add("active");
};
popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove("active");
    });
  });
});
