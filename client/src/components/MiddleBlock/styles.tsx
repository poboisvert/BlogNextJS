import styled from 'styled-components';

export const BlockContainer = styled.div`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 480px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    width: 18rem;
    margin: 0 auto;
    font-size: 1rem;
  }
`;

export const BlockTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  text-transform: uppercase;
  color: #222323;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const BlockContent = styled.div`
  padding: 20px;
`;
