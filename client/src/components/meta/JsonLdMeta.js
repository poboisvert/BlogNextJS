import { BlogPosting } from 'schema-dts';
import { jsonLdScriptProps } from 'react-schemaorg';

import { formatISO } from 'date-fns';
import Head from 'next/head';

export default function JsonLdMeta({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}) {
  return (
    <Head>
      <script
        {...jsonLdScriptProps({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: 'test',
          headline: title,
          keywords: keywords ? undefined : keywords.join(','),
          datePublished: formatISO(date),
          author: author,
          image: image,
          description: description,
        })}
      />
    </Head>
  );
}
