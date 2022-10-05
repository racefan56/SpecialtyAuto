// PANELS //
const panels = document.querySelectorAll('.panel');

let activePanelIndex = 0;

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    panels[activePanelIndex].classList.remove('active');
    panel.classList.add('active');
    activePanelIndex = index;
  });
});

// NAV BUTTONS //
const navBtns = document.querySelectorAll('.nav-btn');

// SERVICE
const boxes = document.querySelectorAll('.service');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

checkBoxes();
