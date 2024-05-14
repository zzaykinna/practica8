import React, { useContext, useState } from 'react'
import { Modal, Form, Button, Dropdown, Container } from 'react-bootstrap';
import { Context } from '../../index';
import { createProduct, fetchCategory} from '../../http/productAPI';
import {  useEffect } from 'react'
import {observer} from "mobx-react-lite";

export const CreateProduct = observer(({ show, onHide }) => {
    const { product } = useContext(Context)
    const [name, setName]=useState('')
    const [price, setPrice]=useState('')
    const [file, setFile]=useState(null)
    const [category, setCategory]=useState('')
    useEffect(() => {
        fetchCategory().then(data=>product.setCategores(data))
      }, [])
    const selectFile=e=>{
        setFile(e.target.files[0])
    }
    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('categoryId', product.selectedCategory.id)
        createProduct(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black' }}>
                    Добавить продукт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Container className='d-flex justify-content-around'>
                        <Dropdown className='mt-3'>
                        <Dropdown.Toggle variant="secondary">{product.selectedCategory.name || "Выберите категорию"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {product.categores.map(category =>
                                    <Dropdown.Item 
                                        key={category.id} 
                                        onClick={() => product.setSelectedCategory(category)}>{category.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>

                    <Form.Control className='mt-3'
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        placeholder='Введите название продукта'
                    />
                    <Form.Control 
                        className='mt-3'
                        value={price}
                        onChange={e=>setPrice(Number(e.target.value))}
                        placeholder='Введите стоимость продукта'
                        type='number'
                    />
                    <Form.Control className='mt-3'
                        type="file"
                        onChange={selectFile}
                    />

                    <hr />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-secondary" onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
});