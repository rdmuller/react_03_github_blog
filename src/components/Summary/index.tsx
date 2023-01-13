import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export function Summary() {
	return (
		<div>
			<img src="https://avatars.githubusercontent.com/u/46840910?v=4" alt="" />
			<h1>Ronald Müller</h1>
			<a href="">GITHUB</a>
			<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			<p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
			<FontAwesomeIcon icon={faGithub} />
			<span>rdmuller</span>
			<FontAwesomeIcon icon={faBuilding} />
			<span>SilSistemas</span>
			<FontAwesomeIcon icon={faUserGroup} />
			<span>585 seguidores</span>
		</div>
	);
}