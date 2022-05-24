import React, { useState, useEffect } from 'react'
import ImgOrder from '../../assets/img-orders.png'
import Trash from '../../assets/trash.png'
import Check from '../../assets/check.png'
import H1 from '../../components/Title'
import Button from '../../components/Button'
import { Container, Image, ContainerItems, ContainerItemDetails, ContainerActions, OrderDescription, OrderClientName, Img } from './styles'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Orders() {

    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchOrders() {
            const { data: allOrders } = await axios.get("http://localhost:3001/order");

            setOrders(allOrders);
        }
        fetchOrders()
    }, [])

    function goBackPage() {
        history.push("/");
    }

    async function updateOrderStatus(orderId) {
        await axios.patch(`http://localhost:3001/order/${orderId}`)

        alert('Pedido Pronto!');
    }

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3001/order/${orderId}`)

        const newOrders = orders.filter((order) => order.id !== orderId);

        setOrders(newOrders);
    }

    return (
        <Container>

            <Image alt='order-logo' src={ImgOrder} />
            <H1>Pedidos</H1>

            <ul>
                {orders.map((order) => (
                    <ContainerItems>
                        <ContainerItemDetails>
                            <OrderDescription>{order.order}</OrderDescription>
                            <OrderClientName> {order.clientName}</OrderClientName>
                        </ContainerItemDetails>
                        <ContainerActions key={order.id}>
                            <button onClick={() => updateOrderStatus(order.id)}> <Img alt='check-button' src={Check} /> </button>
                            <button onClick={() => deleteOrder(order.id)}> <Img alt='delete-button' src={Trash} /> </button>
                        </ContainerActions>
                    </ContainerItems>
                ))}
            </ul>

            <Button isBack={true} onClick={goBackPage}>Voltar</Button>

        </Container>
    )
}

export default Orders