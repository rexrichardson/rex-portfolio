import Container from "../Container/Container";
import styles from "./Footer.module.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Text from "../Text/Text";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text m>Designed and developed by Rex Richardson</Text>
      <a href="https://www.linkedin.com/in/rex-richardson/?originalSubdomain=uk">
        <AiFillLinkedin size={24} />
      </a>
      <a href="https://github.com/rexrichardson">
        <AiFillGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;
