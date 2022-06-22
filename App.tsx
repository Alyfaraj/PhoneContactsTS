import React, { FC, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ContactsList from "./src/components/ContactsList";
import Header from "./src/components/Header";
import { AppContext, AppProvider } from './src/context/AppContext'
import Colors from "./src/themes/Colors";
import TobBanner from "./src/components/TobBanner";



const App: FC = () => {

  

  return (
    <AppProvider>
      <SafeAreaView style={{ backgroundColor: Colors.black }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <Header />
        <TobBanner />
        <ContactsList />
      </SafeAreaView>
    </AppProvider >
  )
}


export default App