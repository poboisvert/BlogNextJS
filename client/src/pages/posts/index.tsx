import BlogList from '../../components/Blog/BlogList';

import webconfig from '../../lib/webconfig';
import GlobalStyles from '../../components/GlobalStyles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { countPosts, listPostContent, PostContent } from '../../lib/posts';
import { listTags, TagContent } from '../../lib/tags';

// Common
import Container from '../../common/Container';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Index({ posts, tags, pagination }: Props) {
  return (
    <>
      <BlogList posts={posts} tags={tags} pagination={pagination} />
    </>
  );
}

export const getStaticProps = async () => {
  const posts = listPostContent(1, webconfig.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / webconfig.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
