import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am beginning to learn Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <Link href="/posts/first-post">
            <a>our Next.js tutorial</a>
          </Link>
          .)
        </p>
      </section>
    </Layout>
  );
}
