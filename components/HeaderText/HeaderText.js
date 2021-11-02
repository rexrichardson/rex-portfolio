import styled from "styled-components";

const BaseHeaderText = styled.div`
	font-size: ${(props) =>
		props.xs
			? "16px"
			: props.s
			? "24px"
			: props.m
			? "32px"
			: props.l
			? "42px"
			: props.xl
			? "60px"
			: "32px"};

	font-weight: ${(props) =>
		props.light ? "300" : props.semib ? "600" : props.bold ? "700" : "400"};

	text-align: ${(props) => (props.center ? "center" : "left")};

	background-image: ${(props) =>
		props.brand
			? "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
			: "inherit"};

	-webkit-background-clip: text;
	-webkit-text-fill-color: ${(props) =>
		props.brand ? "transparent" : "inherit"};

	display: -webkit-inline-box;

	@media (max-width: 768px) {
		font-size: ${(props) =>
			props.xs
				? "16px"
				: props.s
				? "20px"
				: props.m
				? "28px"
				: props.l
				? "30px"
				: props.xl
				? "48px"
				: "32px"};
	}
`;

const HeaderText = (props) => {
	return (
		<BaseHeaderText
			xs={props.xs}
			s={props.s}
			m={props.m}
			l={props.l}
			xl={props.xl}
			light={props.light}
			semib={props.semib}
			bold={props.bold}
			center={props.center}
			brand={props.brand}
		>
			{props.children}
		</BaseHeaderText>
	);
};

export default HeaderText;
