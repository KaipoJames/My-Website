import { Header } from "./header.js";

const main = {
    init() {
        this.checkForResize();
        Header.init();
    },
    checkForResize() {
        //Check for initial screen size before any resize occurs
        if (window.innerWidth <= 446) {
            this.changeLinksText("Social Links");
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 446) {
                this.changeLinksText("Social Links");
            } else {
                this.changeLinksText("Links");
            }
        })
    },
    changeLinksText(newText) {
        const linksButton = document.querySelector(".links-button");
        linksButton.innerText = newText;
    }
}

main.init();