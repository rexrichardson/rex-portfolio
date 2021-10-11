import styled from "styled-components";

const BaseContainer = styled.div`
	width: 100%;
	background: ${(props) => (props.black ? "black" : "white")};
	color: ${(props) => (props.black ? "white" : "black")};
	padding-left: 5vw;
	padding-right: 5vw;
`;

const Container = ({ black, className, children, id }) => {
	return (
		<BaseContainer black={black} className={className} id={id}>
			{children}
		</BaseContainer>
	);
};

export default Container;
