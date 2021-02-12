import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Shared/Header';
import ProductContainer from './Screens/Products/ProductContainer';

export default function App() {
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
    backgroundColor: '#CFF6F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:0
  },
});
