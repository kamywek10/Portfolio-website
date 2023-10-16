const menuBtn = document.querySelector(".menu_btn");
const menuList = document.querySelector(".menu_list");

const portBtn = document.querySelector(".portfolio_btn");
const portList = document.querySelector(".portfolio_list");


function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}

function togglePortVisibility() {
  portList.classList.toggle("hide");
}


menuBtn.addEventListener("click", toggleMenuVisibility);
portBtn.addEventListener("click", togglePortVisibility);