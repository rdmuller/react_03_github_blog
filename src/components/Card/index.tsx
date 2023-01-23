import { CardContainer } from "./styles";

interface CardProps {
	id: number;
	body: string;
	title: string;
	created_at?: string;
}

export function Card ({id, title, body}:CardProps) {
	return (
		<CardContainer>
			<div>
				<h2>{title}</h2>
				<span>Há 1 dia</span>
			</div>
			<p>{body}</p>
		</CardContainer>
	);
}