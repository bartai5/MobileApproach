const clickBtn = document.querySelector(".button-div");
const anchorLink = document.querySelector(".linkadd");

// Set the href attribute
anchorLink.href = 'https://www.google.com';

// Set the anchor text
anchorLink.textContent = 'Click me';

function clickMe(){
    console.log("I was Clicked....");
}

clickBtn.addEventListener("click", clickMe);