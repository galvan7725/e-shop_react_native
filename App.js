import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import Header from './Shared/Header';
import ProductContainer from './Screens/Products/ProductContainer';

export default function App() {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
   
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:0
  },
});
