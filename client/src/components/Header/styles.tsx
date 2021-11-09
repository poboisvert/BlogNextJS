import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  margin-right: auto;
  margin-left: auto;
  padding: 5px 0;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 10;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),
    0 0 #0000;

  box-sizing: unset !important;

  @media only screen and (max-width: 768px) {
    font-size: 0.95em !important;
  }
`;

export const CustomNavLinkSmall = styled.div`
  font-size: 1rem;
  color: black;
  transition: color 0.2s ease-in;
  margin: 0.25rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
    font-size: 0.95em;
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
  @media (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;
    margin: 0;
    padding: 0.7em;
  }
`;
