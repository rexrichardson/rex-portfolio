import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";

const Contact = () => {
	return (
		<Container id="about" black>
			<Spacer xl />

			<Text l bold>
				CONTACT
			</Text>
			<Spacer xl />
			<Text m>
				Feel free to drop me an email or reach out to one of my social accounts
			</Text>
			<Spacer xl />
		</Container>
	);
};

export default Contact;
