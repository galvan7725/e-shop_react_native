import React, {useState, useEffect} from 'react';
import { View ,StyleSheet, ActivityIndicator, FlatList, ScrollView} from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';
import Banner from '../../Shared/Banner';
//Example data
const data =  require('../../assets/data/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus(false);
        }
    }, []);

    const searchProduct = (text)=>{
        setProductsFiltered(
            products.filter((i)=> i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = ()=>{
        setFocus(true);
    }

    const onBlur = ()=>{
        setFocus(false);
    }

    return(
        <Container style={{marginTop:0, marginBottom:100}}>
            <Header searchBar rounded  >
                <Item style={{borderRadius:20}}
>
                    <Icon name='ios-search' />
                    <Input 
                    placeholder='Search'
                    onFocus={openList}
                    onChangeText = {(text) => searchProduct(text)}
                    />
                    {focus == true ? (
                        <Icon onPress={onBlur} name='ios-close' />
                    ): null}
                </Item>
            </Header>
            {focus == true ? (
                <SearchedProducts 
                productsFiltered = {productsFiltered}
                />
            ) : (
                <ScrollView>
                    <View>
                        <View> 
                            <Banner />
                        </View>
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
                </ScrollView>
            )}

            
        </Container>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        marginTop: 0,
        //height:'100%',
        marginBottom: 0,
        overflow: 'scroll',
        backgroundColor:'#CFF6F8'
    },
    list:{
    }
})


export default ProductContainer;