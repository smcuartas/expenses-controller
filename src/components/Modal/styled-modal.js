import styled from "styled-components";

export const ModalContainer = styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    margin:auto;
    background:rgba(0,0,0,.5);
    top:0;
    left:0;
    z-index:10;
    backdrop-filter:blur(5px);
`

export const Content = styled.div`
    padding:50px;
    background:white;
    border-radius:5px;
    width:50%;
    opacity:0;
    transition-duration:.5s;

    &.animate{
        opacity:1;
    }
`

export const CloseModal = styled.span`
    position:absolute;
    top:30px;
    right:30px;
    color:white;
    cursor:pointer;
`

export const Form = styled.form`
    input[type="submit"]{
        width:100%;
        margin-top:5px;
        padding:10px;
        border:none;
        border-radius:0;
        text-transform:uppercase;
        letter-spacing:2px;
        background:#91D7F2;
        color:white;
        transition-duration:.3s;

        :hover{
            background:#225A70;
        }
    }

    & legend{
        color:#3997BD;
        font-weight:700;
        border-bottom:1px solid #3997BD;
        padding-bottom:10px;
        margin-bottom:20px;
    }
`

export const FormInfo = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:5px;

    input,
    select{
        box-sizing:border-box;
        width:100%;
        padding:10px 5px;
        border:1px solid #eaeaea;
    }
`

export const Error = styled.span`
    display:block;
    position:relative;
    width:100%;
    padding:10px 5px;
    margin:5px 0;
    background:rgba(204,7,0,.1);
    box-sizing:border-box;
    color:#CC0700;
    text-transform:uppercase;
    font-weight:700;
    font-size:14px;
    text-align:center;

    &:after{
        content:'';
        width:5px;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        background:#CC0700;
    }
`