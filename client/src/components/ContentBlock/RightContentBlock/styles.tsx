import styled from 'styled-components';

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10rem 0 8rem;

  @media only screen and (max-width: 480px) {
    padding: 8rem 0 6rem;
  }
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  margin: 20px;
  padding: 0;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 20px;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const BlockTitle = styled.h6`
  display: flex;
  text-transform: uppercase;
  color: #222323;
  height: 50px;

  @media only screen and (max-width: 480px) {
    margin: 0;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const BlockText = styled.div`
  display: flex;
  font-size: 18px;
  color: #222323;
  margin-top: 0;
  width: 100%;

  @media only screen and (max-width: 480px) {
    margin: 0;
    align-items: flex-start;
    justify-content: center;
  }
`;
