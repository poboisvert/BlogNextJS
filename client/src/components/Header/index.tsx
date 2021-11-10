import { useRouter } from 'next/router';
import Link from 'next/link';

import * as S from './styles';

const Header = ({ t }: any) => {
  const router = useRouter();

  const MenuItem = () => {
    return (
      <>
        <S.CustomNavLinkSmall>
          <Link href='/'>
            <S.Span>Home</S.Span>
          </Link>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <Link href='/#preview'>
            <S.Span>About</S.Span>
          </Link>
        </S.CustomNavLinkSmall>

        <S.Span>
          <S.Button>
            <Link href='/posts'>
              <a style={{ color: '#f0f6f0' }}>Sports Blog</a>
            </Link>
          </S.Button>
        </S.Span>
      </>
    );
  };

  return (
    <S.Header>
      <MenuItem />
    </S.Header>
  );
};

export default Header;
