import React, { useState, useEffect, useMemo, useCallback } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { scroller } from "react-scroll";

import { Experience } from "./Context";
import { experienceFn } from "./Experience";

import { Header } from "./Components/Header";
import { Presentation } from "./Components/Presentation";
import { Skills } from "./Components/Skills";
import { LeftMenu } from "./Components/LeftMenu";
import { RightMenu } from "./Components/RightMenu";

import { MobileHeader } from "./Components/MobileHeader";
import { MobilePresentation } from "./Components/MobilePresentation";
import { MobileSkills } from "./Components/MobileSkills";
import { MobileTopMenu } from "./Components/MobileTopMenu";
import { MobileBottomMenu } from "./Components/MobileBottomMenu";

export const getSelection = (skillsAndChallenges) => {
	const url = new URLSearchParams(window.location.search);
	const selection = url.get("selection");
	if (selection) {
		if (selection.indexOf("skill@") === 0) {
			const skillName = selection.slice("skill@".length);

			if (skillsAndChallenges.skills[skillName]) {
				return ["skill", skillName];
			}
		} else if (selection.indexOf("challenge@") === 0) {
			const challengeIdx = parseInt(selection.slice("challenge@".length), 10);

			if (skillsAndChallenges.challenges[challengeIdx]) {
				return ["challenge", challengeIdx];
			}
		}
	}
	return [null, null];
};

const App = () => {
	const skillsAndChallenges = useMemo(() => experienceFn(), []);

	const querySelection = useMemo(() => getSelection(skillsAndChallenges), [
		skillsAndChallenges,
	]);

	const [currentPage, _setCurrentPage] = useState(0);

	const [selectedChallenge, _setSelectedChallenge] = useState(
		querySelection[0] === "challenge" ? querySelection[1] : null,
	);

	const [selectedSkill, _setSelectedSkill] = useState(
		querySelection[0] === "skill" ? querySelection[1] : null,
	);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-device-width: 1224px)",
	});

	useEffect(() => {
		if (querySelection[0] !== null) {
			setTimeout(() => {
				scroller.scrollTo(
					isDesktopOrLaptop ? "skills" : `${querySelection[0]}s`,
					{
						duration: 500,
						delay: 0,
						smooth: "easeInOutQuart",
					},
				);
			}, 500);
		}
	}, [querySelection, isDesktopOrLaptop]);

	const wrappedSetSelectedChallenge = useCallback((idx) => {
		if (idx === null) {
			const url = new URLSearchParams();

			url.delete("selection");

			const searchParams = url.toString();

			const newUrl =
				window.location.origin +
				window.location.pathname +
				(searchParams !== "" ? "?" : "") +
				searchParams;

			window.history.pushState({ path: newUrl }, "", newUrl);

			_setSelectedChallenge(null);
		} else {
			const url = new URLSearchParams();

			url.set("selection", `challenge@${idx}`);

			const searchParams = url.toString();
			const newUrl =
				window.location.origin +
				window.location.pathname +
				(searchParams !== "" ? "?" : "") +
				searchParams;

			window.history.pushState({ path: newUrl }, "", newUrl);

			_setSelectedChallenge(idx);
		}
	}, []);

	const wrappedSetSelectedSkill = useCallback((name) => {
		if (name === null) {
			const url = new URLSearchParams();

			url.delete("selection");

			const searchParams = url.toString();
			const newUrl =
				window.location.origin +
				window.location.pathname +
				(searchParams !== "" ? "?" : "") +
				searchParams;

			window.history.pushState({ path: newUrl }, "", newUrl);

			_setSelectedSkill(null);
		} else {
			const url = new URLSearchParams();

			url.set("selection", `skill@${name}`);

			const searchParams = url.toString();
			const newUrl =
				window.location.origin +
				window.location.pathname +
				(searchParams !== "" ? "?" : "") +
				searchParams;

			window.history.pushState({ path: newUrl }, "", newUrl);

			_setSelectedSkill(name);
		}
	}, []);

	const setSelectedChallenge = (challenge) => {
		_setSelectedSkill(null);
		if (challenge === null) {
			wrappedSetSelectedChallenge(null);
		} else {
			wrappedSetSelectedChallenge(
				skillsAndChallenges.challenges.findIndex(
					(chall) => chall.name === challenge?.name,
				),
			);
		}
	};

	const setSelectedSkill = (skill) => {
		_setSelectedChallenge(null);
		wrappedSetSelectedSkill(skill?.key || null);
	};

	const setCurrentPage = (idx) => {
		if (idx < 0) {
			_setCurrentPage(0);
		} else if (idx > 2) {
			_setCurrentPage(2);
		} else {
			_setCurrentPage(idx);
		}
	};

	useEffect(() => {
		console.log("What are you looking for 🤔 ?");
	}, []);

	return (
		<>
			<Experience.Provider
				value={{
					...skillsAndChallenges,
					selectedChallenge:
						selectedChallenge !== null
							? skillsAndChallenges.challenges[selectedChallenge]
							: null,
					selectChallenge: setSelectedChallenge,
					selectedSkill:
						selectedSkill !== null
							? skillsAndChallenges.skills[selectedSkill]
							: null,
					selectSkill: setSelectedSkill,
				}}>
				<MediaQuery minDeviceWidth={1224}>
					<Header />
					<Presentation />
					<Skills />
					<LeftMenu />
					<RightMenu idx={currentPage} onChange={setCurrentPage} />
				</MediaQuery>
				<MediaQuery maxDeviceWidth={1224}>
					<MobileHeader />
					<MobilePresentation />
					<MobileSkills />
					{/* <MobileTopMenu /> */}
					<MobileBottomMenu />
				</MediaQuery>
			</Experience.Provider>
		</>
	);
};

export default App;
