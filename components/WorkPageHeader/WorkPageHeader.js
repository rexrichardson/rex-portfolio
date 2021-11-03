import Text from "../Text/Text";
import Tag from "../Tag/Tag";
import Spacer from "../Spacer/Spacer";
import styles from "./WorkPageHeader.module.css";
import HeaderText from "../HeaderText/HeaderText";
import Toggle from "../Toggle/Toggle";

const WorkPageHeader = ({ tags, title, theme, handleChange }) => {
	console.log(tags);
	return (
		<div>
			<div className={styles.workPageHeader}>
				<div>
					{tags.map((tag, index) => (
						<Tag key={index} value={tag} theme={theme} />
					))}
				</div>
				<Toggle handleChange={handleChange}></Toggle>
			</div>
			<Spacer m />

			<HeaderText xl bold>
				{title}
			</HeaderText>
		</div>
	);
};

export default WorkPageHeader;
