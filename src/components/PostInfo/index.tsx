import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoLabel } from "../InfoLabel";
import { LinksContainer, PostInfoContainer, PostInfoLabelContainer } from "./styles";

export function PostInfo() {
	return (
		<PostInfoContainer>
			<LinksContainer>
				<a href="/"><FontAwesomeIcon icon={faChevronLeft} />Voltar</a>
				<a href="">Ver no GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
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