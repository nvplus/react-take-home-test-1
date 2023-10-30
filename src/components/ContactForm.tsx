import { Button, Form } from "react-bootstrap"

interface ContactFormProps {
    name: string;
    email: string | undefined;
    phone: string | undefined;
    age: number | undefined;
    onChangeName: (name: string) => void;
    onChangeEmail: (email: string) => void;
    onChangePhone: (phone: string) => void;
    onChangeAge: (age: number) => void;
    onSubmit: () => void;
};

// We make this a controlled component so that both add/edit forms can use this
export const ContactForm = (props:ContactFormProps) => {
    const {
        name,
        email,
        phone,
        age,
        onChangeName,
        onChangeEmail,
        onChangePhone,
        onChangeAge,
        onSubmit,
    } = props;

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e:any) => onChangeName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e:any) => onChangeEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={(e:any) => onChangePhone(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" value={age} onChange={(e:any) => onChangeAge(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
            </Button>
        </Form>
    )
}