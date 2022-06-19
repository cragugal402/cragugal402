import React from "react";
import styled from "styled-components";

import zohoscl from './images/zohoschool.jpg'
import zohocorp from './images/zohocorp.jpg'
import facilio from './images/facilio.jpg'
import workativ from './images/workativ.jpg'
import guvi from './images/guvi.jpg'
import rap from './images/rap.png'

const Text = styled.h4`
	margin: 0;
	margin-top: 12px;
	font-weight: 300;
`;

const Bold = styled.span`
	font-weight: 500;
`;

export const experienceFn = () => {
	return {
		skills: {
			//Programming languages
			java: {
				name: "Java",
				key: "java",
				category: "Programming languages",
				url: "https://www.java.com/en/"
			},
			go: {
				name: "Go",
				key: "go",
				category: "Programming languages",
			},
			python: {
				name: "Python",
				key: "python",
				category: "Programming languages",
			},
			swift: {
				name: "Swift",
				key: "swift",
				category: "Programming languages",
			},
			rust: {
				name: "Rust",
				key: "rust",
				category: "Programming languages",
			},

			// Mobile development
			reactnative: {
				name: "React Native",
				key: "reactnative",
				category: "Mobile development",
			},

			//Scripting languages
			javascript: {
				name: "Javascript",
				key: "javascript",
				category: "Scripting languages",
				url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
			},

			// Programming Paradigms
			oop: {
				name: "Object Oriented Programming",
				key: "oop",
				category: "Programming Paradigms",
			},
			fp: {
				name: "Functional Programming",
				key: "fp",
				category: "Programming Paradigms",
			},

			// infrastructure & cloud
			aws: {
				name: "AWS",
				key: "aws",
				category: "Infrastructure & Cloud",
				url: "https://aws.amazon.com/"
			}, 
			azure: {
				name: "Azure",
				key: "azure",
				category: "Infrastructure & Cloud",
				url: "https://azure.microsoft.com/en-in/"
			},
			gcloud: {
				name: "Google cloud",
				key: "gcloud",
				category: "Infrastructure & Cloud",
				url: "https://cloud.google.com/"
			},
			docker: {
				name: "Docker",
				key: "docker",
				category: "Infrastructure & Cloud",
				url: "https://www.docker.com/"
			},
			kubernetes: {
				name: "Kubernetes",
				key: "kubernetes",
				category: "Infrastructure & Cloud",
				url: "https://kubernetes.io/"
			},
			cicd: {
				name: "CI / CD",
				key: "cicd",
				category: "Infrastructure & Cloud",
				url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd"
			},

			//javascript fluency
			nodejs: {
				name: "Node JS",
				key: "nodejs",
				category: "Javascript Fluency",
				url: "https://nodejs.org/en/"
			},
			npm: {
				name: "NPM",
				key: "npm",
				category: "Javascript Fluency",
			},
			yarn: {
				name: "Yarn",
				key: "yarn",
				category: "Javascript Fluency",
			},
			react: {
				name: "React",
				key: "react",
				category: "Javascript Fluency",
			},
			hooks: {
				name: "React Hooks",
				key: "hooks",
				category: "Javascript Fluency",
			},
			redux: {
				name: "Redux",
				key: "redux",
				category: "Javascript Fluency",
			},
			flux: {
				name: "Flux",
				key: "flux",
				category: "Javascript Fluency",
			},
			typescript: {
				name: "Typescript",
				key: "typescript",
				category: "Javascript Fluency",
			}, 
			storybook: {
				name: "Storybook",
				key: "storybook",
				category: "Javascript Fluency",
			},
			jest: {
				name: "Jest",
				key: "jest",
				category: "Javascript Fluency",
			}, 
			enzyme: {
				name: "Enzyme",
				key: "enzyme",
				category: "Javascript Fluency",
			},
			reacttestinglibrary: {
				name: "React Testing Library",
				key: "reacttestinglibrary",
				category: "Javascript Fluency",
			},
			jstestinglibrary: {
				name: "Javascript Testing Library",
				key: "jstestinglibrary",
				category: "Javascript Fluency",
			},
		},
		challenges: [
			{
				name: "RAP Ventures",
				image: rap,
				subtitle: "Principal Product Manager",
				description: <Text>
					Should you have any questions and to know more...Get in touch! 
				</Text>,
				start: new Date(Date.parse("01 Feb 2021")),
				link: "https://rapidautomation.ai/",
				theme: "#fff",
				light: true,
				skills: [],
			},
			{
				name: "RAP Ventures",
				image: rap,
				subtitle: "Engineering Manager",
				description: <Text>
					Should you have any questions and to know more...Get in touch! 
				</Text>,
				start: new Date(Date.parse("01 April 2021")),
				end: new Date(Date.parse("31 Jan 2021")),
				link: "https://rapidautomation.ai/",
				theme: "#fff",
				light: true,
				skills: [],
			},
			{
				name: "GUVI",
				image: guvi,
				subtitle: "Lead Software Engineer",
				description: <Text>
					If you could recollect, I stated that I believe in learning and let learn.Out of my interest joined in Guvi as a mentor to spread knowledge across people.
					<br />	<br />
					I was a part time mentor in GUVI training students on emerging technologies.GUVI an educational platform offered me an opportunity to develop customised products meeting educational needs. I had a chance to meet young aspiring minds who would be tech giants in near future.
					<br />	<br />
					I have been handling the mentor team, Course review team, Placement team. I single handedly crafted Zenclass, a product that manages curriculum of students and tracks their performance.
					<br />	<br />
					
				</Text>,
				start: new Date(Date.parse("27 March 2020")),
				end: new Date(Date.parse("13 March 2021")),
				link: "https://guvi.in",
				theme: "#fff",
				light: true,
				skills: ["typescript"],
			},
			{
				name: "Workativ",
				image: workativ,
				subtitle: "Development Engineer",
				description: (
					<Text>
						The Career changing phase.
						<br />	<br />
						Workativ, marks a drastic change in my career and transformed me from developer to product person.
						<br />	<br />
						Entered in to Workatvi's small nest as first single technical engineer.Workativ assistant, a workplace support automation SaaS platform designed to transform the way companies provide IT & HR support to employees.
						<br />	<br />
						The primary goal of the product is to  reduce helpdesk and IT & HR support costs, automation capabilities to help employees self resolve repetitive IT and HR issues and service requests autonomously without the need to contact Helpdesk or HR teams.
						<br />	<br />
						Workativ is an emerging start up where we were only 5 employees in total and I was a single technical engineer.
						<br />	<br />
						I started experimenting with getting only 5-6 hours of sleep so that I could get better knowledge of the product.I built each and every piece of core technical team providing an end to end solution. I also played an extensive role in recruiting team,product road map design. This place showed me how the business runs,market demands, product lifecycle and accelerated  to craft products on my own.
					</Text>
				),
				start: new Date(Date.parse("18 Jul 2018")),
				end: new Date(Date.parse("26 March 2020")),
				link: "https://workativ.com",
				theme: "#fff",
				light: true,
				skills: [],
			},
			{
				name: "Facilio",
				image: facilio,
				subtitle: "Software Engineer",
				description: (
					<Text>
						As quotes say, Change is constant.I shifted my career from Zoho to Facilio. I took up the responsibility of full stack engineer and developing backend API's ,frontend system using Vue js for Facilio products. The system was designed having user experience as target.Facilio products visualize the power/energy consumed in charts for analysis, Also has a live tracking system.I travelled along with Facilio only for 5 months, Because destiny had a bigger milestone in my career to explore the different version of me. Stay tuned for the most interesting phase of my career.Despite of short duration i thoroughly enjoyed working with Facilio.
					</Text>
				),
				start: new Date(Date.parse("01 March 2018")),
				end: new Date(Date.parse("17 Jul 2018")),
				link: "https://facilio.com/",
				theme: "#fff",
				light: true,
				skills: [],
			},
			{
				name: "Zoho Corp",
				image: zohocorp,
				subtitle: "Associate Software Engineer",
				description: (
					<Text>
						Continued from Zoho university,
						<br />	<br />
						Well, After skilling up from Zoho University stepped in to real time projects. The path to developer starts here.
						<br />	<br />
						I was ready for my first project Zoho people, A time tracking application for Zoho employees. Production source code seemed to be Greek and Latin for newbie me and first two weeks were pretty chaotic. I do things without exploring on how it happened and assume to be magical. Thankfully I had good mentors in team who motivated me to overcome fear of failures and push myself beyond extent. I poured my ideas in designing and development using Java and JSP. In short span collaborated with product manger to design user flow, UI/UX design. I look back and cherish initial days memories.
						<br />	<br />
						After five months of hardship, Zoho people evolved out to be the most entailed time tracking app.
						<br />	<br />
						As we heard, The life is so magical and future is unforeseeable. The next challenge awaits for sculpting me in different dimension
						<br />	<br />
						Few days later, I was assigned to migrate Zoho desk, A substantial ticket management tool from JSP to React application.
						<br />	<br />
						There were times I wished to know on React and the documentation petrified me. I used to thrive in self paced conditions and started experimenting React in Zoho desk.
						<br />	<br />
						This enlightened me that a good developer is not who writes million lines of code but should be able to effectively maintain the performance.Collaborated in a team focused environment to achieve performance improvement to reduce initial loading page from 3.6 seconds to 2.5 seconds. I still thank each and everyone who stood by beside me.

						<br />	<br />
						Struggle did not stop here.. To be continued!
					</Text>
				),
				start: new Date(Date.parse("01 Dec 2016")),
				end: new Date(Date.parse("28 Feb 2018")),
				link: "https://zoho.com/", 
				theme: "#fff",
				light: true,
				skills: [],
			},
			{
				name: "Zoho University",
				image: zohoscl,
				subtitle: "Software Development Intern",
				description: (
					<Text>
						What I cracked?
						<br />	<br />
						The journey of my dream from scratch without a bachelor degree kickstarted at Zoho university. Just after graduating from high school, jumped in at ZU where i quickly grasped underlying basics of web development. HTML, CSS, Bootstrap, Javascript, Jquery, Java, MySQL, PostgreSQL, HTTP protocol.
						<br />	<br />
						I have to say, I was thrilled to get my hands dirty in cloning UI of Book my Show, Amazon,Reddit as mini projects exclusively with HTML and Bootstrap. I believe in "learn and let learn" and spread the acquired knowledge to my fellow buddies.<br />
						Zoho university flipped a neophyte into a moderate coder. Learning is a lifelong process, No end. To be continued!
					</Text>
				),
				start: new Date(Date.parse("15 Jun 2016")),
				end: new Date(Date.parse("30 Nov 2016")),
				link: "https://www.zohoschools.com/",
				theme: "#fff",
				light: true,
				skills: [
					"java",
					"javascript"
				],
			},
		],
		selectChallenge: () => { },
		selectedChallenge: null,
		selectSkill: () => { },
		selectedSkill: null,
	};
};
