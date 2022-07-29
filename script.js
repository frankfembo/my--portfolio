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


const modalWind = document.getElementsByClassName('modal')[0];
const closeBtn = document.getElementsByClassName('close')[0];

const seeBtn1 = document.getElementsByClassName('see-proj1')[0];
const seeBtn2 = document.getElementsByClassName('see-proj2')[0];
const seeBtn3 = document.getElementsByClassName('see-proj3')[0];
const seeBtn4 = document.getElementsByClassName('see-proj4')[0];

seeBtn1.addEventListener('click', openMod);
seeBtn2.addEventListener('click', openMod);
seeBtn3.addEventListener('click', openMod);
seeBtn4.addEventListener('click', openMod);

function openMod() {
  modalWind.style.display = 'block';
}

closeBtn.addEventListener('click', closeMod);
function closeMod() {
  modalWind.style.display = 'none';
}

window.addEventListener('click', closeMod2);
function closeMod2(e) {
  if (e.target == modalWind) {
    modalWind.style.display = 'none';
  }
}
