import Head from "next/head";


export default function TwitterCardMeta({ url, title, description }) {
  return (
    <Head>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="bonnet" />
      <meta property="twitter:url" content="bonnet" />
      <meta
        property="twitter:title"
        content="bonnet"
      />
      <meta
        property="twitter:description"
        content="bonnet"
      />
    </Head>
  );
}
