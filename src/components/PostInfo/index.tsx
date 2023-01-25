import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { InfoLabel } from "../InfoLabel";
import { LinksContainer, PostInfoContainer, PostInfoLabelContainer } from "./styles";

export function PostInfo() {
	return (
		<PostInfoContainer>
			<LinksContainer>
				<Link to="/" className="link"><FontAwesomeIcon icon={faChevronLeft} />Voltar</Link>
				<a href="" className="link">Ver no GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
			</LinksContainer>
			<h1>JavaScript data types and data structures</h1>        
			<PostInfoLabelContainer>
				<InfoLabel iconFont={faGithub} text="rdmuller" />
				<InfoLabel iconFont={faCalendarDay} text="Há 1 dia" />
				<InfoLabel iconFont={faComment} text="585 comentários" />
			</PostInfoLabelContainer>
		</PostInfoContainer>
	);
}