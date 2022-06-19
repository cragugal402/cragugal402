import React from "react";

// interface Skill {
// 	name: string;
// 	key: string;
// 	subtitle?: string;
// 	description: JSX.Element | string;
// 	category: string;
// 	link?: string;
// 	image: string;
// 	level: number;
// 	theme: string;
// 	createdBy?: string;
// 	usedBy?: string[];
// 	light?: boolean;
// }

// interface Challenge {
// 	start: Date;
// 	end?: Date;
// 	name: string;
// 	description: JSX.Element | string;
// 	subtitle: string;
// 	link?: string;
// 	skills: string[];
// 	image: string;
// 	theme: string;
// 	light?: boolean;
// }

// interface SkillsContextState {
// 	skills: { [key: string]: Skill };
// 	challenges: Challenge[];
// 	selectedChallenge: Challenge | null;
// 	selectChallenge: (challenge: Challenge | null) => void;
// 	selectedSkill: Skill | null;
// 	selectSkill: (skill: Skill | null) => void;
// }

export const Experience = React.createContext({
	skills: {},
	challenges: [],
	selectedChallenge: null,
	selectChallenge: () => {},
	selectedSkill: null,
	selectSkill: () => {},
});
