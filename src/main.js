(() => {
  let butt = document.getElementById('onlybutton');
  let thebox = document.getElementById('onlybox');

  butt.addEventListener('click', () => {
    thebox.classList.toggle('rotatebox');
  });
})();
