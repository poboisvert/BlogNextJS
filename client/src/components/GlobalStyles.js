import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Ubuntu', sans-serif;
    }


   body {
        margin: 0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
    }

    a:hover {
        color: #222323;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Ubuntu', sans-serif;
        color: #222323;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #343D48;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #5b4a68;

        :hover {
            color: #5b4a68;
        }
    }
    ul {
        list-style: none;
        margin: 3rem 0 0 0;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin-right: 1em;
        color: #9b9b9b;
        font-size: 1.25rem;
    }
    
    *:focus {
        outline: none;
    }

    .container {
        margin-top: 75px !important;
        margin-bottom: 10px !important;
    }

`;

export default GlobalStyles;
