import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container/Container";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import WorkBody from "../../components/WorkBody/WorkBody";
import Text from "../../components/Text/Text";
import WorkPageHeader from "../../components/WorkPageHeader/WorkPageHeader";
import Nav from "../../components/nav/Nav";
import Spacer from "../../components/Spacer/Spacer";
import WorkImages from "../../components/WorkImages/WorkImages";
import YouTube from "react-youtube";
import styles from "./WorkPage.module.css";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<div>
			<Nav />
			<Container black>
				{router.isFallback ? (
					<div>Loading</div>
				) : (
					<>
						<article className="mb-32">
							<title>{post.title}</title>
							<Spacer l />
							<WorkPageHeader
								tags={post.tags}
								title={post.title}
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
