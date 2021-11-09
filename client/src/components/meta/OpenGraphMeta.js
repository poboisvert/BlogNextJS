import Head from "next/head";

export default function OpenGraphMeta({
  url,
  title,
  description,
  image,
}) {
  return (
    <Head>
      <meta property="og:site_name" content="content" />
      <meta property="og:url" content="content" />
      <meta
        property="og:title"
        content="content"
      />
      <meta
        property="og:description"
        content="content"
      />
      <meta
        property="og:image"
        content="content"
      />
      <meta property="og:type" content="article" />
    </Head>
  );
}
