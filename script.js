function crossMenuFunc(x) {
  x.classList.toggle("change");
}

function dropdownFunc() {
  document.getElementById("menuDrop").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.nav-menu')) {
    let drpList = document.getElementsByClassName("drop-list");

    for (let i = 0; i < drpList.length; i++) {
      let listOpen = drpList[i];

      if (listOpen.classList.contains('show')) {
        listOpen.classList.remove('show');
      }
    }
  }
}
