/*****GLOBALS VAR *****/

let counter = document.getElementById('counter');
let maxLength = document.getElementById("firstWritingBox").getAttribute("maxlength");
let firstBlocText = document.getElementById('firstWritingBox');
let secondBlocText = document.getElementById('secondWritingBox');


/******************** COPY THE FIRST TEXTAREA ON THE SECOND ********************/

firstBlocText.addEventListener("keyup", (e) => {

    secondBlocText.innerHTML = e.target.value;
});


/******************** COUNTER ********************/


// firstBlocText.addEventListener("keyup", (e) => {


//     if (e.target.value != "") {

//         counter.innerHTML = counterChar(e.target.value);

//         console.log(e.target.value);

//     }

//     else {

//         counter.innerHTML = counter.target.value;

//     }

// });

// let counterChar = (text) => {
//     // return maxLength - text.trim().length;
//     return maxLength - (secondBlocText.textContent.length);
// }


firstBlocText.addEventListener("keyup", (e) => {


    if (e.target.value != "") {

        counter.innerHTML = counterChar(e.target.value);

        console.log(e.target.value);

    }

    else {

        counter.innerHTML = counter.target.value;

    }

});

let counterChar = (text) => {
    // return maxLength - text.trim().length;
    return maxLength - (secondBlocText.textContent.length);
}

/******************** CHANGE MAXLENGTH ********************/


let select = document.getElementById("select");
let selectValue = "";

select.addEventListener("change", (e) => {

    selectValue = e.target.value;
    maxLength = e.target.value;
    counter.innerHTML = e.target.value;
    firstBlocText.setAttribute('maxlength', maxLength);
})


