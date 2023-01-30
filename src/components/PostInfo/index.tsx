import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GithubUserContext } from "../../contexts/GithubUserContext";
import { InfoLabel } from "../InfoLabel";
import { LinksContainer, PostInfoContainer, PostInfoLabelContainer } from "./styles";

interface PostProps {
	title: string;
	created_at: string;
	html_url: string;
	comments: number;
}

export function PostInfo({ title, created_at, html_url, comments }: PostProps) {
	const { user } = useContext(GithubUserContext);
	const createdAtRelativeToNow = formatDistanceToNow(new Date(created_at ? created_at : new Date()), {locale: ptBR, addSuffix: true});
	const commentsText = comments + (comments > 1 ? " comentários" : " comentário");

	return (
		<PostInfoContainer>
			<LinksContainer>
				<Link to="/" className="link"><FontAwesomeIcon icon={faChevronLeft} />Voltar</Link>
				<a href={html_url ? html_url : "" } className="link">Ver no GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
			</LinksContainer>
			<h1>{title}</h1>
			<PostInfoLabelContainer>
				<InfoLabel iconFont={faGithub} text={user.login} />
				<InfoLabel iconFont={faCalendarDay} text={createdAtRelativeToNow} />
				<InfoLabel iconFont={faComment} text={commentsText} />
			</PostInfoLabelContainer>
		</PostInfoContainer>
	);
}