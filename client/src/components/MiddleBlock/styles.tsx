import styled from "styled-components";

export const MiddleBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;

  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    width: 18rem;
    margin: 0 auto;
    font-size: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h6`
  text-decoration: none;
`;
