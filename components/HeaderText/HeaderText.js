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

	font-weight: ${(props) => (props.semib ? "600" : props.bold ? "700" : "400")};

	@media (max-width: 768px) {
		font-size: ${(props) =>
			props.xs
				? "16px"
				: props.s
				? "20px"
				: props.m
				? "28px"
				: props.l
				? "36px"
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
			semib={props.semib}
			bold={props.bold}
		>
			{props.children}
		</BaseHeaderText>
	);
};

export default HeaderText;
