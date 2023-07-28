import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import "./item.css"

const Item = ({ id, image, name, category, description, price, stock, onShowDetails }) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }} key={id} className='card'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
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