import styled from "styled-components";

export const ExpenseContainer = styled.div`
    overflow:hidden;
    position:relative;
    margin-top:15px;
    border-radius:5px;
    box-shadow:3px 3px 5px rgba(0,0,0,.2);

    .swipeable-list-item{
        position:relative;
    }

    .swipeable-list-item__leading-actions{
        position:absolute;
        left:0;
        top:0;
        background:#3997BD;
        height:100%;
        width:0;
        max-width:100%;
        z-index:-1;
        overflow:hidden;

        display:flex;
        justify-content:center;
        align-items:center;

        span{
            color:white;
        }
    }

    .swipeable-list-item__trailing-actions{
        position:absolute;
        right:0;
        top:0;
        background:#CC0700;
        height:100%;
        width:0;
        max-width:100%;
        z-index:-1;
        overflow:hidden;

        display:flex;
        justify-content:center;
        align-items:center;

        span{
            color:white;
        }
    }
`

export const ExpenseContent = styled.div`
    padding:32px;
    display:grid;
    grid-template-columns:120px 1fr;
    background:white;
    z-index:10;
    cursor:e-resize;

    div{
        margin:auto 0;
    }

    h3{
        text-transform:capitalize;
    }

    span{
        display:block;
        font-weight:bold;
        color:#C1C2C0;
        text-transform:uppercase;
        letter-spacing:2px;
        margin-bottom:5px;
    }

    p{
        font-size:12px;
        margin-top:24px;
        padding-top:6px;
        border-top:1px solid #eaeaea;
    }
`

export const Columns = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;

    div:last-child{
        text-align:right;
    }
`