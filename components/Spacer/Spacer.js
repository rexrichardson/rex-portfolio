import styled from "styled-components";

const Spacer = styled.div`
	width: ${(props) =>
		props.xxs
			? "4px"
			: props.xs
			? "8px"
			: props.s
			? "12px"
			: props.m
			? "16px"
			: props.l
			? "24px"
			: props.xl
			? "30px"
			: props.xxl
			? "40px"
			: "20px"};
	height: ${(props) =>
		props.xxs
			? "4px"
			: props.xs
			? "8px"
			: props.s
			? "12px"
			: props.m
			? "16px"
			: props.l
			? "24px"
			: props.xl
			? "30px"
			: props.xxl
			? "40px"
			: "20px"};
`;

export default Spacer;
