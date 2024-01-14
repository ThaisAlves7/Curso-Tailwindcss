const menuMobile = document.getElementById("menu");

const openMenu = () => {
  menuMobile.classList.remove("hidden");
  menuMobile.classList.add("flex");
};

const closeMenu = () => {
  menuMobile.classList.remove("flex");
  menuMobile.classList.add("hidden");
};
