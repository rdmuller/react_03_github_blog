import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoLabelContainer } from "./styles";

interface InfoLabelProps {
    text: string;
    iconFont: IconProp;
}
export function InfoLabel({ text, iconFont }: InfoLabelProps) {
	return (
		<InfoLabelContainer>
			<FontAwesomeIcon icon={iconFont} />
			<span>{text}</span>
		</InfoLabelContainer>
	);
}