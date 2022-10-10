// PAGE TRANSITION //
window.transitionToPage = function (href) {
  document.querySelector('body').style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('body').style.opacity = 1;
});

// NAV BUTTONS //
const navBtns = document.querySelectorAll('.nav-btn');

// SERVICE //
const boxes = document.querySelectorAll('.service');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
// Run the function once after page transition animation has completed
setTimeout(checkBoxes, 2000);
