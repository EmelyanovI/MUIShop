import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./index.css";
import App from "./components/App";

import "./components/i18n/i18n";

const theme = createTheme({});

ReactDOM.render(
	<React.StrictMode> 
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
