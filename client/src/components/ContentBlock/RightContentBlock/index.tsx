import Slide from 'react-reveal/Slide';
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
          <Slide left>
            <BlockTitle>{title}</BlockTitle>
            <BlockText>{content}</BlockText>
          </Slide>
        </BlockContent>
        <BlockContent>
          <Slide right>
            <SvgIcon src={icon} height='300px' width='300px' />
          </Slide>
        </BlockContent>
      </BlockWrap>
    </BlockContainer>
  );
};

export default RightBlock;
