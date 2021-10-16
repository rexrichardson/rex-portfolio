import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import styles from "./About.module.css";

const About = () => {
	return (
		<Container id="about" white>
			<Spacer xl />

			<Text l bold>
				ABOUT ME
			</Text>
			<Spacer s />
			<div>
				<Text l>
					I&apos;m a developer with a passion for mobile apps and a strong eye
					for design.
				</Text>
				<Spacer l />

				<div className={styles.aboutFlex}>
					<div>
						<Text m bold>
							Qualifications
						</Text>
						<Spacer s />
						<Text m>
							Graduated from UWE Bristol with a First class honours in Digital
							Media.
						</Text>
						<Spacer s />
						<Text m bold>
							Experience
						</Text>
						<Spacer s />
						<Text m>
							I spent a year at Dicovery as a digital designer and front end web
							developer. 2 years experience running Tex Technologies LTD where I
							am responsible for front end web development. View in full on my{" "}
							<a href="https://www.linkedin.com/in/rex-richardson/?originalSubdomain=uk">
								LinkedIn
							</a>
							.
						</Text>

						<Spacer s />
						<Text m bold>
							Skills
						</Text>
						<Spacer s />
						<Text m>
							HTML - CSS - React.js - React Native - JavaScript - UX/UI Design
						</Text>

						<Spacer s />
						<Text m bold>
							Experience with
						</Text>
						<Spacer s />
						<Text m>SQL - Python - Swift-UI - Flask</Text>
					</div>
					<div className={styles.aboutRight}>
						<img
							src="/assets/about/rexcolor.webp"
							className={styles.rexImg}
						></img>
					</div>
				</div>
				<Spacer l />
			</div>
		</Container>
	);
};

export default About;
