import Hero_person from "../assets/images/Hero/main_comp.json";

export { SOCIAL_MEDIA } from './socialMedia';
export { SKILLS_LIST } from './skillsList';
export { EXPERIENCES } from './experience';
export { EDUCATION_LIST } from './education';
export { PROJECTS } from './projects';
export { OPEN_SOURCE_CONTRIBUTIONS } from './openSource';

export const RESUME_LINK = "https://www.canva.com/design/DAGoRcE8gtQ/lpBqkCKXm6ljWonCGax1Fg/view?utm_content=DAGoRcE8gtQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2a817b3af1";
export const REPO_LINK = "https://github.com/Sudhanva-Nadiger/Portfolio";

export const CONTENT = {
    navs: [
        {
            link: "#skills",
            title: "Skills & Experience",
        },
        {
            link: "#education",
            title: "Education",
        },
        {
            link: "#projects",
            title: "Projects",
        },
        {
            link: "#openSrc",
            title: "Open Source",
        },
        {
            link: "#contact",
            title: "Contact Me",
        },
    ],
    hero: {
        title: `Hello,`,
        sub1: "there",
        sub2: "I am",
        firstName: "Aldi",
        LastName: "MH",
        image: Hero_person,
        hero_content: [
            {
                count: "",
                text: "Developer based in India. Software Development Engineer.",
            },
        ],
    },

    Footer: {
        text: "All © Copy Right Reserved 2025",
    },
};

export const ABOUT_ME = {
    name: "Aldi Maha",
    tagLine: "Insanely ambitious coder | SDE-1 @Flipkart | Ex-SWE intern @Appleute | Open source contributor",
    intro: CONTENT.hero.hero_content.text
};
