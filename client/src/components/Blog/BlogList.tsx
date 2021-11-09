import React from "react";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { BlockContainer, Content, ContentWrapper } from "./styles";
import { Row, Col } from "antd";

import { TagContent } from "../../lib/tags";
import { PostContent } from "../../lib/posts";

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
    <>
      <BlockContainer>
        <Row>
          <Col flex="1 1 550px">
            <ContentWrapper>
              {posts.map((it, i) => (
                <Content>
                  <PostItem post={it} />
                </Content>
              ))}
            </ContentWrapper>
          </Col>
        </Row>
        <Row>
          <ul>
            {tags.map((it, i) => (
              <li key={i}>
                <TagLink tag={it} />
              </li>
            ))}
          </ul>
        </Row>
        <Row>
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
              as: (page) => (page === 1 ? null : "/posts/page/" + page),
            }}
          />
        </Row>
      </BlockContainer>
    </>
  );
}
