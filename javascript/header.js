export const Header = {
    init(){
        this.addListeners();
    },
    addListeners() {
        const burger = document.querySelector(".burger");
        const lines = document.querySelectorAll(".line");
        const xIcon = document.querySelector(".x-icon");

        // Set initial style of burger lines to BLOCK
        this.setLinesDisplay(lines, "block");

        burger.addEventListener("click", () => {
            const burgerMenu = document.querySelector("#burger-menu");

            // Check if burger icon is displayed
            if (lines[0].style.display === "block") {
                this.setLinesDisplay(lines, "none");
                xIcon.style.display = "block";
                burgerMenu.style.display = "block";
            } 
            // Check if X-Icon is displayed
            else {
                burgerMenu.style.animation = "burger-menu-exit 1s";
                xIcon.style.animation = "x-icon-exit 1s";

                setTimeout(() => {
                    burgerMenu.style.display = "none";  
                    burgerMenu.style.animation = "burger-menu-entrance 0.8s";
                    xIcon.style.display = "none";
                    xIcon.style.animation = "x-icon-enter 0.8s";
                    for (let i = 0; i < lines.length; i++) { lines[i].style.animation = "x-icon-enter 0.5s"; }
                    this.setLinesDisplay(lines, "block");
                    
                }, 900);
                setTimeout(() => {
                }, 900);
            }
        });
    },
    setLinesDisplay(lines, style) {
        for (let i = 0; i < lines.length; i++) { lines[i].style.display = style; }
    }
}