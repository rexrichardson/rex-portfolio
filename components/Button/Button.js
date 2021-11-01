import Text from "../Text/Text";
import styles from "./Button.module.css";

const Button = ({ children }) => {
	return (
		<div className={styles.button}>
			<Text>{children}</Text>
		</div>
	);
};

export default Button;
