function hamburger () {
  const hamburgerMainIcon = document.getElementsByClassName("hamburger-icon");
  const hamburgerCrossIcon = document.getElementsByClassName("navbar__cross");
  const hamburgerListItems = document.getElementsByClassName("navbar__list--item");

  hamburgerMainIcon[0].addEventListener("click", () => {
    document.getElementsByClassName("navbar__mobile__opt")[0].style.display = "flex";
  });

  hamburgerCrossIcon[0].addEventListener("click", () => {
    document.getElementsByClassName("navbar__mobile__opt")[0].style.display = "none";
  });

  [...hamburgerListItems].forEach(item => {
    item.addEventListener("click", () => {
      document.getElementsByClassName("navbar__mobile__opt")[0].style.display = "none";
    })
  });
}

hamburger();

function modalPopup () {
  let modalWind = document.getElementById('popModal');
  let modal = document.getElementsByClassName('modal');
  let modBtn = document.getElementsByClassName('seeProj');
  let closeBtn = document.getElementsByClassName('close')[0];

  modBtn.onclick = function() {
    modalWind.style.display = 'block';
  }

  closeBtn.onclick = function() {
    modalWind.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modalWind) {
      modalWind.style.display = 'none';
    }
  }
}

modalPopup();
