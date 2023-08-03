import React, {useState} from "react";
import firebase from "firebase/app"

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const db = firebase.firestore()
        db.collection("orders").add({
            name,
            email,
            message,
            time
        })
    }
    

}