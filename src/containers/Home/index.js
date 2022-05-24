import React, { useState, useRef } from "react"

import axios from "axios"

import ImgHome from '../../assets/img-home.png'

import H1 from '../../components/Title'
import Button from '../../components/Button'

import { Container, Image, ContainerItems, InputLabel, Input } from './styles'
import { useHistory } from "react-router-dom"

function App() {

    const [orders, setOrders] = useState([]);
    const inputOrder = useRef();
    const inputClientName = useRef();
    const history = useHistory();

    async function addNewOrder() {
        const { data: newOrder } = await axios.post("http://localhost:3001/order", { order: inputOrder.current.value, clientName: inputClientName.current.value });
    
        setOrders([...orders, newOrder])
    
        history.push("/pedidos");
      }

    return (
        <Container>
            <Image alt="home-logo" src={ImgHome} />
            <H1>Faça seu pedido!</H1>

            <ContainerItems>
                <InputLabel>Pedido</InputLabel>
                <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada" />
                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={inputClientName} placeholder="Steve Jobs" />
            </ContainerItems>
            <Button onClick={addNewOrder}>Novo Pedido</Button>
        </Container>
    )
}

export default App