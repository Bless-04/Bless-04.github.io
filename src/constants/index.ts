import {
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
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	java,
	tripguide,
	threejs,
	github,
} from "../assets";

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
		id: "contact",
		title: "Contact",
	},
];

/** Square thing content under about me */
const services: IService[] = [
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
		icon: dotnet,
	},
];

/** Technologies sorted from most to least proficient */
const Technologies = {
	Languages: [] as ITechnology[],
	Frameworks: [] as ITechnology[],
	Libraries: [] as ITechnology[],
	Runtimes: [] as ITechnology[],
	Tools: [] as ITechnology[],
	Databases: [] as ITechnology[],
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
		name: "CSS 3",
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

Technologies.Frameworks = [
	{
		name: "Windows Forms",
		icon: dotnet,
		link: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/?view=netdesktop-9.0",
	},
	{
		name: "Windows Presentation Foundation (WPF)",
		icon: dotnet,
		link: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-9.0",
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
];

Technologies.Runtimes = [
	{
		name: ".NET",
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
		name: "GitHub",
		icon: github,
		link: "https://github.com/Bless-04",
	},
];

Technologies.Databases = [
	{
		name: "MongoDB",
		icon: mongodb,
		link: "https://www.mongodb.com/",
	},
];

// experience tab
const experiences: IExperience[] = [];

const testimonials: ITestimonial[] = [];

const projects: IProject[] = [];

export { services, Technologies, experiences, testimonials, projects };

//for organization
interface IService {
	title: string;
	icon: string;
}

interface ITechnology {
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
