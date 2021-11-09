import { Row, Col } from "antd";
import "antd/dist/antd.css";

import Slide from "react-reveal/Slide";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../interfaces";

import { RightBlockContainer, Content, ContentWrapper } from "./styles";
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
    <RightBlockContainer>
      <Row>
        <Col md={12}>
          <Slide left>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
            </ContentWrapper>
          </Slide>
        </Col>
        <Col md={12}>
          <Slide right>
            <SvgIcon src={icon} width="300px" height="300px" />
          </Slide>
        </Col>
      </Row>
    </RightBlockContainer>
  );
};

export default RightBlock;
