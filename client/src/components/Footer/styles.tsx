import styled from 'styled-components';

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  padding: ${(props) => (props.padding ? '2.8rem' : '0 20px')};

  background: #f0f6f0;
  bottom: 0;

  @media only screen and (max-width: 480px) {
    padding: 8rem 0 6rem;
  }
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const BlockContent = styled.div`
  padding: 0 20px;
  max-width: 250px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const BlockTitle = styled.h6`
  font-size: 20px;
  text-transform: uppercase;
  color: #222323;
`;

export const BlockText = styled.div`
  font-size: 16px;
  color: #222323;
  text-align: ${(props) => (props.left ? 'left' : '')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
`;

export const BlockExtra = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  background: #f0f6f0;

  padding-right: 25px;
  padding-left: 25px;

  padding-bottom: 2rem;
  border-top: 1px solid #cdd1d4;

  padding: 2.5rem 1rem;

  @media only screen and (max-width: 480px) {
    padding: 8rem 0 6rem;
    margin-top: 0 auto;
  }
`;

export const BlockSocial = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  @media only screen and (max-width: 480px) {
    margin: 0;
    vertical-align: top;
    justify-content: center;
  }
`;
