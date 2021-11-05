import styled from "styled-components";

const BaseToggle = styled.input`
	display: none;
	&:checked + label {
		background-color: #000;
		&:before {
			transform: translateX(45px);
			background-color: #fff;
		}
	}
`;

const BaseLabel = styled.label`
	display: flex;
	width: 90px;
	height: 45px;
	border-radius: 99em;
	position: relative;
	cursor: pointer;
	background: white;

	&:before {
		transition: transform 0.75s ease;
		content: "";
		color: white;
		display: block;
		position: absolute;
		width: 27px;
		height: 27px;
		background-color: black;
		border-radius: 50%;
		top: 9px;
		left: 6px;
	}
`;

const Toggle = ({ handleChange }) => {
	return (
		<div>
			<BaseToggle
				type="checkbox"
				id="toggle"
				onChange={(val) => handleChange(!val)}
			/>
			<BaseLabel for="toggle" />
		</div>
	);
};

export default Toggle;
