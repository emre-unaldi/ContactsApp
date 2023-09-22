import React from "react";

export type FormData = {
    id: number
    fullName: string,
    phoneNumber: string
}
export interface ChildComponentProps {
    contacts: FormData[];
    setContacts: React.Dispatch<React.SetStateAction<FormData[]>>;
}