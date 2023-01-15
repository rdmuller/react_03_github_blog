import { Header } from "../../components/Header";
import { GithubInfo } from "../../components/GithubInfo";
import { PostsContainer } from "./styles";
import { SearchForm } from "./SearchForm";

export function Posts() {
	return (
		<div>
			<Header />
			<GithubInfo />
			<PostsContainer>
				<SearchForm />
				Posts
			</PostsContainer>
		</div>
	);
}