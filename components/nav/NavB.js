import React from "react";
import * as Scroll from "react-scroll";

const NavbarB = () => {
	const ScrollLink = Scroll.Link;

	return (
		<div className="navBar">
			<ScrollLink
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				duration={500}
			>
				section1
			</ScrollLink>
		</div>
	);
};
export default NavbarB;
