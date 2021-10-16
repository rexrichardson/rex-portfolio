import Link from "next/link";
import Text from "../Text/Text";
import styles from "./NavBar.module.css";
import * as Scroll from "react-scroll";

const NavBar = () => {
	const ScrollLink = Scroll.Link;

	return (
		<div className={styles.nav}>
			<div className={styles.leftNav}>
				<Link href="/">
					<a>
						<Text l semib>
							Rex Richardson
						</Text>
					</a>
				</Link>
			</div>
			<div className={styles.rightNav}>
				<Link href="/work">
					<a>
						<Text l>Work</Text>
					</a>
				</Link>
				<ScrollLink
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					duration={500}
				>
					<Text l>About</Text>
				</ScrollLink>
				<ScrollLink
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					duration={500}
				>
					<Text l>Contact</Text>
				</ScrollLink>
			</div>
		</div>
	);
};

export default NavBar;
