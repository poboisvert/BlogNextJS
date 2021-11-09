import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import matter from 'gray-matter';
import { fetchPostContent } from '../../lib/posts';
import BlogItem from '../../components/Blog/BlogItem';

import fs from 'fs';
import yaml from 'js-yaml';
import { parseISO } from 'date-fns';

import InstagramEmbed from 'react-instagram-embed';
import YouTube from 'react-youtube';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MDXRemoteSerializeResult;
};

const components = { YouTube, TwitterTweetEmbed, InstagramEmbed };

const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  description = '',
  source,
}: Props) {
  return (
    <>
      <BlogItem
        title={title}
        date={parseISO(dateString)}
        slug={slug}
        tags={tags}
        author={author}
        description={description}
      >
        <MDXRemote {...source} components={components} />
      </BlogItem>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => '/posts/' + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.post;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, 'utf8');

  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
  });

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: '',
      tags: data.tags,
      author: data.author,
      source: mdxSource,
      frontMatter: data,
    },
  };
};
