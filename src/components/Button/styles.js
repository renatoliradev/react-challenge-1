import styled from 'styled-components'

export const Button = styled.button`
width: 342px;
height: 68px;
background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
font-weight: 900;
font-size: 17px;
color: #FFFFFF;
border: none;
cursor: pointer;
margin-top: 70px;
margin-bottom: 20px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`;