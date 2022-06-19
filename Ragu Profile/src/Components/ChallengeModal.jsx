import React, { useContext, useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import moment from "moment";
const MediaQuery = require("react-responsive").default;
const useMediaQuery = require("react-responsive").useMediaQuery;

import { Experience } from "../Context";
import { ReactComponent as Close } from "../icons/close.svg";

const MobileChallengeModalContainer = styled(motion.div)`
	position: fixed;
	height: 100%;
	width: 100vw;
	top: 0;
	right: 0;
	z-index: 100;
`;

const MobileChallengeModal = styled(motion.div)`
	height: 100%;
	width: 100%;
	overflow: scroll;
	position: relative;
	background-color: ${(props) => props.theme.backdropFallbackColor};
	transition: background-color 1s linear;

	@supports (
		(-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))
	) {
		background-color: ${(props) => props.color}30;
		backdrop-filter: blur(16px);
	}
`;

const ChallengeModalContainer = styled(motion.div)`
	position: fixed;
	height: calc(100vh - 100px);
	width: calc(50vw - 80px);
	top: 50px;
	right: 80px;
	z-index: 100;
`;

const ChallengeModal = styled.div`
	border-radius: 8px;
	height: 100%;
	width: 100%;
	position: relative;
	background-color: ${(props) => props.theme.backdropFallbackColor};
	overflow: scroll;
	transition: background-color 1s linear;

	@supports (
		(-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))
	) {
		background-color: ${(props) => props.color}30;
		backdrop-filter: blur(16px);
	}
`;
const StaticSkillCardContainer = styled.div`
	text-align: center;
	border-radius: 8px;
	background-color: ${(props) => props.theme.componentColor};
	display: "flex";
	justify-content: "center";
	align-items: "center";
	padding-top: 4px;
	padding-bottom: 4px;
	padding-left: 10px;
	padding-right: 10px;
	margin: 4px;
	cursor: pointer;

	& span {
		font-weight: 400;
	}
`;

const StaticSkillCard = (props) => {
	const skillsContext = useContext(Experience);

	return (
		<StaticSkillCardContainer
			onClick={() => {
				// skillsContext.selectChallenge(null);
				// setTimeout(() => {
				// 	scroller.scrollTo("skills", {
				// 		duration: 500,
				// 		delay: 0,
				// 		smooth: "easeInOutQuart",
				// 	});
				// }, 500);
				// setTimeout(() => {
				// 	skillsContext.selectSkill(props.skill);
				// }, 1000);
				window.open(props.skill.url)
			}}>
			<span>{props.skill.name}</span>
		</StaticSkillCardContainer>
	);
};

const ImageBannerContainer = styled.div`
	background-color: ${(props) => props.color};
	height: 100px;
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ChallengeImage = styled.img`
	height: 100px;
	width: 100px;
`;

const DescriptionContainer = styled.div`
	padding: 24px;
`;

const ChallengeTitle = styled.h2`
	margin: 0;
	margin-top: 12px;
	font-weight: 400;
`;

const Field = styled.h4`
	margin: 0;
	margin-top: 40px;
	opacity: 0.3;
	font-weight: 400;
	text-transform: uppercase;
`;

const DescriptionText = styled.div`
	margin: 0;
	margin-top: 6px;
`;

const WebsiteLink = styled.div`
	margin-top: 40px;
	max-width: 200px;
	height: 30px;
	border-radius: 8px;
	padding: 12px;
	background-color: ${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const DateText = styled.h4`
	font-size: 16px;
	font-weight: 400;
	margin: 0;
	text-transform: uppercase;
`;

const formatDate = (date) =>
	new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(date);

const ChallengeModalContent = () => {
	const skillsContext = useContext(Experience);

	const [lastChallenge, setLastChallenge] = useState(
		skillsContext.selectedChallenge,
	);
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-device-width: 1224px)",
	});

	useEffect(() => {
		if (skillsContext.selectedChallenge) {
			setLastChallenge(skillsContext.selectedChallenge);
		}
	}, [skillsContext.selectedChallenge]);

	const duration = useMemo(() => {
		if (lastChallenge) {
			const endDate = moment(lastChallenge.end || new Date(Date.now()));
			const startDate = moment(lastChallenge.start);

			const yearDiff = endDate.diff(startDate, "years");
			const monthDiff = endDate.diff(startDate, "months") % 12;
			const dayDiff = endDate.diff(startDate, "days") % 30;

			if (yearDiff > 0) {
				return `${yearDiff} years ${
					monthDiff > 0 ? " & " + monthDiff + " months" : ""
				}`;
			} else {
				if (monthDiff > 0) {
					return `${monthDiff} months${
						dayDiff > 0 ? " & " + dayDiff + " days" : ""
					}`;
				} else {
					return `${dayDiff} days`;
				}
			}
		}
	}, [lastChallenge]);

	if (!lastChallenge) {
		return null;
	}

	return (
		<div>
			<div
				onClick={() => {
					skillsContext.selectChallenge(null);
				}}
				style={{
					position: isDesktopOrLaptop ? "absolute" : "fixed",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					top: 8,
					left: 8,
					width: 40,
					height: 40,
					cursor: "pointer",
					zIndex: 999,
					borderRadius: 20,
					backgroundColor: lastChallenge.theme,
				}}>
				<Close
					style={{
						width: 15,
						height: 15,
					}}
					fill={lastChallenge.light ? "black" : "white"}
				/>
			</div>
			<ImageBannerContainer color={lastChallenge.theme}>
				<ChallengeImage src={lastChallenge.image} />
			</ImageBannerContainer>
			<DescriptionContainer>
				<Field
					style={{
						margin: 0,
					}}>
					Organization
				</Field>
				<ChallengeTitle>{lastChallenge.name}</ChallengeTitle>
				<Field>Time frame</Field>
				<DateText
					style={{
						marginTop: 12,
					}}>
					{formatDate(lastChallenge.start)} →{" "}
					{lastChallenge.end ? formatDate(lastChallenge.end) : "now"}
				</DateText>
				<DateText>{duration}</DateText>
				<Field>Roles and Responsibilities</Field>
				<DescriptionText>{lastChallenge.description}</DescriptionText>
				{lastChallenge.link ? (
					<WebsiteLink
						color={lastChallenge.theme}
						onClick={() => {
							window.open(lastChallenge.link, "_blank");
						}}>
						<h4
							style={{
								color: lastChallenge.light ? "black" : "white",
								textTransform: "uppercase",
								fontWeight: 400,
							}}>
							Learn more
						</h4>
					</WebsiteLink>
				) : null}
				{lastChallenge.skills.length > 0 && !isDesktopOrLaptop ? (
					<>
						<Field>Related Skills</Field>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-start",
								flexDirection: "row",
								flexWrap: "wrap",
								marginTop: 12,
							}}>
							{lastChallenge.skills.map((skillName, index) => (
								<StaticSkillCard
									key={index}
									skill={skillsContext.skills[skillName]}
								/>
							))}
						</div>
					</>
				) : null}
			</DescriptionContainer>
		</div>
	);
};

export const ChallengeModalComponent = (props) => {
	const skillsContext = useContext(Experience);
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-device-width: 1224px)",
	});

	const ref = useRef(null);
	useEffect(() => {
		if (
			ref &&
			ref.current &&
			props.inView &&
			skillsContext.selectedChallenge !== null
		) {
			ref.current.scrollTop = 0;
		}
	}, [props.inView, ref, skillsContext.selectedChallenge]);

	useEffect(() => {
		if (skillsContext.selectedChallenge && !isDesktopOrLaptop && props.inView) {
			let windowOffset = window.scrollY;
			const oldStyle = document.body.style.cssText;
			setTimeout(() => {
				windowOffset = window.scrollY;
				document.body.setAttribute(
					"style",
					`${oldStyle}; position: fixed; top: -${windowOffset}px; left: 0; right: 0;`,
				);
			}, 1000); // Match animation

			return () => {
				document.body.setAttribute("style", oldStyle);
				window.scrollTo(0, windowOffset);
			};
		}
	}, [skillsContext.selectedChallenge, isDesktopOrLaptop, props.inView]);

	return (
		<AnimatePresence>
			<MediaQuery maxDeviceWidth={1224} key={"mobile"}>
				<MobileChallengeModalContainer
					variants={{
						hidden: {
							y: "150vh",
							transition: {
								duration: 1,
								delay: 0,
							},
						},
						visible: {
							y: 0,
							transition: {
								duration: 1,
								delay: 0.25,
							},
						},
					}}
					initial={"hidden"}
					animate={
						skillsContext.selectedChallenge !== null && props.inView
							? "visible"
							: "hidden"
					}>
					<MobileChallengeModal
						variants={{
							hidden: {
								opacity: 0,
								transition: {
									duration: 1,
									delay: 2,
								},
							},
							visible: {
								opacity: 1,
								transition: {
									duration: 0,
									delay: 0,
								},
							},
						}}
						initial={"hidden"}
						animate={
							skillsContext.selectedChallenge !== null && props.inView
								? "visible"
								: "hidden"
						}
						ref={ref}
						color={skillsContext.selectedChallenge?.theme || "#000000"}>
						<ChallengeModalContent />
					</MobileChallengeModal>
				</MobileChallengeModalContainer>
			</MediaQuery>
			<MediaQuery minDeviceWidth={1224} key={"desktop"}>
				<ChallengeModalContainer
					variants={{
						hidden: {
							x: "100vw",
						},
						visible: {
							x: 0,
						},
					}}
					initial={"hidden"}
					animate={
						skillsContext.selectedChallenge !== null && props.inView
							? "visible"
							: "hidden"
					}>
					<ChallengeModal
						ref={ref}
						color={skillsContext.selectedChallenge?.theme || "#000000"}>
						<ChallengeModalContent />
					</ChallengeModal>
				</ChallengeModalContainer>
			</MediaQuery>
		</AnimatePresence>
	);
};
