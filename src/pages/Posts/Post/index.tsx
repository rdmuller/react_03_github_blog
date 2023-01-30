import { useCallback, useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { PostInfo } from "../../../components/PostInfo";
import { __gitRepository, __gitUser } from "../../../config";
import { apiGithub } from "../../../lib/axios";
import { IssueProps } from "../../../lib/GitHubIssue";
import { PostContainer } from "./styles";

export function Post() {
	const { number } = useParams();
	const [post, setPost] = useState<IssueProps>({title:"", number: 0, id: 0, html_url: "", created_at: "", comments: 0, body: ""});

	const fetchPost = useCallback(async (userLogin: string, repository: string, number?: string) => {
		const url = `repos/${userLogin}/${repository}/issues/${number}`;
		const response = await apiGithub.get(url, {});		
		setPost(response.data);		
	}, []);

	useEffect(() => {
		fetchPost(__gitUser, __gitRepository, number);
	}, [fetchPost, number]);


	return (
		<div>			
			<PostInfo title={post.title} html_url={post.html_url} created_at={post.created_at} comments={post.comments} />
			<PostContainer>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
			</PostContainer>
		</div>
	);
}