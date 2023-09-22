import React, {useState} from "react";
import List from "../List";
import Form from "../Form";
import { FormData } from "../../utils/types";
import "./style.css"

const defaultValues: FormData[] = [
    {
        id: 1,
        fullName: "Harry Potter",
        phoneNumber: "0507 111 11 11"
    },
    {
        id: 2,
        fullName: "Hermione Granger",
        phoneNumber: "0507 222 22 22"
    },
    {
        id: 3,
        fullName: "Ron Weasley",
        phoneNumber: "0507 333 33 33"
    }
]

const Contacts: React.FC = () => {
    const [contacts, setContacts] = useState<FormData[]>(defaultValues)

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} setContacts={setContacts}/>
            <Form contacts={contacts} setContacts={setContacts} />
        </div>
    )
}

export default Contacts