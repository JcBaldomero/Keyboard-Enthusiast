// Navbar function
// Navbar changes when scrolled (transparent to colored)
const nav = document.getElementById('nav');
window.onscroll = function () { 
    "use strict";
    if (window.pageYOffset > 500 ) {
        nav.classList.add("colored");
        // console.log("working");
    } 
    else {
        nav.classList.remove("colored");
    }
};



// sidebar dropdown
const sideBtn = document.querySelectorAll(".side-drop-btn");
const sideContent = document.querySelectorAll(".side-drop-content");


sideContent.forEach(function(sideContent){
    
  sideBtn.forEach(function(sideBtn){

    sideBtn.addEventListener("click", function(){
        sideContent.classList.toggle("open-side-drop");
       
        if(sideContent.classList.contains("open-side-drop")){
            sideBtn.style.transform = "rotate(180deg)";
        }
        else{
            sideBtn.style.transform = "rotate(0deg)"
        }
      
    })
  })

})

// mobile sidebar Function
const sideBar = document.querySelector(".sidebar-content");
const mobileSideBtn = document.querySelector(".sideBtn");

mobileSideBtn.addEventListener("click", function(){
    // console.log("working")
    sideBar.classList.toggle("sidebar-open");
})




