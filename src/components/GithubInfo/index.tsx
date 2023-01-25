import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GithubInfoContainer, GithubInfoDescription, GithubInfoLabelContainer, GithubInfoTitleContent } from "./styles";
import { InfoLabel } from "../InfoLabel";
import { useContext } from "react";
import { GithubUserContext } from "../../contexts/GithubUserContext";

export function GithubInfo() {
	const { user } = useContext(GithubUserContext);

	return (
		<GithubInfoContainer>
			<img src={user.avatar_url} alt="" />
			<div>
				<GithubInfoTitleContent>
					<h1>{user.name}</h1>
					<div>
						<a href="" className="link">GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
					</div>
				</GithubInfoTitleContent>
				<GithubInfoDescription>
					<p>{user.bio}</p>
				</GithubInfoDescription>
				<GithubInfoLabelContainer>
					<InfoLabel iconFont={faGithub} text={user.login} />
					<InfoLabel iconFont={faBuilding} text={user.company} />
					<InfoLabel iconFont={faUserGroup} text={`${user.followers} seguidores`} />
				</GithubInfoLabelContainer>
			</div>
		</GithubInfoContainer>
	);
}