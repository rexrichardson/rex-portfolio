import ContactButton from "../ContactButton/ContactButton";
import Container from "../Container/Container";
import HeaderText from "../HeaderText/HeaderText";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<Container id="contact" aos="zoom-in">
			<div className={styles.contact}>
				<Spacer xxl />
				<HeaderText s bold>
					Interested in hiring me?
				</HeaderText>
				<Spacer xl />
				<div className={styles.content}>
					<div className={styles.bottomContent}>
						<Text m>
							I{"'"} love to hear from you. Use a method below to reach out.
						</Text>
						<Spacer xl />
						<div className={styles.contactButtons}>
							<ContactButton
								type="Email"
								href="mailto: rex.richardson@me.com"
							></ContactButton>
							<Spacer m />
							<ContactButton
								type="Linkedin"
								href="https://www.linkedin.com/in/rex-richardson/"
							></ContactButton>
						</div>
					</div>
				</div>

				<Spacer xxl />
				<Spacer m />
			</div>
		</Container>
	);
};

export default Contact;
