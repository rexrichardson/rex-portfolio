import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container/Container";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import WorkBody from "../../components/WorkBody/WorkBody";
import WorkPageHeader from "../../components/WorkPageHeader/WorkPageHeader";
import NavBar from "../../components/NavBar/NavBar";
import Spacer from "../../components/Spacer/Spacer";
import WorkImages from "../../components/WorkImages/WorkImages";
import YouTube from "react-youtube";
import styles from "./WorkPage.module.css";
import markdownToHtml from "../../lib/markdownToHtml";
import { useState } from "react";
import Toggle from "../../components/Toggle/Toggle";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";

export default function Post({ post }) {
	const [light, setLight] = useState(false);

	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<div>
			<Head>
				<title>Rex Richardson - {post.title}</title>
				<meta name="description" content={post.title} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<Container aos="none" theme={light ? "white" : "black"}>
				{router.isFallback ? (
					<div>Loading.</div>
				) : (
					<>
						<article className="mb-32">
							<title>{post.title}</title>
							<WorkPageHeader
								tags={post.tags}
								title={post.title}
								theme={light ? "white" : "black"}
								handleChange={() => setLight(!light)}
							></WorkPageHeader>

							<WorkBody content={post.content} />
							<Spacer l />
							{post.fullImages && (
								<WorkImages width="full" images={post.fullImages} />
							)}
							<Spacer l />

							{post.halfImages && (
								<WorkImages width="half" images={post.halfImages} />
							)}

							{post.thirdImages && (
								<WorkImages width="third" images={post.thirdImages} />
							)}

							<Spacer l />

							{post.youtube && (
								<div className={styles.video}>
									<YouTube
										className={styles.videoPlayer}
										videoId={post.youtube}
									></YouTube>
								</div>
							)}
						</article>
					</>
				)}
				<Spacer xl />
			</Container>
			<Footer />
		</div>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		"title",
		"date",
		"slug",
		"author",
		"content",
		"ogImage",
		"coverImage",
		"tags",
		"thirdImages",
		"halfImages",
		"fullImages",
		"youtube",
	]);

	console.log(post.content);

	const content = await markdownToHtml(post.content || "");

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(["slug"]);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
