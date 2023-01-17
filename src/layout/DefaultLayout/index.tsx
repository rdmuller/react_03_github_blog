import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
	return (
		<div>
			<Header />
			<LayoutContainer>
				<Outlet />
			</LayoutContainer>
		</div>
	);
}