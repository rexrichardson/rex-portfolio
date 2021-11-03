import styled from "styled-components";
import "aos/dist/aos.css";
import Spacer from "../Spacer/Spacer";

const BaseContainer = styled.div`
	width: 100%;
	background: ${(props) =>
		props.theme === "black"
			? "black"
			: props.theme === "grey"
			? "#00000010"
			: "white"};
	color: ${(props) => (props.theme === "black" ? "white" : "black")};
	padding-left: 5vw;
	padding-right: 5vw;
	min-height: ${(props) => (props.fullHeight ? "100vh" : "auto")};
	position: relative;
`;

const Container = ({
	theme,
	className,
	children,
	id,
	fullHeight,
	grey,
	aos,
}) => {
	return (
		<BaseContainer
			className={className}
			id={id}
			fullHeight={fullHeight}
			grey={grey}
			theme={theme}
		>
			<div
				data-aos={aos ? aos : "fade-up"}
				data-aos-duration="500"
				data-aos-offset="300"
			>
				<Spacer xl />
				{children}
				<Spacer xxl />
			</div>
		</BaseContainer>
	);
};

export default Container;
