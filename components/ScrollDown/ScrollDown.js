import { BsChevronDown } from "react-icons/bs";
import * as Scroll from "react-scroll";
import Text from "../Text/Text";
import Styles from "./ScrollDown.module.css";

const ScrollDown = ({ to, label }) => {
	const ScrollLink = Scroll.Link;

	return (
		<div className={Styles.container}>
			<ScrollLink
				activeClass="active"
				to={to}
				spy={true}
				smooth={true}
				duration={500}
			>
				{label && <Text l>{label}</Text>}

				<BsChevronDown className={Styles.arrow} size={label ? "40" : "60"} />
			</ScrollLink>
		</div>
	);
};

export default ScrollDown;
