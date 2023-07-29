import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../item/Item';
import "./grid.css"

function Columns({productos}) {
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

export default Columns;