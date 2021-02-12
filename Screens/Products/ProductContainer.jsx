import React, {useState, useEffect} from 'react';
import { View, Text ,StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import ProductList from './ProductList';
//Example data
const data =  require('../../assets/data/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([]);
        }
    }, []);

    return(
        <View>
            <Text style={{marginTop:100}}>Product Container</Text>
            <View style={{marginTop: 20}}>
            <FlatList
                data = {products}
                renderItem ={({item}) => <ProductList key={item.id} item ={item}/>}
                keyExtractor = {item => item.name}
                numColumns = {2}
            />
            </View>
        </View>
    )
}


export default ProductContainer;