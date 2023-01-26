import { CardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { IssueProps } from "../../lib/GitHubIssue";

export function Card ({id, title, body, created_at, number}:IssueProps) {
	const createdAtRelativeToNow = formatDistanceToNow(new Date(created_at ? created_at : new Date().getDate()), {locale: ptBR, addSuffix: true});
	const navigate = useNavigate();

	function redirectToPost() {
		navigate(`post/${number}`);
	}

	return (
		<CardContainer onClick={redirectToPost}>
			<div>
				<h2>{title}</h2>
				<span>{createdAtRelativeToNow}</span>
			</div>
			<p>{body}</p>
		</CardContainer>
	);
}