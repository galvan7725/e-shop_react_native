import React, {useState, useEffect} from 'react';
import { View ,StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

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
        <Container style={{marginTop:0}}>
            <Header searchBar rounded >
                <Item>
                    <Icon name='ios-search' />
                    <Input 
                    placeholder='Search'

                    />
                </Item>
            </Header>
            <View>
            <Text style={{marginTop:0}}>Product Container</Text>
            <View style={styles.mainContainer}>
            <FlatList
                style={styles.list}
                data = {products}
                renderItem ={({item}) => <ProductList key={item.id} item ={item}/>}
                keyExtractor = {item => item.name}
                numColumns = {2}
                
            />
            </View>
        </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        marginTop: 0,
        height:'100%',
        marginBottom: 0,
        overflow: 'scroll'
    },
    list:{
    }
})


export default ProductContainer;