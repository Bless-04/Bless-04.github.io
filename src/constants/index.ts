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

/** spinning ball content
 * As of 2/13 There can only be 14 of these or very bad things happen
 */
const technologies: ITechnology[] = [
	{
		name: "C#",
		icon: csharp,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "C++",
		icon: cpp,
	},
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: ".NET",
		icon: dotnet,
	},
];

// experience tab
const experiences: IExperience[] = [];

const testimonials: ITestimonial[] = [];

const projects: IProject[] = [];

export { services, technologies, experiences, testimonials, projects };

//for organization
interface IService {
	title: string;
	icon: string;
}

interface ITechnology {
	name: string;
	icon: string;
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
