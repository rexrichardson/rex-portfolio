import Link from "next/link";
import Text from "../Text/Text";
import styles from "./NavBar.module.css";
import * as Scroll from "react-scroll";

const NavBar = ({ home }) => {
	const ScrollLink = Scroll.Link;

	return (
		<div className={styles.nav}>
			<div className={styles.leftNav}>
				<Link href="/">
					<a>
						<Text xl semib brand>
							Rex
						</Text>
					</a>
				</Link>
			</div>
			{home ? (
				<div className={styles.rightNav}>
					<ScrollLink
						activeClass="active"
						to="work"
						spy={true}
						smooth={true}
						duration={500}
					>
						<Text l>Work</Text>
					</ScrollLink>
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
			) : (
				<div className={styles.rightNav}>
					<Link href="/" query={"work"}>
						<a>
							<Text l>Work</Text>
						</a>
					</Link>
					<Link href="/#about">
						<a>
							<Text l>About</Text>
						</a>
					</Link>
					<Link href="/#contact">
						<a>
							<Text l>Contact</Text>
						</a>
					</Link>
				</div>
			)}
		</div>
	);
};

export default NavBar;
