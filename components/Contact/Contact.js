import ContactButton from "../ContactButton/ContactButton";
import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<Container id="about" black>
			<div className={styles.contact}>
				<Spacer xl />
				<Text l bold>
					CONTACT
				</Text>
				<Spacer xl />
				<Text m>
					Feel free to drop me an email or reach out to one of my social
					accounts
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
				<Spacer xl />
			</div>
		</Container>
	);
};

export default Contact;
