import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { fetchUserBasket } from "../../http/productAPI";
import { Alert, Button, Col, Container, Stack } from "react-bootstrap";
import UserOrderList from "../UserBasketList";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";


const Basket = observer(() => {
  const { basket } = useContext(Context);
  const { id } = useParams();

  const [show, setShow] = useState(false);

  console.log("id = ", id);

  useEffect(() => {
    fetchUserBasket(id).then((data) => {
    basket.setUserBasket(data);
    });
  }, []);

  return (
    <Container className="mt-3">
      {basket.userBasket ? (
        <>
          <h2>Выбрано:</h2>
          <Col md={12}>
            <UserOrderList />
          </Col>
          

          <Stack className="d-flex align-items-end">
            <Alert show={show} variant="light">
              <Alert.Heading>Уведомление о заказе</Alert.Heading>
              <h>
                Вы только что оформили заказ. Для его получения необходимо оплатить его в питомнике
              </h>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(false)}
                  variant="outline-secondary"
                >
                  Закрыть
                </Button>
              </div>
            </Alert>

            {!show && (
              <Button variant="outline-secondary" size="lg" className="m-3"  onClick={() => setShow(true)}>Заказать</Button>
            )}
          </Stack>
        </>
      ) : (
        <Container>Вы ещё ничего не выбрали</Container>
      )}
    </Container>
  );
});

export default Basket;