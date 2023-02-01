import { CardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { IssueProps } from "../../lib/GitHubIssue";

interface CardProps {
	title: string;
	body: string;
	created_at: string;
	number: number;
}

export function Card ({title, body, created_at, number}:CardProps) {
	const createdAtRelativeToNow = formatDistanceToNow(new Date(created_at ? created_at : new Date()), {locale: ptBR, addSuffix: true});
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