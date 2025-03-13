import React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { ITechnology, Technologies } from "./data";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

/** All the technologies */
const tech = Object.values(Technologies);

/** The type of tech */
const techRows = Object.keys(Technologies);

const Tech = () => {
	const languages = tech.map((technology: ITechnology[], index: number) => (
		<div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
			<h3 className="md:hidden">{techRows[index]}</h3>
			<motion.div
				className="w-full flex flex-row flex-wrap gap-2"
				variants={fadeIn("right", "spring", 0.75)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}>
				{technology.map((tech) => (
					<Link to={tech.link} key={tech.name} target="_blank" className="flex flex-row">
						<div className="w-[40px] h-[40px] relative flex flex-row items-center group cursor-pointer ">
							<img
								src={tech.icon}
								alt={tech.name}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							/>
							<div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-primary text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
								{tech.name}
							</div>
						</div>
					</Link>
				))}
			</motion.div>
		</div>
	));

	const techNames = techRows.map((tech, index) => (
		<h3 className="h-[50px] md:flex items-center hidden" key={index}>
			{tech}
		</h3>
	));

	return (
		<section className="w-full h-fit p-8 mt-20" id="skills">
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="text-center mx-auto">
				<p className={styles.sectionSubText}>
					<u>
						<b>Some</b>
					</u>{" "}
					of what I have learned so far
				</p>
				<h2 className={styles.sectionHeadText}>Top Technical Skills.</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className=" mt-4  dark:text-secondary  dark:bg-tertiary  text-[17px] md:w-fit md:min-w-[65%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary">
				<motion.div
					variants={textVariant()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="flex flex-col justify-between h-full gap-5">
					{techNames}
				</motion.div>
				<div className="w-[2px]  h-[475px] dark:bg-secondary bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />
				<div className="md:w-[60%] w-full pl-2 h-full flex flex-col gap-8">{languages}</div>
			</motion.div>
		</section>
	);
};

export default SectionWrapper(Tech, "tech");
