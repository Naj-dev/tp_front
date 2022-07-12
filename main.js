/*****GLOBALS VAR *****/

const counter = document.getElementById('counter');
const firstBlocText = document.getElementById('textarea');
const secondBlocText = document.getElementById('secondWritingBox');
const progressBar = document.querySelector('.progressBar');
const btnBold = document.getElementById('btn_bold');
const btnItalic = document.getElementById('btn_italic');
const btnUppercase = document.getElementById('btn_uppercase');


let maxLengthAttribute = parseInt(document.getElementById("textarea").getAttribute("maxlength"));
let select = document.getElementById("select");
let selectedValue = "";




/******************** COPY THE FIRST TEXTAREA ON THE SECOND ********************/

firstBlocText.addEventListener("keyup", (e) => {


    secondBlocText.innerHTML = e.target.value


});


/******************** CHANGE MAXLENGTH ********************/


select.addEventListener("change", (e) => {


    selectedValue = e.target.value;

    maxLengthAttribute = e.target.value;
    counter.innerHTML = e.target.value - secondBlocText.innerText.length;

    firstBlocText.setAttribute('maxlength', maxLengthAttribute);

})

/******************** COUNTER ********************/

firstBlocText.addEventListener("keyup", (e) => {


    if (e.target.value != "") {


        counter.innerHTML = maxLengthAttribute - secondBlocText.innerText.length;

    } else {

        counter.innerHTML = maxLengthAttribute;

    }

});


/******************** PROGRESS BAR ********************/

let bar = document.getElementById('bar');
let secondBlocTextLength = 0;
let percentage = 0;



firstBlocText.addEventListener("keyup", () => {

    secondBlocTextLength = secondBlocText.innerHTML.length;
    percentage = parseInt((secondBlocTextLength / maxLengthAttribute) * 100);
    bar.value = percentage;

    progressBar.innerHTML = bar.value + "%";

    if (bar.value < 50) {

        bar.classList.remove("progressRed");
        bar.classList.remove("progressOrange");
        bar.classList.add("progressGreen");

    }

    else if (bar.value >= 50 && bar.value < 80) {

        bar.classList.remove("progressGreen");
        bar.classList.remove("progressRed");
        bar.classList.add("progressOrange");

    }
    else {
        bar.classList.add("progressRed");
    }

});

/***** BUTTON *****/
// let bold = "<bold>"

btnBold.addEventListener("click", (e) => {

    let bold = "<bold>"

    firstBlocText.innerHTML = firstBlocText.innerHTML + bold;

});

// console.log(e.target.innerText.length)