import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  padding: ${(props) => (props.padding ? '2.8rem' : '0 20px')};
  border-bottom: ${(props) => (props.border ? '1px solid #CDD1D4' : '')};

  @media only screen and (max-width: 1024px) {
    max-width: 950px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (max-width: 480px) {
    max-width: 350px;
  }
`;
