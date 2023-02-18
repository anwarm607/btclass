import styled from "styled-components";


export const CardContainer = styled.div`
    width: 18.5%;
    height: auto;
    border: 3px solid #ececec;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 20px;

`
export const CardImage = styled.img`
    width: 154px;
    height: 154px;
    object-fit: contain;
`
export const CardTitle = styled.h1`
    font-size: 16px;
    color: #636e72;
    white-space: nowrap;
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 7px;
`
export const CardImageWrapper = styled.div`
    height: 245px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CardPrice = styled.p`
    color: #2d3436;
    font-size: 14px;
    
`

export const CardBtn = styled.button`
    color: ${props => props.textColor ? props.textColor : 'white'};
    border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
    margin-top: 10px;
    width: 100%;
    font-weight: bold;
    border-radius: 5px;
    background-color: ${props => props.btnColor ? props.btnColor : "#fb641b"};
    padding: 10px;
    cursor: pointer;
`