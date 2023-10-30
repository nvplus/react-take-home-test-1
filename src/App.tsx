import { useEffect, useState, ReactElement} from 'react';
import { IContact } from './data/contacts';
import { ContactTileDisplay } from './components/ContactTileDisplay';
import { AddContactModal } from './components/AddContactModal';

import { apiFetchAllContacts } from "./data/contacts/api";

const App = (): ReactElement => {
    const [activeContacts, setActiveContacts] = useState<IContact[] | undefined>();

    useEffect(() => {
        apiFetchAllContacts()
        .then((res: IContact[]) => {
            setActiveContacts(res);
        })
        .catch((reason:any) => console.log(reason));
    });

    return (
        <div className="App container">
            <h1>Your Contacts</h1>
            <ContactTileDisplay contacts={activeContacts} />
            <br />
            <AddContactModal />
        </div>
    )
}

export default App;
