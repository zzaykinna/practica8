import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CreateCategory } from "../models/CreateCategory";
import { CreateProduct } from "../models/CreateProduct";
import BasketAll from '../models/BasketAll';

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);
    const [basketsVisible, setBasketsVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant="outline-secondary" className="m-4" onClick={() => setCategoryVisible(true)}>
                Добавить категорию
            </Button>
            <Button variant="outline-secondary" className="m-3" onClick={() => setProductVisible(true)}>
                Добавить товар
            </Button>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />

            <Button variant="outline-secondary" className="mt-4" onClick={() => setBasketsVisible(true)}>
                Заказы
            </Button>
            <BasketAll show={basketsVisible} onHide={() => setBasketsVisible(false)} />
        </Container>
    );
};

export default Admin;