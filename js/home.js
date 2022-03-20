'use strict';

//  myAccount 
let IconOne = document.getElementById("Account");

let User = document.querySelector(".myAccount");

IconOne.addEventListener("click",()=>{
    User.classList.toggle("ShowContent");
});

