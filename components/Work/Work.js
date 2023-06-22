import Link from "next/link";
import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import WorkItem from "../WorkItem/WorkItem";
import styles from "./Work.module.css";
import ScrollDown from "../ScrollDown/ScrollDown";
import Button from "../Button/Button";
import HeaderText from "../HeaderText/HeaderText";

const Work = ({ work, showAll }) => {
  return (
    <Container
      id="work"
      theme="grey"
      className={"border-b border-t border-gray-300  "}
    >
      <HeaderText s bold>
        My Work
      </HeaderText>

      <Spacer xl />
      <div className={styles.grid}>
        {work &&
          work
            .slice(0, showAll === true ? work.length : 6)
            .map((post) => (
              <WorkItem
                key={post.slug}
                name={post.title}
                img={post.coverImage}
                slug={post.slug}
              />
            ))}
      </div>
      <Spacer s />

      {showAll === false && (
        <div>
          <Spacer l />

          <div className={styles.viewAllRow}>
            <Link href="/work" className={styles.viewAll}>
              <Button text={"View All"} size="xl"></Button>
            </Link>
          </div>
          <Spacer l />
        </div>
      )}
    </Container>
  );
};

export default Work;
