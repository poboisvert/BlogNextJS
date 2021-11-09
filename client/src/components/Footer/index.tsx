import * as S from "./styles";

// Common
import SocialList from "../Social/Social";

const Footer = ({ t }: any) => {
  return (
    <div className="container">
      <S.Footer>
        <div className="footer-component">
          <S.Language>Contact</S.Language>
          <S.Para>
            Do you have any question regarding the project? Feel free to reach
            out.
          </S.Para>
        </div>
        <div className="footer-component">
          <S.Title>Policy</S.Title>
          <S.Large to="/" left="true">
            Application Security
          </S.Large>
          <S.Large left="true" to="/">
            Software Principles
          </S.Large>
        </div>
        <div className="footer-component">
          <S.Title>Company</S.Title>
          <S.Large to="/" left="true">
            LinkedIn
          </S.Large>
          <S.Large left="true" to="/">
            Rancho Santa Margarita 2131 Elk Street California
          </S.Large>
        </div>
      </S.Footer>
      <S.Extra>
        <S.FooterContainer>
          <SocialList />
        </S.FooterContainer>
      </S.Extra>
      <style jsx>
        {`
          .footer-component {
            padding: 0 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
