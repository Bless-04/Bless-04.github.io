import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { gmail, resume, linkedin, github, instagram } from "../assets";
import { styles } from "../styles";
import { services, Service } from "./data";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const imgWidth: number = 40;

/** Services */
const ServiceCard = ({ index, title, icon }: Service & { index: number }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full red-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
				<img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
				<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
			</div>
		</motion.div>
	</Tilt>
);

/** About me section */
const About = () => (
	<>
		{" "}
		<motion.div variants={textVariant()}>
			<p className={styles.sectionSubText}>Introduction</p>
			<h2 className={styles.sectionHeadText}>About me.</h2>
		</motion.div>
		<motion.p
			variants={fadeIn("", "", 0.1, 1)}
			className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
		>
			Hello. I am Blessing Abumere. <br />I am an aspiring software engineer pursuing a B.S.
			in Computer Science at Towson University with an expected graduation year of 2026.{" "}
			<br /> I am very comfortable with Java, C++, and TypeScript, and have used each in academic
			coursework but I am most proficient in C#, as it is my favorite language and my go-to
			for creating self-directed projects and mastering concepts beyond the classroom.
			<br />
			I'm always open to new opportunities and collaborations!
		</motion.p>
		<motion.div variants={fadeIn("", "", 0.5, 2)} className="flex mt-20 flex-wrap gap-10">
			<Link to="mailto:babumere04@gmail.com" className="display: block">
				<img width={40} alt="Blessing Abumere Email Link" src={gmail} />
			</Link>

			<Link to="https://github.com/Bless-04">
				<img alt="Blessing Abumere Github Profile Link" width={imgWidth} src={github} />
			</Link>

			<Link to="https://www.linkedin.com/in/blessing-abumere-a5804523b">
				<img alt="Blessing Abumere Linkedin Profile Link" width={imgWidth} src={linkedin} />
			</Link>

			<Link to="https://www.instagram.com/blessing_abumere04/">
				<img
					alt="Blessing Abumere Instagram Profile Link"
					width={imgWidth}
					src={instagram}
				/>
			</Link>

			<Link to={resume} target="_blank" rel="noreferrer">
				<button className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
					Resume
				</button>
			</Link>
		</motion.div>
		<div className="mt-20 flex flex-wrap gap-10">
			{services.map((service, index) => (
				<ServiceCard key={service.title} index={index} {...service} />
			))}
		</div>
	</>
);

export default SectionWrapper(About, "about");
