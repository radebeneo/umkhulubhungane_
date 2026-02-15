const navLinks = [
    {
        id: 1, name: "Projects", type: "finder",
    },
    {
        id: 3, name: "Contact", type: "contact",
    },
    {
        id: 4, name: "Resume", type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "19 Jan, 2026",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://www.instagram.com/p/DTxQNQoit5K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    },
    {
        id: 2, 
        date: "Coming Soon, 2026",
        title: "The Ultimate Guide to Mastering API Development for Junior Devs",
        image: "/images/blog2.png",
        // link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Coming Soon, 2026",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        // link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Angular"],
    },
    {
        category: "",
        items: ["ASP.NET Razor", ],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "State Management",
        items: ["NgRx", "Redux", "Zustand"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Java", "Spring Boot"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/radebeneo",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "www.google.com",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/umhlabaobandayo",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/radebeneo",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/neo.jpg",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/neo_aws.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Subsciption Tracker API - Backend App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Subcription Tracker API Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Subscription Tracker API is a robust, production-grade backend service designed to help users efficiently manage and track their recurring subscriptions. Built with a focus on automation, security, and scalability, this API ensures that users never lose track of their financial commitments.",
                        "In an era of subscription fatigue, this tool provides a centralized hub to monitor everything from streaming services to professional software licenses. Its standout feature is the automated renewal notification system, which proactively alerts users before payments are due, allowing for timely cancellations or budget adjustments.",
                        "Automated Lifecycle Management.",
                        "Enterprise-Grade Security.",
                        "Reliable Architecture.",
                        "Seamless Integration.",
                        "Ideal for developers looking for a foundation to build a subscription management dashboard, or for businesses wanting to integrate subscription tracking features into their existing financial applications.",
                    ],
                },
                {
                    id: 2,
                    name: "subcription-tracker.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/radebeneo/subscription-tracker",
                    position: "top-10 right-20",
                },
                // {
                //     id: 4,
                //     name: "subscription-tracker.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-52 right-80",
                //     imageUrl: "/images/project-1.png",
                // },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     position: "top-60 right-20",
                // },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "University Library",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "University Library Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "",
                    ],
                },
                {
                    id: 2,
                    name: "university-library.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/radebeneo/university-library",
                    position: "top-20 left-20",
                },
                // {
                //     id: 4,
                //     name: "university-library.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-52 left-80",
                //     imageUrl: "/images/project-2.png",
                // },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     position: "top-60 left-5",
                // },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "(bite) Food Delivery App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "(bite) Food Delivery App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
                        "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
                        "Think of it like having your favorite restaurants in your pocket, ready to deliver anytime, anywhere.",
                        "Bite is a modern, high-performance food delivery mobile application built with React Native, Expo, and NativeWind.",
                        "It offers a seamless user experience for browsing menus, searching for favorite meals, and managing a digital shopping cart, all backed by a robust backend using Appwrite."
                    ],
                },
                {
                    id: 2,
                    name: "bite.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/radebeneo/bite",
                    position: "top-10 right-20",
                },
                // {
                //     id: 4,
                //     name: "(bite)-food-delivery-app.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-52 right-80",
                //     imageUrl: "/images/project-3.png",
                // },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 right-20",
                // },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/neo.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/neo_aws.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/neo.jpg",
            description: [
                "Hey! I’m Neo 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, Typescript, React, Angular, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",

        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

export interface WindowData {
    isOpen: boolean;
    zIndex: number;
    data: any;
}

export interface WindowConfig {
    [key: string]: WindowData;
}

const WINDOW_CONFIG: WindowConfig = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };