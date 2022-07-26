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
    item.addEventListener("click", ()=>{
      document.getElementsByClassName("navbar__mobile__opt")[0].style.display = "none";
    })
  });
}

hamburger();