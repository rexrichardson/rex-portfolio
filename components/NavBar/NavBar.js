import Link from "next/link";
import Text from "../Text/Text";
import styles from "./NavBar.module.css";
import * as Scroll from "react-scroll";

const NavBar = ({ home }) => {
  const ScrollLink = Scroll.Link;

  return (
    <div
      className={`px-4 sm:px-8 lg:px-16 xl:px-24 ${styles.nav}  ${
        !home ? "bg-white" : "absolute top-0 left-0"
      }`}
    >
      <div className={styles.leftNav}>
        <Link href="/">
          <Text xl semib brand>
            Rex
          </Text>
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
          <Link href="/#work" query={"work"}>
            <Text l>Work</Text>
          </Link>
          <Link href="/#about">
            <Text l>About</Text>
          </Link>
          <Link href="/#contact">
            <Text l>Contact</Text>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
