import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Element, scroller } from "react-scroll";
import { MobileComponent } from "./Common";

const HeaderContainer = styled.div`
	height: calc(100vh - 120px);
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Intro = styled(motion.p)`
	margin: 0;
	opacity: 0.6;
	font-size: 18px;
`;
const Name = styled(motion.h1)`
	margin: 0;
	text-transform: uppercase;
	font-size: 34px;
	font-weight: 500;
	opacity: 0.6;
`;

const Subtitle = styled(motion.h2)`
	font-size: 30px;
	font-weight: 500;
	margin: 0;
	opacity: 0.3;
	margin-bottom: 10px;
	margin-left: 10px;
`;
const Description = styled(motion.p)`
	font-size: 18px;
	margin: 0;
	opacity: 0.6;
`;

const SoftBold = styled(motion.span)`
	font-weight: 400;
	opacity: 1;
`;

const SoftBoldAncher = styled(motion.span)`
	font-weight: 400;
	opacity: 1;
	cursor: pointer;
`;

export const MobileHeader = () => {
	return (
		<MobileComponent>
			<Element
				name='header'
				style={{
					height: "100%",
					width: "100%",
				}}>
				<HeaderContainer>
					<div>
						<Intro
							transition={{ duration: 1 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.6 }}>
							Hi, I'm
						</Intro>
						<Name
							transition={{ duration: 2 }}
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}>
							Ashik,
						</Name>
						<Subtitle
							transition={{ duration: 2, delay: 0.5 }}
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 0.6 }}>
							I craft products 🛠
						</Subtitle>
						<Description
							transition={{ duration: 1, delay: 1 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.6 }}>
							Passionate <SoftBold>Product Architect</SoftBold>. I build
							multifaceted technical solution for business objective. I am adept
							in customer research, product architectural design and delivery.{" "}
							<br />
							To explore more..{" "}
							<SoftBoldAncher
								onClick={() => {
									scroller.scrollTo("presentation", {
										duration: 500,
										delay: 0,
										smooth: "easeInOutQuart",
									});
								}}>
								Click here
							</SoftBoldAncher>
						</Description>
					</div>
				</HeaderContainer>
			</Element>
		</MobileComponent>
	);
};
