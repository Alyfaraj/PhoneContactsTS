import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { FC, useContext } from 'react'
import Dimensions from '../themes/Dimensions'
import Colors from '../themes/Colors'
import { AppContext } from '../context/AppContext'
import { ContactsContextType } from '../types/contacts'

type Props = {
    searchWord?: string,
}

const Header = ({ searchWord }: Props) => {
    const { selectedContacts } = useContext(AppContext) as ContactsContextType

    return (
        <SafeAreaView style={styles.conainer} >
            <View style={styles.row} >
                <Text style={styles.canselText} >Cansel</Text>
                <View style={{ alignItems: 'center' }} >
                    <Text style={styles.selectedText} >Add particpants</Text>
                    <Text style={{ color: Colors.white, fontSize: 12 }}>{selectedContacts?.length} / 256</Text>
                </View>
                <Text style={[styles.canselText, { color: selectedContacts?.length ? Colors.textColor : 'grey' }]} >Next</Text>
            </View>
            <View style={styles.searchContainer} >
                <Text style={{ color: Colors.white }} >Search</Text>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    conainer: {
        width: Dimensions.DEVICE_WIDTH,
        paddingVertical: 16,
        paddingHorizontal: Dimensions.DEVICE_WIDTH * .05,
        backgroundColor: Colors.Gray,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    canselText: {
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: '600'
    },
    selectedText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5
    },
    searchContainer: {
        width: Dimensions.DEVICE_WIDTH * .9,
        borderRadius: 10,
        alignSelf: 'center',
        height: 40,
        backgroundColor: 'rgba(77,75,80,1)',
        marginTop: 10,
        paddingHorizontal: Dimensions.DEVICE_WIDTH * .03,
        alignItems: 'center',
        flexDirection: 'row'
    }
})