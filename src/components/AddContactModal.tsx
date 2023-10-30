import { useState } from "react";
import { apiAddContact } from "../data/contacts";
import { generateUUID } from "../util/guid";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import { ContactForm } from "./ContactForm";

export const AddContactModal = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number>(18);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onClickAddContact = () => {
        apiAddContact({
            name: name,
            phone: phone,
            email: email,
            age: age,
            id: generateUUID(),
        });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Contact
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ContactForm 
                        name={name}
                        phone={phone}
                        email={email}
                        age={age}
                        onChangeAge={newAge => setAge(newAge)}
                        onChangeEmail={newEmail => setEmail(newEmail)}
                        onChangeName={newName => setName(newName)}
                        onChangePhone={newPhone => setPhone(newPhone)}
                        onSubmit={onClickAddContact}
                    />  
                </Modal.Body>
            </Modal>
        </>
  );
};