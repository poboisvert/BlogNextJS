import React from 'react';
import Twitter from '../../assets/twitter-alt.svg';
import GitHub from '../../assets/github-alt.svg';

import * as S from './styles';

import webconfig from '../../lib/webconfig';

const SocialList = ({}) => {
  return (
    <>
      <S.Container>
        <S.Link
          title='GitHub'
          href={`https://github.com/${webconfig.github_account}`}
          target='_blank'
          rel='noopener'
        >
          <GitHub width={24} height={24} fill={'#222'} />
        </S.Link>
        <S.Link
          title='Twitter'
          href={`https://twitter.com/${webconfig.twitter_account}`}
          target='_blank'
          rel='noopener'
        >
          <Twitter width={24} height={24} fill={'#222'} />
        </S.Link>
      </S.Container>
    </>
  );
};

export default SocialList;
