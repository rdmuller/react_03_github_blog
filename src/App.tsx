import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GithubUserProvider } from "./contexts/GithubUserContext";

export function App() {	
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<BrowserRouter>
				<GithubUserProvider>
					<Router />
				</GithubUserProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}