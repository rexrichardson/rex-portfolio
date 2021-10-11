import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";

const About = () => {
	return (
		<div className="about" id="about">
			<Container white>
				<Spacer xl />

				<Text l bold>
					ABOUT ME
				</Text>
				<Spacer xl />
				<div>
					I&apos;m a developer with a passion for mobile apps and a strong eye
					for design. <br />
					QUALIFICATIONS <br />
					Graduated from UWE Bristol with a First class honours in Digital
					Media.
					<br />
					EXPERIENCE
					<br />I spent a year at Dicovery as a digital designer and front end
					web developer. 2 years experience running Tex Technologies LTD where I
					am responsible for front end web development.
					<br />
					SKILLS
					<br />
					HTML CSS REACT REACT NATIVE JAVASCRIPT UX/UI DESIGN
					<br />
					SOME EXPERIENCE WITH <br />
					SQL PYTHON SWIFT-UI FLASK
				</div>
			</Container>
		</div>
	);
};

export default About;
