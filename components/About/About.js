import Container from "../Container/Container";
import HeaderText from "../HeaderText/HeaderText";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import styles from "./About.module.css";

const About = () => {
	return (
		<Container id="about" theme="white">
			<HeaderText s bold>
				About Me
			</HeaderText>
			<Spacer l />
			<div>
				<Text l>
					My interest in development started at the age of 13, when I created my
					first mobile app, KSI Sounds. This kickstarted my avid interest in
					developing mobile apps which has expanded into other forms such as web
					apps.
					<br />
					<br />I am a recently graduate in Digital Media, where I focused on
					front-end development in the form of mobile apps and web apps.
					Alongside innovative development, I recognise the importance of
					effective and functional design. My knowledgebase in back-end
					development allows fully fledged applicatons.
				</Text>
				<Spacer xxl />

				<div className={styles.aboutFlex}>
					<div>
						<Text m grey>
							Qualifications
						</Text>
						<Spacer m />
						<Text l>
							Graduated from UWE Bristol with a First class honours in Digital
							Media.
							<br />
							<br />
							Modules included: Mobile Apps, AI, User Experience, Interaction
							Design and Internet of Things.
						</Text>
						<Spacer xxl />
						<Text m grey>
							Experience
						</Text>
						<Spacer m />
						<ul className={styles.list}>
							<li>
								<Text l>
									1 year at Discovery as a digital designer and front end web
									developer. Contributed to development of the design system for
									Dplay (now Discovery+).
								</Text>
							</li>{" "}
							<Spacer xs />
							<li>
								<Text l>
									2 years experience running Tex Technologies LTD where I am
									responsible for front end web development.
								</Text>
							</li>
							<Spacer xs />
							<li>
								<Text l>
									Several work experience jobs in the digital industry.
								</Text>
							</li>
							<Spacer m />
						</ul>
						<Text l>
							View in full on my{" "}
							<a href="https://www.linkedin.com/in/rex-richardson/?originalSubdomain=uk">
								LinkedIn
							</a>
							.{" "}
						</Text>
					</div>
					<Spacer m />

					<div className={styles.aboutRight}>
						<img
							src="/assets/about/rexcolor.webp"
							className={styles.rexImg}
						></img>
					</div>
					<Spacer m />
				</div>
				<Spacer xxl />
			</div>

			<Spacer l />
		</Container>
	);
};

export default About;
