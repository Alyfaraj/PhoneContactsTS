import React, { createContext, useEffect, useState } from 'react';
import { Contact, ContactsContextType } from '../types/contacts'
import { getAll } from 'react-native-contacts'

export const AppContext = createContext<ContactsContextType | null>(null);

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [contacts, setContacts] = React.useState<Contact[]>([])
    const [selectedContacts, setSelectedContacts] = React.useState<Contact[]>([])


    //add contact to selected items 
    const addToList = (contact: Contact) => {
        setSelectedContacts([...selectedContacts, contact])
    }

    // remove item from selected items 
    const removeFromList = (id: string) => {
        let newSelectedContacts = selectedContacts.filter(item => item.recordID !== id)
        setSelectedContacts(newSelectedContacts)
    }


    // check item with selected items or not 
    const isContactSelected = (id: string) => {
        return selectedContacts.find(item => item.recordID == id)
    }


    const getllConteacts = () => {
        getAll()
            .then(allContacts => setContacts(allContacts))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getllConteacts()
    }, [])


    return (
        <AppContext.Provider
            value={{
                addToList,
                removeFromList,
                contacts,
                isContactSelected,
                selectedContacts
            }}
        >
            {children}
        </AppContext.Provider>
    );
};


export const Consumer = AppContext.Consumer;
