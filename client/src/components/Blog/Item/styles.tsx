import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 900px;
  padding: 10rem 0 8rem;
  margin: 0;

  @media only screen and (max-width: 480px) {
    max-width: 350px;
    overflow: hidden;
  }
`;

export const ItemWrapper = styled.div`
  margin: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;
