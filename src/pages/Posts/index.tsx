import { GithubInfo } from "../../components/GithubInfo";
import { PostsContainer, PostsContent } from "./styles";
import { SearchForm } from "./SearchForm";
import { Card } from "../../components/Card";
import { useState } from "react";

interface Post {
	id: number;
	body: string;
	title: string;
	created_at?: string;
}

export function Posts() {
	const [posts, setPosts] = useState<Post[]>([{title: "teste1", body: "testando o corpo", id: 1111111},{title:"teste2", body: "testando o corpo 2", id: 1111112}]);

	return (
		<div>
			<GithubInfo />
			<PostsContainer>
				<SearchForm />
				<PostsContent>
					{posts.map((post) => {
						return(
							<Card key={post.id} id={post.id} title={post.title} body={post.body} />
						);
					})}
				</PostsContent>
			</PostsContainer>
		</div>
	);
}