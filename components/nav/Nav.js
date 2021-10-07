import Link from "next/link";
import Text from "../Text/Text";
import styles from "./Nav.module.css";

const Nav = () => {
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
				<a href="#Work">
					<Text l>Work</Text>
				</a>
				<a href="#About">
					<Text l>About</Text>
				</a>
				<a href="#Contact">
					<Text l>Contact</Text>
				</a>
			</div>
		</div>
	);
};

export default Nav;
