import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 900px;
  padding: 10rem 0 8rem;
  margin: 0;

  @media only screen and (max-width: 480px) {
    margin-top: 50px;
    padding: 0 0.5rem;
    min-width: 200px;
    max-width: 350px;
    align-items: center;
  }
`;

export const TagWrapper = styled.div`
  margin: 0;
`;

export const TagPagination = styled.div`
  margin: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;
