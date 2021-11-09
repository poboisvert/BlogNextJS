import { Row, Col } from "antd";
import NewsletterSubscribe from "../NewsletterForm";
import * as S from "./styles";
import { MiddleBlockProps } from "./interfaces";

const MiddleBlock = ({ title, content, t }: MiddleBlockProps) => {
  return (
    <>
      <S.MiddleBlock>
        <Row justify="center" align="middle">
          <S.ContentWrapper>
            <Col>
              <S.Title>{title}</S.Title>
              <S.Content>{content}</S.Content>
              <NewsletterSubscribe />
            </Col>
          </S.ContentWrapper>
        </Row>
      </S.MiddleBlock>
    </>
  );
};

export default MiddleBlock;
