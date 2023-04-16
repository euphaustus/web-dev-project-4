
let current = "main-section";

function changer(input) {
    // changes middle section of the screen when user clicks menu buttons
    if (input == 1) {
        // close current section
        document.getElementById(current).style.display = "none";
        // set current to section id
        current = "main-section";
        // open section
        document.getElementById(current).style.display = "flex";
    }

    if (input == 2) {
        document.getElementById(current).style.display = "none";
        current = "products-section";
        document.getElementById(current).style.display = "flex";
    }

    if (input == 3) {
        document.getElementById(current).style.display = "none";
        current = "requests-section";
        document.getElementById(current).style.display = "flex";
    }

    if (input == 4) {
        document.getElementById(current).style.display = "none";
        current = "classes-section";
        document.getElementById(current).style.display = "flex";
    }

    if (input == 5) {
        document.getElementById(current).style.display = "none";
        current = "about-us-section";
        document.getElementById(current).style.display = "flex";
    }


}

function theme_changer() {
    // used by button on page to change css theme

    let image = document.getElementById("theme-button-img");

    let new_link = document.createElement("link");
    new_link.classList.add("alt-style");
    new_link.href = "./css/alt.css";
    new_link.rel = "stylesheet";


    if (image.parentElement.classList.contains("sun-class")) {
        // change button information
        image.src="./images/moon-icon.png";
        image.parentElement.classList.remove("sun-class");
        // change stylesheet
        document.head.appendChild(new_link);
    }

    else {
        // change button information
        console.log("back");
        image.src="./images/sun-icon.svg";
        image.parentElement.classList.add("sun-class");
        // change stylesheet
        const finder = document.querySelectorAll(".alt-style");
        finder.forEach(element => {
            element.remove();
        });
    }
}