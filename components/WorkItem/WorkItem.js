import React from "react";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import styles from "./WorkItem.module.css";
import Link from "next/link";

const WorkItem = (props) => {
  return (
    <Link as={`/posts/${props.slug}`} href="/posts/[slug]">
        <div className={styles.imagecontainer}>
          <img className={styles.img} src={props.img} />
          <div className="absolute w-full h-full  bg-gradient-to-t from-black  to-transparent top-0 left-0 opacity-10 rounded-lg"></div>
        </div>
        <Spacer xs />
        <Text m semib>
          {props.name}
        </Text>
    </Link>
  );
};

export default WorkItem;
