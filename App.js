import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Navigators
import Main from './Navigators/Main';

//Screens
import Header from './Shared/Header';
import ProductContainer from './Screens/Products/ProductContainer';

export default function App() {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
   
  }, []);

  return (
    <NavigationContainer>
        <Header />
        <Main />
    </NavigationContainer>
  );
}

