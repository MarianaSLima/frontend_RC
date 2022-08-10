import styled from 'styled-components';

export const Btn = styled.input`
    height:  ${props => props.altura || 40}px;
    width: ${props => props.largura || 90}px;
    background-color: #${props => props.cor || '999'};
    color:  #${props => props.corFundo || '000'};
    font-size:  ${props => props.fonteSize || 20}px;
    text-align: center;
    border-radius: 10px;
    border: 0;
    padding: 6px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 10px;
`;

export const Input = styled.input`
    height:  40px;
    width: 100%;
    background-color: #f0f0f0;
    color:  #000;
    font-size:  20px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
    padding-left: 8px;
    padding-right: 8px;
    outline: none;
`;

export const CampoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 10px 0 10px 0;
`;

export const Label = styled.label`
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: column;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;
