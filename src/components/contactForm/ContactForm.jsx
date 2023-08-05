import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services";
import { CartContext } from "../../context/CartContext";

const ContactForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [validateEmail, setValidateEmail] = useState("")
    const [document, setDocument] = useState("")
    const [address, setAddress] = useState("")
    const [orderId, setOrderId] = useState("")


    const {cart,clear,sumTotal} = useContext(CartContext)
    const handleSubmit = async(e) => {
        e.preventDefault()

        if (email !== validateEmail) {
            alert("Los correos electrónicos no coinciden");
          } else {
            // Verifica si los campos requeridos están llenos
            if (!name || !surname || !email || !validateEmail || !document || !address) {
              alert("Por favor, completa todos los campos obligatorios");
            } else {
              try {
                let order = {
                  buyer: { name, surname, email, document, address },
                  purchase: cart,
                  total: sumTotal(),
                  time: serverTimestamp(),
                };
                const orderData = await addDoc(collection(db, "orders"), order);
                setOrderId(orderData.id);
                clear();
              } catch (error) {
                console.log(error);
              }
            }
          }
        };

    return (
        <>
            <div>
                <h2>Checkout pibe</h2>
            </div>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Repeat your email" value={validateEmail} onChange={(e) => setValidateEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="Document" value={document} onChange={(e) => setDocument(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </>
    )


}

export default ContactForm