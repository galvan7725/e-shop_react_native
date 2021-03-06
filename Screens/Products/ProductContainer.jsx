import React, {useState, useEffect} from 'react';
import { View ,StyleSheet, ActivityIndicator, FlatList, ScrollView, SafeAreaView,Dimensions, Keyboard} from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
//custom hooks
import { useContainer } from '../../Functions/productFunctions/productContainer';

import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';
//Example data
//const data =  require('../../assets/data/products.json');
let {height} = Dimensions.get("window");

const ProductContainer = (props) => {


    const {products, setProducts,
        productsFiltered, setProductsFiltered,
        focus, setFocus,
        textSearch,setTextSearch,
        categories, setCategories,
        active, setActive,
        initialState, setInitialState,
        productsCtg, setProductsCtg } = useContainer({
        initialProducts:[],
        initialProductsFiltered:[],
        initialFocus: false, 
        initialTextSearch: '',
        initialCategories: [],
        initialProductsCtg: []
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

    //categories
     const changeCtg = (ctg) =>{
         {
             ctg === "all" ? [setProductsCtg(initialState), setActive(true)]
                           : setProductsCtg(products.filter((i)=>i.category.$oid === ctg, setActive(true)));
         }
     }

    return(
        <Container style={{marginTop:0, marginBottom:0, backgroundColor:'#CFF6F8'}}>
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
                navigation={props.navigation}
                productsFiltered = {productsFiltered}
                />
            ) : (
                <View style={{marginBottom:0}}>
                    <ScrollView >
                        <View style={{height: '100%',marginBottom:0}}>
                        <View style={{backgroundColor:'#fff'}}> 
                            <Banner />
                        </View>
                        <View style={{backgroundColor:'#D1D7D6'}}>
                            <CategoryFilter 
                                categories={categories}
                                categoryFilter={changeCtg}
                                productsCtg={productsCtg}
                                active={active}
                                setActive={setActive}
                            />
                        </View>
                        {productsCtg.length > 0 ? 
                            (
                             <View style={styles.listContainer}>
                                {productsCtg.map((item)=>{
                                    return(
                                        <ProductList
                                            navigation={props.navigation}
                                            key={item._id.$oid}
                                            item={item}
                                        />
                                    )
                                })}
                            </View>
                            ):(
                            <View style={[styles.center,{height:'40%'}]}>
                                <Text>No products found</Text>
                            </View>
                            )
                        }
                        
                </View>
                    </ScrollView>
                </View>
            )}

            
        </Container>
    )
}

const styles = StyleSheet.create({
    listContainer : {
        height: height,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: 0,
        //height:'100%',
        marginBottom: 200,
        
        backgroundColor:'#CFF6F8'
    },
    center:{
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop:100
    }
})


export default ProductContainer;