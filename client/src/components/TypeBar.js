import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const { product } = useContext(Context)
    return (
        <div>
            <ListGroup className="mt-1">
                {product.categores.map(category => (
                    <ListGroup.Item action variant='secondary'
                        style={{ cursor: 'pointer' }}
                        active={category.id === product.selectedCategory.id}
                        onClick={() => product.setSelectedCategory(category)}
                        key={category.id}>

                        {category.name}
                        
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
});

export default TypeBar;