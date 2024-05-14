import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import BasketItem from "./BasketItem";
import { Context } from "../index";

const BasketList = observer(() => {
    const { basket } = useContext(Context);

  return <Row className="d-flex">
    {basket.baskets.map(basket => 
    <BasketItem key={basket.id} basket={basket}/> 
    )}
  </Row>;
});

export default BasketList;
