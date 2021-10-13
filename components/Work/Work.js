import Link from "next/link";
import Container from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import Text from "../Text/Text";
import WorkItem from "../WorkItem/WorkItem";
import styles from "./Work.module.css";

const Work = ({ work, showAll }) => {
	console.log(work);
	return (
		<Container id="work" black>
			<Spacer xl />
			<Text l semib>
				MY WORK
			</Text>
			<Spacer xl />
			<div className={styles.grid}>
				{work &&
					work
						.slice(0, showAll === true ? work.length : 4)
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
				<div className={styles.viewAllRow}>
					<Link href="/work">
						<a className={styles.viewAll} href="#viewall">
							View All
						</a>
					</Link>
				</div>
			)}
			<Spacer m />
		</Container>
	);
};

export default Work;
