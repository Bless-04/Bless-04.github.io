import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React from "react";

const Hello = () => (
	<section className={`relative w-full h-screen mx-auto`}>
		<div
			className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
		>
			<div className="flex flex-col justify-center items-center mt-5">
				<div className="w-5 h-5 rounded-full bg-[#6b1313]" />
				<div className="w-1 sm:h-80 h-40 red-gradient" />
			</div>

			<div>
				<h1 className={`${styles.helloHeadText} text-white`}>
					Hello, I'm <span className="text-[#6b1313]">Blessing</span>
				</h1>
				<p className={`${styles.helloSubText} mt-2 text-white-100`}>
					I develop Desktop Apps, User interfaces <br className="sm:block hidden" />
					and Web applications
				</p>
			</div>
		</div>

		<ComputersCanvas />

		<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
			<a href="#about">
				<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
					<motion.div
						animate={{
							y: [0, 24, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="w-3 h-3 rounded-full bg-secondary mb-1"
					/>
				</div>
			</a>
		</div>
	</section>
);

export default Hello;
