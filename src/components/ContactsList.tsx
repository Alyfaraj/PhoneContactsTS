import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ContactsContextType } from '../types/contacts'
import { AppContext } from '../context/AppContext'
import ContactItem from './ContactItem'

const ContactsList = () => {
    const { contacts } = useContext(AppContext) as ContactsContextType

    return (
        <FlatList
            data={contacts}
            renderItem={({ item }) => <ContactItem {...item} />}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default ContactsList

const styles = StyleSheet.create({})