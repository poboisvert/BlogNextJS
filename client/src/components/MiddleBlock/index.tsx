import NewsletterSubscribe from '../NewsletterForm';
import { MiddleBlockProps } from './interfaces';

import { BlockContainer, BlockWrap, BlockTitle, BlockContent } from './styles';

const MiddleBlock = ({ title, content, t }: MiddleBlockProps) => {
  return (
    <BlockContainer>
      <BlockWrap>
        <BlockTitle>{title}</BlockTitle>
        <BlockContent>{content}</BlockContent>
        <NewsletterSubscribe />
      </BlockWrap>
    </BlockContainer>
  );
};

export default MiddleBlock;
