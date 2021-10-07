import Text from "../Text/Text";
import Tag from "../Tag/Tag";
import Spacer from "../Spacer/Spacer";
import styles from "./WorkpageHeader.module.css";
import HeaderText from "../HeaderText/HeaderText";

const WorkPageHeader = ({ tags, title }) => {
	console.log(tags);
	return (
		<div>
			<div className={styles.workPageHeader}>
				{tags.map((tag) => (
					<Tag value={tag} />
				))}
			</div>
			<Spacer m />

			<HeaderText xl bold>
				{title}
			</HeaderText>
		</div>
	);
};

export default WorkPageHeader;
