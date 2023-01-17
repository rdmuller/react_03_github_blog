import { GithubInfo } from "../../components/GithubInfo";
import { PostsContainer, PostsContent } from "./styles";
import { SearchForm } from "./SearchForm";
import { Card } from "../../components/Card";

export function Posts() {
	return (
		<div>
			<GithubInfo />
			<PostsContainer>
				<SearchForm />
				<PostsContent>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</PostsContent>
			</PostsContainer>
		</div>
	);
}