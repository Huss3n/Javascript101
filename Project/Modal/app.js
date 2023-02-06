"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtn = document.querySelectorAll(".show-modal");

for (let i = 0; i <= openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", function () {
    console.log("Button clicked");
  });
}
