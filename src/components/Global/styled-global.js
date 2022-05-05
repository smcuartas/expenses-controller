import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        font-family:'Lato';
    }

    h1{
        font-weight:900;
    }

    h2,
    h3{
        font-weight:700;
    }

    span{
        color:#3997BD;
        font-weight:700;
    }

    body{
        background:#F4F5F2;
    }
`

export default GlobalStyle