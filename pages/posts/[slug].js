import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container/Container";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import WorkBody from "../../components/WorkBody/WorkBody";
import WorkPageHeader from "../../components/WorkPageHeader/WorkPageHeader";
import NavBar from "../../components/NavBar/NavBar";
import WorkImages from "../../components/WorkImages/WorkImages";
import YouTube from "react-youtube";
import styles from "./WorkPage.module.css";
import markdownToHtml from "../../lib/markdownToHtml";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import InteractiveImage from "../../components/InteractiveImage/InteractiveImage";
import ArticleMainImage from "../../components/ArticleMainImage/ArticleMainImage";
import formatDate from "../../helpers/formatDate";

export default function Post({ post }) {
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
      <Container aos="none" theme="grey" className={"border-t border-gray-300"}>
        {router.isFallback ? (
          <div>Loading.</div>
        ) : (
          <>
            <article>
              <title>{post.title}</title>
              <WorkPageHeader
                tags={post.tags}
                title={post.title}
                date={formatDate(post.date)}
              />
              <ArticleMainImage
                imageUrl={post.mainImage ? post.mainImage : post.coverImage}
                alt={post.title}
              />
              <WorkBody content={post.content} />
              {post.fullImages && (
                <WorkImages width="full" images={post.fullImages} />
              )}

              {post.halfImages && (
                <WorkImages width="half" images={post.halfImages} />
              )}

              {post.thirdImages && (
                <WorkImages width="third" images={post.thirdImages} />
              )}

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
    "mainImage",
  ]);

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
