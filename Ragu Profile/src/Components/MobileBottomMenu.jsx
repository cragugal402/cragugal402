import styled from "styled-components";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as Telegram } from "../icons/telegram.svg";
import { ReactComponent as Mail } from "../icons/mail.svg";
import React, { useContext } from "react";

import { motion } from "framer-motion";
import { Experience } from "../Context";

import me from "../images/ashik.jpg";

const LeftMenuContainer = styled(motion.div)`
	position: fixed;
	width: 100vw;
	height: calc(60px + env(safe-area-inset-bottom));
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	background-color: ${(props) => props.theme.backdropFallbackColor};
	z-index: 999;

	@supports (
		(-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
	) {
		background-color: #00000000;
		backdrop-filter: blur(8px);
	}
`;

const ProfileImage = styled(motion.img)`
	width: 40px;
	margin-bottom: env(safe-area-inset-bottom);
	height: 40px;
	z-index: 90;
	border-radius: 150px;
`;

const Section = styled(motion.div)`
	width: 40px;
	height: 40px;
	margin-bottom: env(safe-area-inset-bottom);
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 90;
`;

export const MobileBottomMenu = () => {
	const skillsContext = useContext(Experience);

	return (
		<LeftMenuContainer
			variants={{
				visible: {
					y: 0,
				},
				hidden: {
					y: 60,
				},
			}}
			transition={{
				duration: 1,
			}}
			initial={"visible"}
			animate={
				skillsContext.selectedChallenge !== null ||
				skillsContext.selectedSkill !== null
					? "hidden"
					: "visible"
			}>
			<Section
				transition={{
					x: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 0.2,
				}}
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}>
				<a href='mailto:ashikroyce@gmail.com'>
					<Mail style={{ width: "25px", height: "25px" }} fill={"white"} />
				</a>
			</Section>
			{/* <Section
				transition={{
					x: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 0.4,
				}}
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}>
				<a href='https://t.me/AshikRoyce'>
					<Telegram style={{ width: "25px", height: "25px" }} fill={"white"} />
				</a>
			</Section> */}
			<Section
				transition={{
					x: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 0.6,
				}}
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}>
				<a href='https://linkedin.com/in/AshikRoyce' target='_blank'>
					<LinkedIn style={{ width: "25px", height: "25px" }} fill={"white"} />
				</a>
			</Section>
			<Section
				transition={{
					x: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 0.8,
				}}
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}>
				<a href='https://github.com/AshikRoyce' target='_blank'>
					<Github style={{ width: "25px", height: "25px" }} fill={"white"} />
				</a>
			</Section>
			<ProfileImage
				src={me}
				alt={"Ashik Royce"}
				transition={{
					x: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 1,
				}}
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
			/>
		</LeftMenuContainer>
	);
};
