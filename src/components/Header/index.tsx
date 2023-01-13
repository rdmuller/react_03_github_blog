import logo from "../../assets/logo.svg";
import background from "../../assets/header.svg";
import { HeaderContainer, ImgLogo } from "./styles";

export function Header() {
	return (
		<HeaderContainer backgroundImage={background}>
			<ImgLogo src={logo} />
		</HeaderContainer>
	);
}