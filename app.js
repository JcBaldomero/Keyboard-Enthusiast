






// change background image of intro section
const images = [
    {
        img:"./images/Background/keyboardg1.jpg",
        text: " \"Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.\"",
        person:"― Alfred North Whitehead" 
    },
    {
        img:"./images/Background/keyboardbg3.jpg",
        text: " \"Every block of stone has a statue inside it and it is the task of the sculptor to discover it\" ",
        person:"― Michelangelo"
    },
    {
        img:"./images/Background/keyboardbg4.jpg",
        text: " \"Without change there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage the change that is inevitable.\"",
        person:" ― William Pollard"
    },
    {
        img:"./images/Background/keyboardbg5.jpg",
        text: " \"Color directly influences the soul. Color is the keyboard, the eyes are the hammers, the soul is the piano with many strings. The artist is the hand that plays, touching one key or another purposively, to cause vibrations in the soul.\" ",
        person:"― Wassily Kandinsky"
    },
    {
        img:"./images/Background/keyboardbg6.jpg",
        text: " \"Styles may change, details may come and go, but the broad demands of aesthetic judgement are permanent.\" ",
        person:"― Roger Scruton "
    },
];

const  imgBg = document.getElementById("bgImg");
const quote = document.getElementById("quotes");
const author = document.getElementById("author");
const bgBtn = document.querySelector(".logo");
let currentItem  = 0;

window.addEventListener("DOMContentLoaded", function(){
    showBg();
})

function showBg(){
    const currentValue = images[currentItem]
    imgBg.src = currentValue.img;
    imgBg.style.transition = "3s linear";
    quote.textContent = currentValue.text;
    author.textContent = currentValue.person;
}

bgBtn.addEventListener("click", function(){
 randomNum = Math.floor(Math.random() * images.length)
 currentItem = randomNum;
 showBg();
})











// Keyboard.html Js
const typeWriter = [
    {
        img:"./images/Background/OldKeyboard1.jpg"
    },
    {
        img:"./images/Background/OldMechKeeb.jpg"
    },
    {
        img:"./images/Background/WhiteTypewriter.jpg"
    }
];
const membrane = [
    {
        img:"./images/Background/OfficeWorkSpace.jpg"
    },
    {
        img:"./images/Background/whiteOFficeKeyboard.jpg"
    },
    {
        img:"./images/Background/membraneKeyboard.jpg"
    }
];
const mechanical = [
    {
        img:"./images/Background/MechKeebBlackWithWristRest.jpg"
    },
    {
        img:"./images/Background/keyboardbg6.jpg"
    },
    {
        img:"./images/Background/keyboardbg3.jpg"
    }
];


const container = document.querySelectorAll(".types");
const img1 = document.getElementById("typewriter");
const img2 = document.getElementById("membrane");
const img3 = document.getElementById("mechanical");


let currentImage  = 0;

// changes image in typewriter section
function showImg1(){
    randomNumber();
    const currentValue = typeWriter[currentImage]
    img1.src = currentValue.img
}
// changes image in membrane section
function showImg2(){
    randomNumber();
    const currentValue = membrane[currentImage]
    img2.src = currentValue.img
}
// changes image in membrane section
function showImg3(){
    randomNumber();
    const currentValue = mechanical[currentImage]
    img3.src = currentValue.img
}


// generates a random number from 1 upto length of typewriter
function randomNumber() {
 randomNum = Math.floor(Math.random() * typeWriter.length)
 currentImage = randomNum;

}


container.forEach(function(container){
    container.addEventListener("click", function(){
        if(container.classList.contains("typewriter-container")){
            showImg1();
        } 
        else if(container.classList.contains("membrane-container")){
            showImg2();
        }
        else{
            showImg3();
        }
    })
})








// Favorite Keyboard section js
// select between two keyboards to show.
const rakk = document. querySelector(".fav-keyboard1")
const garuda = document.querySelector(".fav-keyboard2");
const favBtn = document.querySelectorAll(".favbtn");
const rakkBtn = document.getElementById("rakk")
const garudaBtn = document.getElementById("Garuda")

favBtn.forEach(function(favBtn){
 
    favBtn.addEventListener("click", function(){
       if(favBtn.classList.contains("rakk")){
        garuda.classList.remove("garuda-open")
        rakk.classList.remove("rakk-close")
        rakkBtn.style.opacity = "1";
        garudaBtn.style.opacity = ".4";
       }  
       else{
        rakk.classList.add("rakk-close")
        garuda.classList.add("garuda-open")
        rakkBtn.style.opacity = ".4";
        garudaBtn.style.opacity = "1";


       }
    })


})



