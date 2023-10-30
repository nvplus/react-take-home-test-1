import { useState } from "react";
import { IContact, apiUpdateContact } from "../data/contacts";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import { ContactForm } from "./ContactForm";

interface EditContactModalProps {
    contact: IContact;
}

export const EditContactModal = (props: EditContactModalProps) => {
    const { contact } = props;

    const [name, setName] = useState<string>(contact.name);
    const [phone, setPhone] = useState<string | undefined>(contact.phone);
    const [email, setEmail] = useState<string | undefined>(contact.email);
    const [age, setAge] = useState<number | undefined>(contact.age);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onClickEditContact = () => {
        apiUpdateContact({
            name: name,
            phone: phone,
            email: email,
            age: age,
            id: contact.id,
        });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
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
                        onSubmit={onClickEditContact}
                    />  
                </Modal.Body>
            </Modal>
        </>
  );
};