import React, { createContext, useEffect, useState } from 'react';
import { Contact, ContactsContextType } from '../types/contacts'
import { getAll } from 'react-native-contacts'
import { PermissionsAndroid, Platform } from 'react-native';

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


    // search with name in contacts list 
    const onSearch = (word: string) => {
        if (word) {
            let result = contacts.filter(item =>
                Object.keys(item).some(k => item.givenName.includes(word))
            );

            setContacts(result);
        }
        else {
            getllConteacts()
        }
    }


    // get all contacts from react-native-contacts
    const getllConteacts = () => {
        getAll()
            .then(allContacts => setContacts(allContacts))
            .catch(err => console.log(err))
    }

    const getPermissionsAndroid = () => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                'title': 'Contacts',
                'message': 'This app would like to view your contacts.',
                'buttonPositive': 'Please accept bare mortal'
            }
        )
            .then(() => {
                getllConteacts()
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        if (Platform.OS == 'android') {
            getPermissionsAndroid()
        }
        getllConteacts()
    }, [])


    return (
        <AppContext.Provider
            value={{
                addToList,
                removeFromList,
                contacts,
                isContactSelected,
                selectedContacts,
                onSearch
            }}
        >
            {children}
        </AppContext.Provider>
    );
};


export const Consumer = AppContext.Consumer;
