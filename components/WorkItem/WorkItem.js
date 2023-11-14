import React from "react";
import Text from "../Text/Text";
import styles from "./WorkItem.module.css";
import Link from "next/link";
import Image from "next/image";

const WorkItem = (props) => {
  return (
    <Link
      as={`/posts/${props.slug}`}
      href="/posts/[slug]"
      className="w-full h-full"
    >
      <div
        className={`mb-2 ${styles.imagecontainer} relative w-full h-56 2xl:h-64  bg-white`}
      >
        <Image
          src={props.img}
          fill
          className="relative rounded-lg object-cover"
          alt={props.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1500px) 30vw, 30vw"
          quality={100}
        />
        <div className="absolute w-full h-full  bg-gradient-to-t from-black  to-transparent top-0 left-0 opacity-10 rounded-lg"></div>
      </div>
      <Text m semib>
        {props.name}
      </Text>
    </Link>
  );
};

export default WorkItem;
