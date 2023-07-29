import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import "./item.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Item = ({ id, image, name, category, description, price, stock }) => {
    const navigate = useNavigate()

    const onShowDetails = (id) => {
        navigate(`/products/${id}`)
    }


    return (
        <Col>
            <Card style={{ width: '18rem' }} key={id} className='card'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name.toUpperCase()}</Card.Title>
                    <Card.Text className='cardDescription'>{description}
                    </Card.Text>
                    <Card.Text>{category}</Card.Text>
                    <Card.Text>U$D {price}</Card.Text>
                    <button variant="primary" className='cardButton' onClick={() => onShowDetails(id)} type="button">View product</button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;