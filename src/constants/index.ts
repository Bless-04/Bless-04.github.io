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
	dotnetCORE,
	mstest,
	framermotion,
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
export const Services: IService[] = [
	{
		title: "Web Developer",
		icon: html,
	},
	{
		title: "Desktop App Developer",
		icon: csharp,
	},
	{
		title: "Full Stack Developer",
		icon: dotnetCORE,
	},
];

/** Technologies sorted from most to least proficient */
export const Technologies = {
	Languages: [] as ITechnology[],
	Libraries: [] as ITechnology[],
	Runtimes: [] as ITechnology[],
	Tools: [] as ITechnology[],
	Databases: [] as ITechnology[],
	"Unit Testing": [] as ITechnology[],
	"UI Frameworks": [] as ITechnology[],
	//"Web Frameworks": [] as ITechnology[],
};

Technologies.Languages = [
	{
		name: "C#",
		icon: csharp,
		link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
	},
	{
		name: "Java",
		icon: java,
		link: "https://docs.oracle.com/javase/tutorial/",
	},
	{
		name: "C++",
		icon: cpp,
		link: "https://www.learncpp.com/",
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

Technologies["UI Frameworks"] = [
	{
		name: "Windows Forms",
		icon: winforms,
		link: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/?view=netdesktop-9.0",
	},
	{
		name: "Windows Presentation Foundation (WPF)",
		icon: dotnet,
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

Technologies.Libraries = [
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
];

Technologies.Runtimes = [
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

Technologies.Tools = [
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

Technologies.Databases = [
	{
		name: "MongoDB",
		icon: mongodb,
		link: "https://www.mongodb.com/",
	},
];

Technologies["Unit Testing"] = [
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
		link: "https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest",
	},
];

// experience tab
export const Experiences: IExperience[] = [];

// testimonials
export const Testimonials: ITestimonial[] = [];

// projects
export const Projects: IProject[] = [];

//#region Interfaces
interface IService {
	title: string;
	icon: string;
}

export interface ITechnology {
	name: string;
	icon: string;
	link: string;
}

interface IExperience {
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

interface ITestimonial {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}

interface IProject {
	name: string;
	description: string;
	tags: ITag[];
	image: string;
	source_code_link: string;
}

interface ITag {
	name: string;
	color: string;
}
//#endregion
