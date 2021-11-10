import React from 'react';
import PostItem from '../PostItem';
import TagLink from '../TagLink';
import Pagination from '../Pagination';

import { TagContent } from '../../../lib/tags';
import { PostContent } from '../../../lib/posts';

import { BlogContainer, BlogWrapper, BlogPagination } from './styles';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function BlogList({ posts, tags, pagination }: Props) {
  return (
    <BlogContainer>
      <BlogWrapper>
        {posts.map((it, i) => (
          <div className='blog__content' key={i}>
            <PostItem post={it} />
          </div>
        ))}
      </BlogWrapper>
      <BlogPagination>
        <ul>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      </BlogPagination>
      <div>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
            as: (page) => (page === 1 ? null : '/posts/page/' + page),
          }}
        />
      </div>
    </BlogContainer>
  );
}
