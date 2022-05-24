import styled from 'styled-components';

export const Container = styled.div`
background: #000;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Image = styled.img`
margin: 10px 0 25px;
width: 342px;
`;

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
`;

export const InputLabel = styled.label`
color: #FFF;
font-weight: 700;
font-size: 18px;
margin-left: 20px;
`;

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
padding: 15px 18px;
color: #FFFFFF;
font-size: 18px;
font-weight: 300;
margin-bottom: 40px;
`;