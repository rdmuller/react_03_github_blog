import { GithubInfo } from "../../components/GithubInfo";
import { PostsContainer, PostsContent } from "./styles";
import { SearchForm } from "./SearchForm";
import { Card } from "../../components/Card";
import { useCallback, useEffect, useState } from "react";
import { apiGithub } from "../../lib/axios";
import { __gitUser, __gitRepository } from "../../config";
import { IssueProps } from "../../lib/GitHubIssue";

interface Posts {
	items: IssueProps[];
}

export function Posts() {
	const [posts, setPosts] = useState<Posts>();
	const [postQty, setPostQty] = useState(0);
	const [searchText, setSearchText] = useState("");

	const fetchPosts = useCallback(async (userLogin: string, repository: string, query: string) => {
		const uri = encodeURI(`search/issues?q=${query} repo:${userLogin}/${repository}`);
		const response = await apiGithub.get(uri, {});
		console.log(uri);
		setPosts(response.data);
	}, []);

	useEffect(() => {
		fetchPosts(__gitUser, __gitRepository, searchText);
	}, [fetchPosts, searchText]);

	useEffect(() => {
		if (posts) {
			setPostQty(posts.items.reduce(
				(accumulator) => accumulator + 1, 0
			));
		}
	},[posts]);

	return (
		<div>
			<GithubInfo />
			<PostsContainer>
				<SearchForm QtyPosts={postQty} setSearchText={setSearchText} />
				<PostsContent>
					{posts?.items.map((post) => {
						return(
							<Card key={post.id} title={post.title} body={post.body} created_at={post.created_at} number={post.number}  />
						);
					})}
				</PostsContent>
			</PostsContainer>
		</div>
	);
}