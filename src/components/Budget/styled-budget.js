import styled from "styled-components";

export const BudgetContainer = styled.div`
    display:block;
    padding:50px;
    margin:50px 15% -70px 15%;
    background:white;
    border-radius:5px;
    box-shadow:0 0 15px rgba(0,0,0,.2);
`

export const Form = styled.form`
    & label{
        margin-bottom:10px;
        display:block;
        text-transform:uppercase;
        font-weight:bold;
        color:#3997BD;
    }
    
    & input[type="number"]{
        display:block;
        padding:10px 5px;
        width:100%;
        border:1px solid #eaeaea;
        border-radius: 5px 5px 0 0;
        text-align:center;
        box-sizing:border-box;
    }

    & input[type="submit"]{
        display:block;
        width:100%;
        padding:10px 5px;
        border-radius:0 0 5px 5px;
        border:none;
        background:#91D7F2;
        color:white;
        text-transform:uppercase;
        letter-spacing:2px;
        cursor:pointer;
        transition-duration:.3s;

        &:hover{
            background:#225A70;
        }
    }
`

export const Alert = styled.span`
    display:block;
    position:relative;
    width:100%;
    padding:10px 5px;
    margin-top:10px;
    background:rgba(204,7,0,.1);
    box-sizing:border-box;
    color:#CC0700;
    text-transform:uppercase;
    font-weight:700;
    font-size:14px;

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