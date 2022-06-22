import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ContactsContextType } from '../types/contacts'
import { AppContext } from '../context/AppContext'
import ContactItem from './ContactItem'
import Dimensions from '../themes/Dimensions'
import Colors from '../themes/Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const TobBanner = () => {
    const { selectedContacts, removeFromList } = useContext(AppContext) as ContactsContextType

    return (
        <View style={{ width: '100%', borderBottomWidth: selectedContacts?.length ? 20 : 0, borderBottomColor: Colors.Gray }} >
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={selectedContacts}
                renderItem={({ item }) => <Pressable onPress={() => removeFromList(item.recordID)} >
                    <Image
                        style={styles.image}
                        source={{ uri: item.hasThumbnail ? item.thumbnailPath : 'https://asota.umobile.edu/wp-content/uploads/2021/08/Person-icon.jpeg' }} />
                    <Icon
                        name='close-circle'
                        size={22}
                        color={'white'}
                        style={styles.icon} />
                </Pressable>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default TobBanner

const styles = StyleSheet.create({
    image: {
        width: 65,
        height: 65,
        borderRadius: 35,
        marginStart: Dimensions.DEVICE_WIDTH * .03,
        backgroundColor: '#ccc',
        marginVertical: 16,
    },
    icon: {
        position: 'absolute',
        top: 11,
        right: -3,
        opacity:.7
    }
})