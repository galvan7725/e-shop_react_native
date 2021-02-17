import React from 'react';
import { View, StyleSheet , Dimensions } from 'react-native';
import {  Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';
import PropTypes from 'prop-types';

let { width } = Dimensions.get("window");

const SearchedProducts = (props) =>{

    const { productsFiltered } = props;

    return (
        <Content style={{width: width}}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item)=>(
                    <ListItem
                    //onPress = {navigation}
                    key={item._id.$oid}
                    avatar
                    >
                        <Left>
                            <Thumbnail 
                            source={{uri: item.image ? item.image : 'https://i.pinimg.com/originals/f1/47/2c/f1472cd9f017531ed6c575beeeabb368.png'}}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                )
            )): (
                <View style={styles.center}>
                    <Text style={{alignSelf: 'center'}}>No products match the selected criteria</Text>
                </View>
            )}
        </Content>
    )
}

const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

SearchedProducts.propTypes = {
    productsFiltered: PropTypes.array.isRequired
}


export default SearchedProducts;

