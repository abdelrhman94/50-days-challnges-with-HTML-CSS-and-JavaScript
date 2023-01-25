// in query selector all instead of just selecting the element directly,it put all of the panels into node list similar to an array
const panels = document.querySelectorAll('.panel');

// to loop in panel node list
panels.forEach((panel) => {
  // to add event listener on each panel node
  panel.addEventListener('click', () => {
    // to remove active class from all panels div
    removeActiveClasses();
    // to add class name called active when I click on a div
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
