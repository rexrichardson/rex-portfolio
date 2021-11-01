import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import Work from "../components/Work/Work";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import { getAllPosts } from "../lib/api";
import Hero from "../components/Hero/Hero";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer/Footer";
import Spacer from "../components/Spacer/Spacer";
import SkillsRow from "../components/SkillsRow/SkillsRow";

export default function Home({ allPosts }) {
	const work = allPosts;

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Rexs Portfolio</title>
				<meta name="description" content="A collection of my work" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar home />
			<Hero />

			<main className={styles.main}>
				{work.length > 0 && <Work work={work} showAll={false} />}
				<About />
				<SkillsRow />
				<Spacer xxl />

				<Contact />
			</main>
			<Spacer xxl />
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"tags",
		"youtube",
		"halfImages",
		"fullImages",
	]);
	console.log(allPosts);
	return {
		props: { allPosts },
	};
}
