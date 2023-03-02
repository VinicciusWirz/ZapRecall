import styled from "styled-components";

export const FrontPage = styled.main`
    display: ${props => props.display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    background: #FB6B6B;
    img{
        width: 136px;
        height: 161px;
    }
    h1{
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        width: 257px;
        height: 59px;
        margin: 13px 0 30px;
    }
    button{
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`;