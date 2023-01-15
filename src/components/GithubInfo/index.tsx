import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GithubInfoContainer, GithubInfoDescription, GithubInfoLabelContainer, GithubInfoTitleContent } from "./styles";
import { InfoLabel } from "../InfoLabel";

export function GithubInfo() {
	return (
		<GithubInfoContainer>
			<img src="https://avatars.githubusercontent.com/u/46840910?v=4" alt="" />
			<div>
				<GithubInfoTitleContent>
					<h1>Ronald Müller</h1>
					<div>
						<a href="">GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
					</div>
				</GithubInfoTitleContent>
				<GithubInfoDescription>
					<p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
				</GithubInfoDescription>
				<GithubInfoLabelContainer>
					<InfoLabel iconFont={faGithub} text="rdmuller" />
					<InfoLabel iconFont={faBuilding} text="SilSistemas" />
					<InfoLabel iconFont={faUserGroup} text="585 seguidores" />
				</GithubInfoLabelContainer>
			</div>
		</GithubInfoContainer>
	);
}