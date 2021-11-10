import React from 'react';
import Date from '../Date';

import TagButton from '../TagButton';
import { getTag } from '../../../lib/tags';

import { ItemContainer, ItemWrapper, ContentWrapper } from './styles';

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children?: React.ReactNode;
};

export default function BlogItem({
  title,
  date,
  slug,
  author,
  tags,
  description = '',
  children,
}: Props) {
  return (
    <ItemContainer>
      <ItemWrapper>
        <h1>{title}</h1>
        <ContentWrapper>
          <Date date={date} />
        </ContentWrapper>
      </ItemWrapper>
      <div>{children}</div>
      <ul>
        {tags.map((it, i) => (
          <li key={i}>
            <TagButton tag={getTag(it)} />
          </li>
        ))}
      </ul>
    </ItemContainer>
  );
}
