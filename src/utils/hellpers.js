import imgProject1 from '../assets/Project1.png';
import imgProject2 from '../assets/Project2.png';
import imgProject3 from '../assets/Project3.png';

const allProjects = [
    {
        linkPath: "https://gpzinho.vercel.app/",
        imgProject: imgProject1,
        titleProject: "Projeto 1",
        info: ["web app"]
    },
    {
        linkPath: "https://joaovitorteixeiradesouza.github.io/Projeto_Android/",
        imgProject: imgProject2,
        titleProject: "Projeto 2",
        info: ["web app"]
    },
    {
        linkPath: "https://joaovitorteixeiradesouza.github.io/Projeto_Aula/",
        imgProject: imgProject3,
        titleProject: "Projeto 3",
        info: ["web app"]
    },
];

const experienciaDev = [
    {
        titleCargo: 'Estágio - Análise Desenvolvimento',
        descCargo: 'Estágiario com análise e desenvolvimento na empresa HexaSolution por dois anos. As principais linguagens utilizadas eram: Javascript, VB e SQL. Minhas principais tarefas eram desenvolvimento de telas e correção de bugs.'
    },
    {
        titleCargo: 'Analista de Desenvolvimento Junior',
        descCargo: 'Analista de Desenvolvimento na empresa HexaSolution, atualmente há um ano. Minhas principais tarefas são desenvolvimento de telas, correção de bugs, testes unitários e criação de APIs.'
    }
]

export function getAllProjects() {
    return allProjects;
}

export function experienciaDevList() {
    return experienciaDev;
}

export function filterProjects(listProject) {
    const itensFilter = getAllProjects().filter(item => {
        const encontrados = item.info.some((itemInfo) => {
            return listProject.includes(itemInfo)
        })
        return encontrados;
    }) 

    return itensFilter;
}

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.desactiveClass = "desactive";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                this.navList.classList.remove(this.activeClass);
                this.mobileMenu.classList.remove(this.activeClass);
            });
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }

        return this;
    }
}

export const mobileNavBar = new MobileNavBar (
    ".mobile-menu",
    "#menu",
    "#menu a",
);

mobileNavBar.init();