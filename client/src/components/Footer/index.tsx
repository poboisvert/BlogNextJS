// Common
import SocialList from '../Social/Social';

import {
  BlockContainer,
  BlockWrap,
  BlockContent,
  BlockTitle,
  BlockText,
  BlockExtra,
  BlockSocial,
} from './styles';

const Footer = ({ t }: any) => {
  return (
    <BlockContainer>
      <BlockWrap>
        <BlockContent>
          <BlockTitle>Contact</BlockTitle>
          <p>
            Do you have any question regarding the project? Feel free to reach
            out.
          </p>
        </BlockContent>
        <BlockContent>
          <BlockTitle>Policy</BlockTitle>
          <BlockText>Application Security</BlockText>
          <BlockText>Software Principles</BlockText>
        </BlockContent>
        <BlockContent>
          <BlockTitle>Company</BlockTitle>
          <BlockText>LinkedIn</BlockText>
          <BlockText>
            Rancho Santa Margarita 2131 Elk Street California
          </BlockText>
        </BlockContent>
      </BlockWrap>
      <BlockExtra>
        <BlockSocial>
          <SocialList />
        </BlockSocial>
      </BlockExtra>
    </BlockContainer>
  );
};

export default Footer;
