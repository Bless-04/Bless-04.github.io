import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { gmail, resume } from "../assets";
import { styles } from "../styles";
import { Services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
			<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
				<img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
				<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
			</div>
		</motion.div>
	</Tilt>
);
//about me section
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>About me.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				Hello. I am Blessing Abumere. I am a software developer that mainly specializes in
				the programming languages C#,Java and Typescript. I am currently pursuing a degree
				in Computer Science at Towson University with an expected graduation year of 2026.
			</motion.p>

			<div className="flex mt-20 flex-wrap gap-10">
				<Link to="mailto:babumere04@gmail.com" className="display: block">
					<img width={40} alt="Blessing Abumere Email Link" src={gmail}></img>
				</Link>
				<Link to="https://github.com/Bless-04">
					<img alt="Blessing Abumere Github Profile Link" width={40} src={github}></img>
				</Link>

				<Link to={resume} target="_blank" rel="noreferrer" className="w-fit">
					<div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
						<div>Resume</div>
					</div>
				</Link>
			</div>

			<div className="mt-20 flex flex-wrap gap-10">
				{Services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
