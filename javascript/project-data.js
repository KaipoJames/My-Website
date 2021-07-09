export const projectsData = [
    {
        name: "Comfort Food",
        tools: "Node.js / Express / MongoDB / EJS / SASS / AWS S3",
        links: {
            code: "https://github.com/KaipoJames/Comfort-Food",
            demo: "https://comfort-food.herokuapp.com/"
        }
    },
    {
        name: "Calculator",
        tools: "HTML / CSS / JavaScript",
        links: {
            code: "https://github.com/KaipoJames/Calculator-App",
            demo: "https://calculator-web-app-kaipo.netlify.app/"
        }
    },
    {
        name: "File Chart",
        tools: "HTML / CSS / JavaScript",
        links: {
            code: "https://github.com/KaipoJames/FileChart",
            demo: "https://donut-chart-visualizing-disk-files.netlify.app/"
        }
    },
    {
        name: "Music Theory Underground",
        tools: "HTML / CSS / SASS / Node.js / Tonal.js / JavaScript",
        links: {
            code: "https://github.com/KaipoJames/Music-Theory-Underground",
            demo: "https://music-theory-underground.netlify.app/src/dictionary/dictionary.html"
        }
    },
    {
        name: "Ono Grindz",
        tools: "HTML / CSS / JavaScript",
        links: {
            code: "https://github.com/KaipoJames/Ono-Grindz-Website",
            demo: "https://ono-grindz.netlify.app/index.html"
        }
    },
    {
        name: "Virtual Keyboard",
        tools: "HTML / CSS / JavaScript",
        links: {
            code: "https://github.com/KaipoJames/Virtual-Keyboard",
            demo: "https://mrsh-virtual-keyboard.netlify.app/"
        }
    },
    {
        name: "Kuleana Coral Hawaii",
        tools: "HTML / CSS",
        links: {
            code: "https://github.com/KaipoJames/Kuleana-Coral-Reefs-Hawaii-Website-Clone",
            demo: "https://a0074.is3.aws.cis.byuh.edu/kaipoIT240/Final-Project-Implementation/"
        }
    },
    {
        name: "Vending Machine",
        tools: "HTML / CSS / JavaScript",
        links: {
            code: "https://github.com/KaipoJames/Vending-Machine",
            demo: "https://vending-machine-kaipo.netlify.app/"
        }
    },
    {
        name: "Periodic Table of HTML Elements",
        tools: "HTML / CSS / JavaScript",
        links: { 
            code: "https://github.com/KaipoJames/Interactive-Periodic-Table-of-HTML-Elements",
            demo: "https://interactive-periodic-table-of-html-elements.netlify.app/"
        }
    },
];

export const createText = (project, data) => {
    const container = document.createElement("div");
    container.classList = "hover-text";

    const name = document.createElement("h3");
    name.innerHTML = data.name;

    const tools = document.createElement("p");
    tools.innerHTML = data.tools;

    const buttons = document.createElement("div");
    buttons.classList = "link-buttons";

    const button1 = document.createElement("a");
    button1.innerHTML = "View Code";
    button1.style.textDecoration = "none";
    button1.href = data.links.code;
    button1.target = "_blank";

    const button2 = document.createElement("a");
    button2.innerHTML = "Live Demo";
    button2.style.textDecoration = "none";
    button2.href = data.links.demo;
    button2.target = "_blank";

    buttons.appendChild(button1);
    buttons.appendChild(button2);

    setTimeout(() => {
        container.style.opacity = "1";
    }, 100);

    container.appendChild(name);
    container.appendChild(tools);
    container.appendChild(buttons);

    project.appendChild(container);
}

export const removeText = (project) => {
    const children = project.childNodes;
    let l = children.length;
    const lastChild = children[l - 1];
    lastChild.remove();
}