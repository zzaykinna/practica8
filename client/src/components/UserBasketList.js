import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import UserBasketItem from "./UserBasketItem";
import { Context } from "..";

const UserBasketList = observer(() => {
  const { basket } = useContext(Context);

  return (
    <Row className="d-flex">
      {/* Статус: {order.status} */}
      {basket.userBasket.map((basket) => (
        <UserBasketItem key={basket.id} basket={basket} />
      ))}
    </Row>
  );
});

export default UserBasketList;
