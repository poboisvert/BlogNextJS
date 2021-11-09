import { Row, Col } from "antd";
import "antd/dist/antd.css";

import Slide from "react-reveal/Slide";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../interfaces";

import { LeftBlockContainer, Content, ContentWrapper } from "./styles";
const LeftBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
  first,
}: ContentBlockProps) => {
  return (
    <LeftBlockContainer>
      <Row>
        <Col md={12} >
          <Slide left>
            <SvgIcon src={icon} height="619px" width="300px" />
          </Slide>
        </Col>
        <Col md={12} >
          <Slide right>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
            </ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </LeftBlockContainer>
  );
};

export default LeftBlock;
