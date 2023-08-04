import React, { useState } from "react";
import firebase from "firebase/app"
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services";

const ContactForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [document, setDocument] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            await addDoc(collection(db, 'orders'), {
                name,
                email,
                message,
                time
            })
        } catch (error) {
            console.log(error);            
        }
    }

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
                    <input type="text" placeholder="E/mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Document" value={document} onChange={(e) => setDocument(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
            </form>
        </>
    )


}

export default ContactForm