import React, { FC, useContext, useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import ContactItem from "./src/components/ContactItem";
import ContactsList from "./src/components/ContactsList";
import Header from "./src/components/Header";
import { AppContext, AppProvider } from './src/context/AppContext'
import Colors from "./src/themes/Colors";
import { ContactsContextType } from "./src/types/contacts";
import TobBanner from "./src/components/TobBanner";



const App: FC = () => {
  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} >
        <Header />
        <TobBanner />
        <ContactsList />
      </SafeAreaView>
    </AppProvider>
  )
}


export default App