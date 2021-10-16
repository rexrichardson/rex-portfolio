import styles from "./ContactButton.module.css";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import Spacer from "../Spacer/Spacer";

const ContactButton = ({ type, href }) => {
	return (
		<a className={styles.contactButton} href={href}>
			{type === "Email" ? (
				<AiOutlineMail size={24} />
			) : (
				<AiFillLinkedin size={24} />
			)}
			<Spacer xxs />
			{type}
		</a>
	);
};

export default ContactButton;
