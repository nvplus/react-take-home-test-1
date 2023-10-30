import { Button, Card } from "react-bootstrap";
import { IContact } from "../data/contacts";
import { apiDeleteContact } from "../data/contacts";
import { EditContactModal } from "./EditContactModal";

interface ContactTileProps {
    contact: IContact;
};

export const ContactTile = (props:ContactTileProps) => {
    const { name, phone, email, age, id } = props.contact;
    
    const onClickDelete = () => {
        apiDeleteContact(id);
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{phone}</Card.Text>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{age} years old</Card.Text>
                <EditContactModal contact={props.contact} />
                <Button variant="danger" onClick={onClickDelete}>Delete</Button>
            </Card.Body>
        </Card>
    )
};