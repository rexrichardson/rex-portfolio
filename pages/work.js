import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Work from "../components/Work/Work";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

const WorkPage = ({ allPosts }) => {
	const work = allPosts;

	return (
		<div>
			<Head>
				<title>Rex Richardson - Work</title>
				<meta name="description" content="A collection of my work" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			{work.length > 0 && <Work work={work} showAll={true} />}
			<Footer />
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
	return {
		props: { allPosts },
	};
}

export default WorkPage;
