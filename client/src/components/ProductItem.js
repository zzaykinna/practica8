import React from 'react';
import { useParams } from 'react-router-dom';
import {  useEffect, useState} from "react";
import { Card, Col } from "react-bootstrap";
import { ListGroup, Button } from "react-bootstrap";
import { addToCart, fetchProduct } from "../http/productAPI";

const ProductItem = ({product}) => {
  
    const id = product.id

    const createCart = (product) => {
        addToCart({
            product_id: id,
        })
            .then((data) => {
                alert("Товар добавлен в корзину!");
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
        console.log(id);
    };
    return (
        <Col md={3} className={"m-3"} style={{ width: '15vw' }} >
            <Card style={{ width: '15rem', marginLeft: '3vw', backgroundColor: "#F6F6F6" }}>
                <Card.Img width={200} height={200} variant="top" src={'http://localhost:5000/' + product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush" style={{ backgroundColor: "#E8E8E8" }}>
                    <ListGroup.Item>{product.price} ₽</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button className='button' variant="secondary" onClick={createCart} >В корзину</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default ProductItem;