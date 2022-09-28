const panels = document.querySelectorAll('.panel');

let activePanelIndex = 0;

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    panels[activePanelIndex].classList.remove('active');
    panel.classList.add('active');
    activePanelIndex = index;
  });
});
