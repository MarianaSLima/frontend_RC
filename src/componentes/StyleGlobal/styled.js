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

export const Link = styled.button`
    height:  50px;
    width: 150px;
    background-color:  #${props => props.corFundo};
    font-size:  20px;
    font-weight:  bolder;
    border: 2px solid #${props => props.corFundo};
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items:center;
    font-family: 'Times New Roman', Times, serif;
    justify-content: center;

    &:hover {
        color: #${props => props.corFundo};
        background-color: transparent;
        transition: 0.5s;
    }
`;

export const LinkFormulario = styled.a`
    color:  #${props => props.cor || 'fff'};
    font-size:  ${props => props.fonteSize || 16}px;
    text-decoration: none;
    text-align: center;
    border: 0;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
      }
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
