import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const element: string = "root"; //the html element that makes website work
const rootElement: HTMLElement | null = document.getElementById(element);

if (rootElement == null) console.error(`{${element}} not found`);

ReactDOM.createRoot(rootElement ?? document.createElement(element)).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
