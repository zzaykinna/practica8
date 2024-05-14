import React from "react";
import { Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UserBasketItem = ({ basket }) => {
  const navigate = useNavigate();
  return (
  <Card style={{ width: '18rem' }} className="m-3">
  <Card.Img variant="top"  
        width={150} height={220}
        className="mt-2"
        src={'http://localhost:5000/' + basket.img}
        style={{cursor:'pointer'}}/>
  <Card.Body>
    <Card.Title><h2>{basket.name}</h2></Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item style={{fontSize:'1.3vw'}}><span>{basket.price} ₽</span></ListGroup.Item>
  </ListGroup>
</Card>
  );
};

export default UserBasketItem;
