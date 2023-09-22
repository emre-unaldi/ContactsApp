import React, {useEffect, useState} from "react";
import {FormData, ChildComponentProps} from "../../utils/types";

const Form: React.FC<ChildComponentProps> = ({contacts, setContacts}) => {
    const initialValues: FormData = {
        id: contacts.length,
        fullName: "",
        phoneNumber: ""
    }
    const [form, setForm] = useState<FormData>(initialValues)

    useEffect(() => {
        setForm(initialValues)
    }, [contacts])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({
                ...form,
                id: contacts.length + 1,
                [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = (e: React.FormEvent): void | boolean => {
        e.preventDefault()

        if (form.fullName === "" || form.phoneNumber === "") {
            return false;
        }

        setContacts([...contacts, form])
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={onChangeInput}
                    value={form.fullName}
                />
            </div>
            <div>
                <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={onChangeInput}
                    value={form.phoneNumber}
                />
            </div>
            <div className="addBtn">
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form