import styled from "styled-components";

export const CardContent = styled.li`
    background: ${props => (props.progress === '1' || props.progress === '2') ? '#FFFFD5' : '#FFFFFF'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 300px;
    padding: 23px 15px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: ${props => (props.progress === '1' || props.progress === '2') ? 'flex-start' : 'center'};
    flex-direction: ${props => (props.progress === '1' || props.progress === '2') && 'column'};
    min-height: ${props => (props.progress === '1' || props.progress === '2') ? '131px' : 'auto'};
    p{
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: ${props => (props.progress === '1' || props.progress === '2') ? '400' : '700'};
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.progress === '3' ? props.conclusionColor : '#333333'};
        text-decoration-line: ${props => props.progress === '3' && 'line-through'};
    }
    img{
        align-self: ${props => props.progress === '1' && 'flex-end'};
        width: ${props => props.progress === '0' ? '20px' : props.progress === '1' ? '30px' : '23px'};
        height: ${props => props.progress === '0' ? '23px' : props.progress === '1' ? '20px' : '23px'};
    }
`;

export const BtnList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

export const Btn = styled.button`
    color: #FFFFFF;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 37px;
    width: 85px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    background-color: ${props => props.position === 0 ? '#FF3030' : props.position === 1 ? '#FF922E' : '#2FBE34'};
`;