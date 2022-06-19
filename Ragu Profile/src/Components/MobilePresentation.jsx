import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Element } from "react-scroll";

import { MobileComponent } from "./Common";

import me from "../images/ashik.jpg";

const Title = styled(motion.h1)`
	text-transform: uppercase;
	font-weight: 500;
	font-size: 30px;
	opacity: 0.7;
	margin: 0;
`;

const SoftBold = styled(motion.span)`
	font-weight: 400;
	opacity: 1;
`;

const Description = styled(motion.p)`
	line-break: strict;
	font-size: 16px;
	opacity: 0.6;
`;

const ProfileImage = styled(motion.img)`
	z-index: 3;
	width: 150px;
	border-radius: 150px;
`;

const PresentationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ProfileImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-right: calc(-50vw);
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: justify;
	text-justify: inter-word;
`;

export const MobilePresentation = () => {
	return (
		<MobileComponent>
			<Element
				name='presentation'
				style={{
					height: "100%",
					width: "100%",
				}}>
				<PresentationContainer>
					<AnimatePresence>
						<ProfileImageContainer>
							<InView>
								{({ inView, ref }) => (
									<div key={"content"}>
										<motion.div
											variants={{
												hidden: {
													scale: 0.9,
													rotate: 20,
													opacity: 0,
												},
												visible: {
													scale: 1,
													rotate: 0,
													opacity: 1,
												},
											}}
											transition={{
												rotate: {
													type: "spring",
												},
												duration: 0.5,
												delay: 1,
											}}
											initial={"hidden"}
											animate={inView ? "visible" : "hidden"}
											style={{
												borderRadius: 150,
												marginLeft: -28,
												marginTop: 12,
												position: "absolute",
												width: 150,
												height: 150,
												zIndex: 1,
												opacity: 0.6,
											}}
										/>
										<ProfileImage
											src={me}
											alt={"Iulian Rotaru"}
											ref={ref}
											variants={{
												hidden: {
													scale: 0.9,
													rotate: 20,
													opacity: 0,
												},
												visible: {
													scale: 1,
													rotate: 0,
													opacity: 1,
												},
											}}
											transition={{
												rotate: {
													type: "spring",
												},
												duration: 0.5,
											}}
											initial={"hidden"}
											animate={inView ? "visible" : "hidden"}
										/>
									</div>
								)}
							</InView>
						</ProfileImageContainer>
						<TextContainer>
							<InView>
								{({ inView, ref }) => (
									<Title
										key='title'
										variants={{
											hidden: {
												x: 20,
												opacity: 0,
											},
											visible: {
												x: 0,
												opacity: 0.7,
											},
										}}
										transition={{
											duration: 0.7,
										}}
										initial={"hidden"}
										animate={inView ? "visible" : "hidden"}
										ref={ref}>
										About me
									</Title>
								)}
							</InView>
							<InView>
								{({ inView, ref }) => (
									<Description
										key='desc'
										variants={{
											hidden: {
												x: 20,
												opacity: 0,
											},
											visible: {
												x: 0,
												opacity: 0.7,
											},
										}}
										transition={{
											duration: 0.7,
											delay: 0.2,
										}}
										initial={"hidden"}
										animate={inView ? "visible" : "hidden"}
										ref={ref}>
										Hello, I am glad to introduce me. I Ashik a young and
										passionate software developer with proven experience based
										in Chennai. I have extensive expertise in looking at problem
										and provide inventive solution. I prefer to be inventor than
										being innovator. I enjoy playing with codes and bugs.
										Shortly after graduating from{" "}
										<SoftBold>Zoho School</SoftBold>, I jumped into the world of
										technology. I look at things around me optimistically.
										Benevolent in nature and easy going. Wanna grab a cup of
										chai..{" "}
										<a href='https://twitter.com/AshikRoyce' target='_blank'>
											<SoftBold>Get in touch</SoftBold>
										</a>
									</Description>
								)}
							</InView>
						</TextContainer>
					</AnimatePresence>
				</PresentationContainer>
			</Element>
		</MobileComponent>
	);
};
