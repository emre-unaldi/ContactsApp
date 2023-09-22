import React, {useState} from "react";
import {FormData, ChildComponentProps} from "../../utils/types";

const List: React.FC<ChildComponentProps> = ({contacts, setContacts}) => {
    const [filterText, setFilterText] = useState<string>("")

    const filtered: FormData[] = contacts.filter((item: FormData) => {
        return Object.keys(item).some((key: string): boolean => {
            return (item as any)[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        })
    })

    const removeContactItem = (id: number): void => {
        const updatedContacts: FormData[] = contacts.filter((item: FormData): boolean => item.id !== id)
        setContacts(updatedContacts)
    }

    return (
        <div>
            <input
                placeholder="Filter Contact"
                value={filterText}
                onChange={((e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value))}
            />
            <ul className="list">
                {
                    filtered.map(
                        (item: FormData, index: number) => (
                            <li key={index}>
                                <span>{item.id} - {item.fullName} : [{item.phoneNumber}]</span>
                                <div>
                                    <button
                                        className="removeBtn"
                                        onClick={() => removeContactItem(item.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
            <p><b>{`Total Contacts (${filtered.length})`}</b></p>
        </div>
    )
}

export default List;