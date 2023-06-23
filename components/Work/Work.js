import Link from "next/link";
import Container from "../Container/Container";
import Text from "../Text/Text";
import WorkItem from "../WorkItem/WorkItem";
import styles from "./Work.module.css";
import ScrollDown from "../ScrollDown/ScrollDown";
import Button from "../Button/Button";
import HeaderText from "../HeaderText/HeaderText";
import { FaChevronRight } from "react-icons/fa";

const Work = ({ work, showAll }) => {
  console.log(work);
  return (
    <Container
      id="work"
      theme="grey"
      className={"border-b border-t border-gray-300 "}
    >
      <div className="flex justify-between w-full items-center pb-6">
        <h2 className="text-xl md:text-2xl font-bold">My Work</h2>
        {showAll === false && (
          <div>
            <Link href="/work" className={styles.viewAll}>
              <div className="flex flex-row justify-center items-center gap-2 hover:gap-4 transition-all ease-in-out">
                <Text l semib>
                  View All
                </Text>
                <FaChevronRight size={20} />
              </div>
            </Link>
          </div>
        )}
      </div>

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
    </Container>
  );
};

export default Work;
