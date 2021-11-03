import Text from "../Text/Text";
import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import styles from "./SkillsRow.module.css";
import { SiReact } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { MdOutlineDesignServices } from "react-icons/md";
import HeaderText from "../HeaderText/HeaderText";

const SkillsRow = () => {
	return (
		<Container theme="grey" aos="fade-left">
			<HeaderText s bold>
				My Skills
			</HeaderText>
			<Spacer m />

			<div className={styles.skillsRow}>
				<div className={styles.skillItem}>
					<Text>React.js</Text>
					<Spacer m />
					<SiReact size="40" />
				</div>
				<div className={styles.skillItem}>
					<Text>React Native</Text>
					<Spacer m />
					<SiReact size="40" />
				</div>
				<div className={styles.skillItem}>
					<Text>HTML</Text>
					<Spacer m />
					<AiFillHtml5 size="40" />
				</div>
				<div className={styles.skillItem}>
					<Text>CSS</Text>
					<Spacer m />
					<DiCss3 size="40" />
				</div>
				<div className={styles.skillItem}>
					<Text>JavaScript</Text>
					<Spacer m />
					<DiJavascript1 size="40" />
				</div>
				<div className={styles.skillItem}>
					<Text>UI/UX Design</Text>
					<Spacer m />
					<MdOutlineDesignServices size="40" />
				</div>
			</div>
		</Container>
	);
};

export default SkillsRow;
