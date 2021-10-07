import React from "react";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import styles from "./WorkItem.module.css";
import Link from "next/link";

const WorkItem = (props) => {
	console.log(props.slug);
	return (
		<Link as={`/posts/${props.slug}`} href="/posts/[slug]">
			<a href="#">
				<div className={styles.container}>
					<div className={styles.imagecontainer}>
						<img className={styles.img} src={props.img} />
						<div className={styles.overlayText}></div>
					</div>
					<Spacer xs />
					<Text l>{props.name}</Text>
				</div>
			</a>
		</Link>
	);
};

export default WorkItem;
