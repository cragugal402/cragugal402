import styled from "styled-components";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { Experience } from "../Context";

const RightMenuContainer = styled(motion.div)`
	position: fixed;
	width: 100vw;
	height: calc(60px + env(safe-area-inset-top));
	padding-top: env(safe-area-inset-top);
	right: 0;
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	z-index: 999;

	background-color: ${(props) => props.theme.backdropFallbackColor};
	@supports (
		(-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
	) {
		background-color: #00000000;
		backdrop-filter: blur(8px);
	}

	& p {
		cursor: pointer;
		margin-right: 15px;
		opacity: 0.6;
	}
`;

const Section = styled(motion.p)`
	z-index: 90;
	font-weight: 400;
`;

export const MobileTopMenu = () => {
	const skillsContext = useContext(Experience);

	return (
		<RightMenuContainer
			variants={{
				visible: {
					y: 0,
				},
				hidden: {
					y: -60,
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
					y: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 1,
				}}
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 0.7 }}
				onClick={() =>
					scroller.scrollTo("header", {
						offset: -60,
						duration: 500,
						delay: 0,
						smooth: "easeInOutQuart",
					})
				}>
				HOME
			</Section>
			<Section
				transition={{
					y: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 0.8,
				}}
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 0.7 }}
				onClick={() =>
					scroller.scrollTo("presentation", {
						offset: -60,
						duration: 500,
						delay: 0,
						smooth: "easeInOutQuart",
					})
				}>
				ABOUT
			</Section>
			<Section
				transition={{
					y: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 0.4,
				}}
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 0.7 }}
				onClick={() =>
					scroller.scrollTo("challenges", {
						duration: 500,
						delay: 0,
						smooth: "easeInOutQuart",
					})
				}>
				CHALLENGES
			</Section>
			<Section
				transition={{
					y: {
						type: "spring",
						stiffness: 200,
						damping: 50,
					},
					duration: 0.4,
					delay: 0.2,
				}}
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 0.7 }}
				onClick={() =>
					scroller.scrollTo("skills", {
						duration: 500,
						delay: 0,
						smooth: "easeInOutQuart",
					})
				}>
				SKILLS
			</Section>
		</RightMenuContainer>
	);
};
