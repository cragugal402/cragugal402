import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import App from "./App";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        background: transparent;
    }
    html {
        background-color: ${(props) => props.theme.backgroundColor};
        font-family: 'Heebo', sans-serif;
    }
    div {
        color: ${(props) => props.theme.textColor};
        font-weight: 200;
    }
    h1 {
        color: ${(props) => props.theme.textColor};
        font-weight: 200;
    }
    h2 {
        color: ${(props) => props.theme.textColor};
        font-weight: 200;
    }
    h3 {
        color: ${(props) => props.theme.textColor};
        font-weight: 200;
    }
    h4 {
        color: ${(props) => props.theme.textColor};
        font-weight: 200;
    }
    p {
        color: ${(props) => props.theme.textColor};
        font-weight: 200;
    }
    span {
        color: ${(props) => props.theme.textColor};
        font-weight: 200;
    }
    a {
        text-decoration: none;
    }
`;

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider
			theme={{
				backgroundColor: "#101014",
				textColor: "#ffffff",
				tagColor: "#808090",
				componentColor: "#252530",
				componentColorLight: "#454550",
				backdropFallbackColor: "#141418",
			}}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
