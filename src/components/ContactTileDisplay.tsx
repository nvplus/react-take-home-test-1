import { IContact } from "../data/contacts";
import { ContactTile } from "./ContactTile";

interface ContactTileDisplayProps {
    contacts: IContact[] | undefined;
};

export const ContactTileDisplay = (props:ContactTileDisplayProps) => {
    const { contacts } = props;

    if (!contacts || contacts.length === 0){
        return <>No contacts to display</>
    }

    // Comparison function between names to sort contact list alphabetically
    const compare = (a:IContact, b:IContact) => {
        if (a.name < b.name) {
            return -1;
        }

        if (a.name > b.name) {
            return 1;
        }

        return 0
    }   

    return (
        contacts.sort(compare).map(contact => <ContactTile contact={contact} key={contact.name} />)
    )
};