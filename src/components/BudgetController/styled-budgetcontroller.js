import styled from "styled-components";

export const BCContainer = styled.div`
    display:block;
    padding:50px;
    margin:50px 15% -70px 15%;
    background:white;
    border-radius:5px;
    box-shadow:0 0 15px rgba(0,0,0,.2);
    display:grid;
    grid-template-columns:repeat(2,1fr);
    text-align: initial;

    & div{
        margin:auto 0;
    }
`

export const ResetBtn = styled.button`
    display:block;
    width:100%;
    margin-bottom:16px;
    background:#CC0700;
    border:none;
    border-radius:0;
    color:white;
    text-transform:uppercase;
    letter-spacing:2px;
    padding:10px 5px;
    cursor:pointer;
    transition-duration:.3s;

    :hover{
        background:#750400;
    }
`

export const InternalRow = styled.div`
    display:grid;
    grid-template-columns:30% 1fr;

    & p:last-child{
        text-align:right;
    }
`