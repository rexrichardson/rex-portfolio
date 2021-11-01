import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a>Built by Rex Richardson with Next.js</a>
			<a>Twitter</a>
		</footer>
	);
};

export default Footer;
