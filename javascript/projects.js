import { createText, removeText, projectsData } from "./project-data.js";

const projects = document.querySelectorAll(".project");
const projectImg = document.querySelectorAll(".project-img");

// Listen for project mouse events 
(() => {
    for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener("mouseenter", () => {
            const img = projectImg[i];
            img.style.opacity = "0";

            createText(projects[i], projectsData[i]);
    
        });
        projects[i].addEventListener("mouseleave", () => {
            const img = projectImg[i];
            img.style.opacity = "1";
            removeText(projects[i]);
        });
    }
})();

