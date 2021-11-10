import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 900px;
  padding: 10rem 0 8rem;
  margin: 0;

  position: fixed;
  top: 0;
  height: 70px;

  padding: 5px 0;
  z-index: 5;

  background-color: #fff;
  border-bottom: 3px solid rgba(0, 0, 0, 0.06);

  box-sizing: unset !important;

  @media only screen and (max-width: 480px) {
    font-size: 0.95em !important;
    padding: 5px 0;
  }
`;

export const CustomNavLinkSmall = styled.div`
  font-size: 1rem;
  color: black;
  transition: color 0.2s ease-in;
  margin: 0.25rem 2rem;

  @media only screen and (max-width: 480px) {
    font-size: 1.1em;
    margin: 0rem 1.5rem;
  }
`;

export const Span = styled.span`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Button = styled.button`
  display: inline-block;
  background: #222323;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #222323;
  border-radius: 8px;
  display: block;
  font-size: 1rem;
  font-weight: 700 !important;
  height: 60px;
  @media only screen and (max-width: 480px) {
    font-size: 1.1rem;
    font-weight: 400;
    align-items: center;
  }
`;
