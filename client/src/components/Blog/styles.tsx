import styled from 'styled-components';

export const BlockContainer = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
`;

export const Content = styled.p`
  margin: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;
