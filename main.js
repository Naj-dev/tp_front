/*****GLOBALS VAR *****/

let counter = document.getElementById('counter');
let maxLengthAttribute = parseInt(document.getElementById("textarea").getAttribute("maxlength"));
let firstBlocText = document.getElementById('textarea');
let secondBlocText = document.getElementById('secondWritingBox');
let progressBar = document.querySelector('.progressBar');




/******************** COPY THE FIRST TEXTAREA ON THE SECOND ********************/

firstBlocText.addEventListener("keyup", (e) => { secondBlocText.value = e.target.value });


/******************** CHANGE MAXLENGTH ********************/


let select = document.getElementById("select");
let selectedValue = "";

select.addEventListener("change", (e) => {

    selectedValue, maxLengthAttribute = e.target.value;
    counter.innerHTML = e.target.value;
    firstBlocText.setAttribute('maxlength', maxLengthAttribute);

})

/******************** COUNTER ********************/


firstBlocText.addEventListener("keyup", (e) => {

    if (e.target.value != "") {

        console.log(e.target.value)

        counter.innerHTML = secondBlocText.innerHTML.length;
        counter.innerHTML = maxLengthAttribute - counter.innerHTML;

    } else {

        counter.innerHTML = maxLengthAttribute;

    }
});


/******************** PROGRESS BAR ********************/

let bar = document.getElementById('bar');
let secondBlocTextLength = 0;
let percentage = 0;



firstBlocText.addEventListener("keyup", () => {

    console.log(firstBlocText.innerHTML.value)
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

// secondBlocText.addEventListener("change", (e) => {

//     console.log(e)

// })






