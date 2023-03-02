import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  margin-bottom: 51px;
  img{
    width: 52px;
    height: 60px;
  }
  h1{
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
    width: 203px;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  min-height: 70px;
  background: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    margin-top: ${props => props.questionProgressNumber > 0 && '9px'};
  }
  div{
    display: flex;
  }
  img{
    margin: 6px 2.5px 10px;
    width: 23px;
    height: 23px;
  }
`;

export const FinalMessage = styled.section`
  display: ${props => props.questionProgressNumber === props.decklength ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  width: 222px;
  margin-top: 17px;
  h6{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 14px;
  }
  p{
    margin: 0;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
    margin-bottom: 14px;
  }
`;