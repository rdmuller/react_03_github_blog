import { GithubInfo } from "../../components/GithubInfo";
import { PostsContainer, PostsContent } from "./styles";
import { SearchForm } from "./SearchForm";
import { Card } from "../../components/Card";
import { useCallback, useEffect, useState } from "react";
import { apiGithub } from "../../lib/axios";
import { __gitUser, __gitRepository } from "../../config";

interface Post {
	id: number;
	body: string;
	title: string;
	created_at: string;
}

interface Posts {
	items: Post[];
}

export function Posts() {
	const [posts, setPosts] = useState<Posts>();

	const fetchPosts = useCallback(async (userLogin: string, repository: string) => {
		const response = await apiGithub.get(`search/issues?q= repo:${userLogin}/${repository}`, {});
		setPosts(response.data);
	}, []);

	useEffect(() => {
		fetchPosts(__gitUser, __gitRepository);
	}, [fetchPosts]);

	return (
		<div>
			<GithubInfo />
			<PostsContainer>
				<SearchForm />
				<PostsContent>
					{posts?.items.map((post) => {
						return(
							<Card key={post.id} id={post.id} title={post.title} body={post.body} created_at={post.created_at} />
						);
					})}
				</PostsContent>
			</PostsContainer>
		</div>
	);
}