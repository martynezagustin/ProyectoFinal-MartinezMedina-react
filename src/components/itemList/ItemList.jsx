import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from '../item/Item';
import "./itemList.css"

function ItemList({productos}) {
  return (
    <Container>
      <Row className='row'>
        {productos.map((producto) => (
          //producto en spread pasa las propiedades individualmente
            <Item {...producto} key={producto.id} />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;