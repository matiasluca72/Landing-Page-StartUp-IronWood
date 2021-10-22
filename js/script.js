//GO UP BUTTON

window.onscroll = function () {
  /* console.log(document.documentElement.scrollTop); */
  if (document.documentElement.scrollTop > 200) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//UNCHECK WHEN CLICKING OUTSIDE RESPONSIVE MENU
document.addEventListener("click", function (e) {
  /* console.log(e); */
  let input = document.getElementById("btn-menu");
  if (input.checked == true && e.target.localName != "input") {
    input.checked = false;
  }
});

//CIERRA AL TOCAR FUERA DEL NAV PERO EL BTN SE QUEDA TRUE
//let input = document.getElementById("btn-menu");
//if (input.checked == true && e.target.localName != "input") {
//input.checked = false;
//} else if (input.checked == false && e.target.localName != "input") {
//input.checked = false;
//}
//});

///}
//input.checked = !input.checked;
//}
///* } else if (e.target.localName == "input") {
//input.checked = !input.checked;
//} */
///* } else if (input.checked == false && e.target.localName == "input") {
//input.checked = true; */
///* } else if (input.checked == true && e.target.localName == "input") {
//input.checked = false
