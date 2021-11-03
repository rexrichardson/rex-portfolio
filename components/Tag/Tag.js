import styled from "styled-components";

const BaseTag = styled.div`
	background: ${(props) =>
		props.theme === "black"
			? "white"
			: props.theme === "grey"
			? "#00000010"
			: "black"};
	border-radius: 14px;
	color: ${(props) => (props.theme === "black" ? "black" : "white")};
	padding: 6px 10px 6px 10px;
	display: inline-flex;
	margin-right: 8px;
	height: 100%;
	font-weight: 300;
	font-size: 14px;
`;

const Tag = ({ theme, value }) => {
	return <BaseTag theme={theme}>{value}</BaseTag>;
};

export default Tag;
