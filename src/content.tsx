export const content = {
    intro: {
        main_text: "Passion for programming and",
        changing_text: [
            "learning",
            "designing",
            "creating",
        ],
        buttons: {
            "about": "read more",
            "contact": "say hello",
        },
    },
    about: {
        title: "About me",
        bio: [
            "Hi there! I'm Marjukka. I'm a second-year information processing science student @ Xamk specialising in front end development. I love the creative and technical process of starting with an idea and making it come to life. Most of all I'm passionate about constantly challenging myself to learn more and improve my skills in creating engaging digital experiences.",
            "Technologies I have studied / am currently studying...",
            "...and I can't wait to learn more with every project. I'm most experienced with TS, React, Node, HTML and CSS."
        ],
        technologies: [
            { name : "typescript", icon: "SiTypescript" },
            { name : "react.js", icon: "SiReact" }, 
            { name : "express.js", icon: "SiExpress" }, 
            { name : "node.js", icon: "SiNodedotjs" }, 
            { name : "html", icon: "SiHtml5" }, 
            { name : "css", icon: "SiCss3" }, 
            { name : "postgresql", icon: "SiPostgresql" }, 
            { name : "python", icon: "SiPython" }, 
            ],
  
    },
    projects: {
        title: "Projects",
        description: "Here are some of my projects. I'm hoping to update this section soon to better represent my current skills.",
        items: [
            {
                name: "Portfolio page",
                description: "A fully responsive animated personal portfolio page with dark and light mode versions. Created with React, Typescript and used libraries including Framer Motion and React Icons.",
                link: "https://github.com/marjukkapiironen/portfolio/",
                link_text: "github",
            },
            {
                name: "Notes app",
                description: "A responsive app for writing color-coded notes with a clean design. Features include editing, searching and filtering. Used routing and local storage for storing data. This project was originally an assignment for a programming course.",
                link: "https://github.com/marjukkapiironen/muistiinpanot",
                link_text: "github",
                picture: "/assets/note_app.png",
            }

        ],
    },
    contact: {
        title: "Find me on",
        description: "Here are some places where you can find me on the internet. Feel free to take a look and say hello. :)",
        items: [
            {
                name: "GitHub",
                text: "My GitHub",
                link: "https://github.com/marjukkapiironen",
            },
            {
                name: "LinkedIn",
                text: "My LinkedIn",
                link: "",
            }
        ],
    },
    footer: {
        text: "Designed and created by Marjukka Piironen 2024",
        github_link: {
            text: "GitHub",
            link: "https://github.com/marjukkapiironen/portfolio/",
        }
    },
    navigation: [
        "about",
        "projects",
        "contact",
    ]
}