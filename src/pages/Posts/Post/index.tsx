import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostInfo } from "../../../components/PostInfo";
import { __gitRepository, __gitUser } from "../../../config";
import { apiGithub } from "../../../lib/axios";
import { IssueProps } from "../../../lib/GitHubIssue";
import { PostContainer } from "./styles";

export function Post() {
	const { number } = useParams();
	const [post, setPost] = useState<IssueProps>();

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
			<PostInfo />
			<PostContainer>
				{post?.body}
			</PostContainer>
		</div>
	);
}