import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Contact, ContactsContextType } from '../types/contacts'
import Dimensions from '../themes/Dimensions'
import Colors from '../themes/Colors'
import { AppContext } from '../context/AppContext'



const ContactItem = (item: Contact) => {
    const {
        addToList,
        removeFromList,
        isContactSelected } = useContext(AppContext) as ContactsContextType



    const onItemPress = (): void => {
        if (isContactSelected(item.recordID)) {
            removeFromList(item.recordID)
        }
        else {
            addToList(item)
        }
    }


    return (
        <Pressable onPress={onItemPress} >
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Image source={{ uri: item.hasThumbnail ? item.thumbnailPath : 'https://asota.umobile.edu/wp-content/uploads/2021/08/Person-icon.jpeg' }} style={styles.profilePic} />
                    <View>
                        <Text style={styles.name} >{item.givenName} {item.familyName}</Text>
                        {item.jobTitle ? <Text style={styles.jobTitle} >{item.jobTitle}</Text> : null}
                    </View>
                </View>
                <Text style={{ color: Colors.textColor }} >{isContactSelected(item.recordID) ? 'Selected' : 'NotSelected'}</Text>
            </View>
        </Pressable>

    )
}

export default ContactItem

const styles = StyleSheet.create({
    container: {
        width: Dimensions.DEVICE_WIDTH * .96,
        flexDirection: 'row',
        paddingHorizontal: Dimensions.DEVICE_WIDTH * .02,
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 9,
        justifyContent: 'space-between',
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(200,200,200,.2)'

    },
    profilePic: {
        width: 45,
        height: 45,
        borderRadius: 30,
        backgroundColor: '#ccc',
        marginEnd: 10,
    },
    name: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    jobTitle: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: '400',
        opacity: .7,
        marginTop: 4
    }
})