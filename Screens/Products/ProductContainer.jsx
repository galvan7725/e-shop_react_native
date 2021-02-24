import React, {useState, useEffect} from 'react';
import { View ,StyleSheet, ActivityIndicator, FlatList, ScrollView, SafeAreaView, Keyboard} from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
//custom hooks
import { useContainer } from '../../Functions/productFunctions/productContainer';

import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';
import Banner from '../../Shared/Banner';
//Example data
//const data =  require('../../assets/data/products.json');

const ProductContainer = () => {

    const {products, setProducts,productsFiltered, setProductsFiltered,focus, setFocus, textSearch,setTextSearch } = useContainer({
        initialProducts:[], initialProductsFiltered:[], initialFocus: false, initialTextSearch: ''
    });


    const searchProduct = (text)=>{
        setTextSearch(text);
        console.log(textSearch);
        setProductsFiltered(
            products.filter((i)=> i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = ()=>{
        if(focus){

        }else{
            setFocus(true);
        }
        
    }

    const onBlur = ()=>{
        setFocus(false);
        Keyboard.dismiss();

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
                    //onChangeText = {(text) => setTextSearch(text)}
                    onBlur={onBlur}
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
                <View style={{marginBottom:-50}}>
                    <ScrollView>
                        <View style={{height: '100%',marginBottom:0}}>
                        <View> 
                            <Banner />
                        </View>
                        <View style={styles.mainContainer}>
                        <FlatList
                            ListHeaderComponent={<></>}
                            style={styles.list}
                            data = {products}
                            renderItem ={({item}) => <ProductList key={item.id} item ={item}/>}
                            keyExtractor = {item => item.name}
                            numColumns = {2}
                            ListFooterComponent={<></>}
                            
                        />
                    </View>
                </View>
                    </ScrollView>
                </View>
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