import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom"
import Table from 'react-bootstrap/Table';


const Cart = () => {
  const { cart, cartTotal, clear, removeItem, sumTotal } = useContext(CartContext)

  if (sumTotal() === 0) {
    return (
      <div>
        <div>
          <h2>Tu carrito está vacío!</h2>
          <Link to="/">Volver al menú</Link>
        </div>
      </div>
    )
  } else {

    
    return (
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => removeItem(item.id)}>Remover elemento</button>
            </td>
          </tr>
        ))}
        <button onClick={() => clear()}>Vaciar carrito</button>
      <Link to={`/checkout`} className="btnFinishPurchase"><button>Finalizar compra</button></Link>
      </tbody>
    </Table>
  );
}
}

export default Cart