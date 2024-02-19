// constants for query selector
const pId = document.querySelector("p");
const customNumber = document.querySelector("#customNumber");
const customColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const img = document.querySelector("#images");

let imgSrcs = [];

// function to change bg color from user input and add student id
function changeCustomColor(colorVal) {
    pId.textContent = "1233586"

    switch (true) {
        case (colorVal <= 0):
            document.body.style.backgroundColor = "rgb(255, 0, 0)";
            break;
        case (colorVal <= 20):
            document.body.style.backgroundColor = "rgb(0, 255, 0)";
            break;
        case (colorVal <= 40):
            document.body.style.backgroundColor = "rgb(0, 0, 255)";
            break;
        case (colorVal <= 60):
            document.body.style.backgroundColor = "rgb(255, 127, 0)";
            break;
        case (colorVal <= 80):
            document.body.style.backgroundColor = "rgb(127, 0, 255)";
            break;
        case (colorVal <= 100):
            document.body.style.backgroundColor = "rgb(255, 255, 0)";
            break;
        default:
            document.body.style.backgroundColor = "rgb(255, 0, 0)";
            break;
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randNumber = Math.floor(Math.random() * 101);
    changeCustomColor(randNumber);
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    if (imageSelect.length > 1) {
        return;
    }

    const numOfImages = 5;

    for (let i = 1; i <= numOfImages; i++) {
        let newSrc = "../img/img" + i + ".jpg";
        imgSrcs.push(newSrc);
        let newOption = document.createElement("option");
        newOption.value = i;
        newOption.textContent = "Image " + i;
        imageSelect.appendChild(newOption);
    }
}

// function to change image
function changeImage() {
    let selection = imageSelect.selectedIndex - 1;
    if (selection === -1) {
        img.src = "";
        img.alt = "";
        return;
    }

    console.log(selection);

    img.src = imgSrcs[selection];
    img.alt = "Image " + selection;
}

// event listeners for on click event of buttons and select
customColor.addEventListener("click", function() {
    changeCustomColor(customNumber.value);
});
randColor.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);
imageSelect.addEventListener("change", changeImage);

// event listeners for on change event of select