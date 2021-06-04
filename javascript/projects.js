import { variables } from "./variables.js";

const styleTextOnImageHover = () => {
    const images = document.querySelectorAll(".project-img");
    console.log(images);
    addMouseEvents(images[0], "#ono-grindz-caption");
    addMouseEvents(images[1], "#theory-site-caption");
    addMouseEvents(images[2], "#calculator-caption");
    addMouseEvents(images[3], "#vending-caption");
}
const addMouseEvents = (image, id) => {
    const caption = document.querySelector(id);
    image.addEventListener("mouseover", () => {
        image.style.border = "2px solid #3c5df4";
        caption.style.fontSize = "1.7vw";
        caption.style.fontWeight = "bold";
        caption.style.background = variables.blueGradient;
        caption.style.color = "white";
    });
    image.addEventListener("mouseout", () => {
        image.style.border = "1px solid black";
        caption.style.fontSize = "1.5vw";
        caption.style.fontWeight = "normal";
        caption.style.background = variables.bgBlueGray;
        caption.style.color = variables.textColorBlack;
    })
}

styleTextOnImageHover();

