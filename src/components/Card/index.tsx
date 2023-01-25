import { CardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

interface CardProps {
	id: number;
	body: string;
	title: string;
	created_at: string;
}

export function Card ({id, title, body, created_at}:CardProps) {
	const createdAtRelativeToNow = formatDistanceToNow(new Date(created_at), {locale: ptBR, addSuffix: true});
	const navigate = useNavigate();

	function redirectToPost() {
		navigate(`post/${id}`);
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