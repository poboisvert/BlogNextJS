import { SvgIcon } from '../../../common/SvgIcon';
import { ContentBlockProps } from '../interfaces';

import {
  BlockContainer,
  BlockWrap,
  BlockContent,
  BlockTitle,
  BlockText,
} from './styles';

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
  first,
}: ContentBlockProps) => {
  return (
    <BlockContainer id={id}>
      <BlockWrap>
        <BlockContent>
          <SvgIcon src={icon} height='619px' width='300px' />
        </BlockContent>
        <BlockContent>
          <BlockTitle>{title}</BlockTitle>
          <BlockText>{content}</BlockText>
        </BlockContent>
      </BlockWrap>
    </BlockContainer>
  );
};

export default RightBlock;
