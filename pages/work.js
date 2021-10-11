import Container from "../components/Container/Container";
import Nav from "../components/Nav/Nav";
import Work from "../components/Work/Work";
import { getAllPosts } from "../lib/api";

const WorkPage = ({ allPosts }) => {
	const work = allPosts;

	return (
		<div>
			<Nav />
			{work.length > 0 && <Work work={work} showAll={true} />}
		</div>
	);
};

export async function getStaticProps() {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"tags",
		"images",
		"youtube",
		"halfImages",
		"fullImages",
	]);
	console.log(allPosts);
	return {
		props: { allPosts },
	};
}

export default WorkPage;
