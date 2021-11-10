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
          <BlockTitle>{title}</BlockTitle>
          <BlockText>{content}</BlockText>
        </BlockContent>
        <BlockContent>
          <SvgIcon src={icon} height='300px' width='300px' />
        </BlockContent>
      </BlockWrap>
    </BlockContainer>
  );
};

export default RightBlock;
