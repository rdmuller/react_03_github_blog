import { ThemeProvider } from "styled-components";
import { Posts } from "./pages/Posts";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {	
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Posts />
		</ThemeProvider>
	);
}