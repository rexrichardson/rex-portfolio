import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	background: ${(props) => (props.black ? "black" : "white")};
	color: ${(props) => (props.black ? "white" : "black")};
	padding-left: 5vw;
	padding-right: 5vw;
`;

export default Container;
