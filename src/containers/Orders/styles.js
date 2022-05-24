import styled from 'styled-components'

export const Container = styled.div`
background: #000;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Image = styled.img`
margin-top: 10px;
margin-bottom: 35px;
`;

export const ContainerItems = styled.div`
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
width: 342px;
height: 100%;
overflow-y: auto;
padding: 10px;
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

export const OrderDescription = styled.p`
font-size: 18px;
font-weight: 300;
`;

export const OrderClientName = styled.p`
font-size: 18px;
font-weight: 700;
`;

export const ContainerActions = styled.div`
display: flex;
flex-direction: column;
align-self: center;
gap: 20px;
margin-right: 15px;

button{
border: none;
background: none;
cursor: pointer;  
}
`;

export const ContainerItemDetails = styled.li`
margin: 5px 20px;
color: #FFFFFF;
display: flex;
flex-direction: column;
align-self: center;
gap: 20px;


`;

export const Img = styled.img`
width: 24px;
height: 28px;
`;