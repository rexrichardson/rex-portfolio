import Container from "../Container/Container";
import HeaderText from "../HeaderText/HeaderText";
import ScrollDown from "../ScrollDown/ScrollDown";
import Spacer from "../Spacer/Spacer";
import Styles from "./Hero.module.css";

const Hero = () => {
	return (
		<Container>
			<div className={Styles.container}>
				<HeaderText l center light>
					Hi, I'm{" "}
					<HeaderText l bold brand>
						Rex Richardson.
					</HeaderText>{" "}
					A developer with a passion for design, specialising in React.js and
					React Native.
				</HeaderText>
				<Spacer l />
				<ScrollDown to="work" />
			</div>
		</Container>
	);
};

export default Hero;
