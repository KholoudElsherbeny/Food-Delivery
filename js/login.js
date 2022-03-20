'use strict';

// Sign up 
let openBtn = document.querySelector(".banner .open-btn");
let closebtn = document.querySelector(".overLay .contact .close-btn")
let overlay = document.querySelector(".overLay");

openBtn.addEventListener("click" , ()=>{
    overlay.classList.add("open-lay");
    console.log(openBtn);
});
closebtn.addEventListener('click',()=>{
    overlay.classList.remove("open-lay");
});