import {
	avalonia,
	dotnet,
	javascript,
	typescript,
	html,
	css,
	csharp,
	cpp,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	java,
	threejs,
	github,
	winforms,
	git,
	xunit,
	junit,
	nunit,
	ASPdotnet,
	dotnetCORE,
	mstest,
	framermotion,
	expressjs,
	postgreSQL,
	mongoose,
	EFCore,
	xaml,
	xaml2,
} from "../assets";

/** Navigation Bar */
export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "tech",
		title: "Skills",
	},
];

/** Square thing content under about me */
export const services: Service[] = [
	{
		title: "Web Developer",
		icon: html,
	},
	{
		title: "Desktop App Developer",
		icon: xaml2,
	},
	{
		title: "Full Stack Developer",
		icon: dotnetCORE,
	},
];

//#region technologies

export interface Technology {
	name: string;
	icon: string;
	link: string;
}

/** technologies sorted from most to least proficient */
export const technologies = {
	Languages: [] as Technology[],
	"Frontend Frameworks": [] as Technology[],
	"Backend Frameworks": [] as Technology[],
	Libraries: [] as Technology[],
	"Unit Testing": [] as Technology[],
	Tools: [] as Technology[],
	Databases: [] as Technology[],
	Runtimes: [] as Technology[],

	//"Web Frameworks": [] as Technology[],
};

technologies.Languages = [
	{
		name: "C#",
		icon: csharp,
		link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
	},
	{
		name: "C++",
		icon: cpp,
		link: "https://www.learncpp.com/",
	},
	{
		name: "Java",
		icon: java,
		link: "https://docs.oracle.com/javase/tutorial/",
	},
	{
		name: "HTML 5",
		icon: html,
		link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		name: "CSS",
		icon: css,
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		name: "JavaScript",
		icon: javascript,
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		name: "TypeScript",
		icon: typescript,
		link: "https://www.typescriptlang.org/",
	},
];

technologies["Frontend Frameworks"] = [
	{
		name: "Windows Forms",
		icon: winforms,
		link: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/?view=netdesktop-9.0",
	},
	{
		name: "Windows Presentation Foundation (WPF)",
		icon: xaml,
		link: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-9.0",
	},
	{
		name: "Avalonia UI",
		icon: avalonia,
		link: "https://avaloniaui.net/",
	},

	{
		name: "Tailwind CSS",
		icon: tailwind,
		link: "https://tailwindcss.com/",
	},

	/* soon
    {
        name: "ASP.NET",
        icon: dotnet,
        link: "https://dotnet.microsoft.com/en-us/apps/aspnet"
    }*/
];

technologies["Backend Frameworks"] = [
	{
		name: "ASP.NET Core",
		icon: ASPdotnet,
		link: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps",
	},
	{
		name: "Express JS",
		icon: expressjs,
		link: "https://expressjs.com/",
	},
];

technologies.Libraries = [
	{
		name: "React JS",
		icon: reactjs,
		link: "https://reactjs.org/",
	},
	{
		name: "Three JS",
		icon: threejs,
		link: "https://threejs.org/",
	},
	{
		name: "Framer Motion",
		icon: framermotion,
		link: "https://motion.dev/",
	},
	{
		name: "Entity Framework",
		icon: EFCore,
		link: "https://learn.microsoft.com/en-us/ef/",
	},
	{
		name: "Mongoose",
		icon: mongoose,
		link: "https://mongoosejs.com/",
	},
];

technologies.Runtimes = [
	{
		name: ".NET Runtime",
		icon: dotnet,
		link: "https://dotnet.microsoft.com/en-us/",
	},

	{
		name: "Node JS",
		icon: nodejs,
		link: "https://nodejs.org/en/",
	},
];

technologies.Tools = [
	{
		name: "GitHub ",
		icon: github,
		link: "https://github.com/Bless-04",
	},
	{
		name: "Git",
		icon: git,
		link: "https://git-scm.com/",
	},
];

technologies.Databases = [
	{
		name: "MongoDB",
		icon: mongodb,
		link: "https://www.mongodb.com/",
	},
	{
		name: "PostgreSQL",
		icon: postgreSQL,
		link: "https://www.postgresql.org/",
	},
];

technologies["Unit Testing"] = [
	{
		name: "XUnit",
		icon: xunit,
		link: "https://xunit.net/",
	},
	{
		name: "Junit",
		icon: junit,
		link: "https://junit.org/junit5/",
	},
	{
		name: "NUnit",
		icon: nunit,
		link: "https://nunit.org/",
	},
	{
		name: "MSTest",
		icon: mstest,
		link: "https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-mstest-intro",
	},
];

//#endregion

//#region Experiences

export interface Experience {
	/** title at the experience */
	title: string;

	/** name of company */
	company_name: string;

	/** imported icon image */
	icon: string;

	/**icon background color */
	iconBg: string;

	/** dates of experience */
	date: string;
	points: string[];
}
export const experiences: Experience[] = [];

//#endregion

//#region Testimonials
export const testimonials: Testimonial[] = [
	/* for test
	{
		testimonial:

			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	}, */
];

//#endregion

//#region Projects

export interface Project {
	name: string;
	description: string;
	tags: Tag[];
	image: string;
	link: string;
}

export interface Tag {
	name: string;
	color: string;
}

/** @link  src\index.css */
const style = {
	cpp: "#2f80ed",
	csharp: "red-text-gradient",
};
export const projects: Project[] = [
	/*
	{
		name: "Cross Platform Shell",
		description:
			"An operating system shell capable of executing commands and performing fundamental system operations effectively. It is designed to be cross-platform, supporting both Windows and Unix Based environments.",
		tags: [
			{
				name: "C++ 11",
				color: style.cpp,
			},
			{
				name: "Csharp",
				color: style.csharp,
			},
		],
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AWindows_Terminal_logo.svg&psig=AOvVaw1eu3RxxyfBCpsI5J3p8qkG&ust=1748202204217000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCihO3uvI0DFQAAAAAdAAAAABAE",
		link: "https://github.com/Bless-04/Operating-System-Shell",
	},
    */
];
//#endregion

//#region Services
export interface Service {
	title: string;
	icon: string;
}

//#endregion

//#region Testimonials
export interface Testimonial {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}

//#endregion
