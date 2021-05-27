import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Left, Right, ListItem, Thumbnail, Body } from 'native-base';


const CartItem = (props) => {
    const item = props.item;
    const [quantity, setQuantity] = useState(props.item.quantity);


    return (
        <ListItem
            style={styles.listItem}
            avatar
        >
            <Left>
                <Thumbnail source={{
                    uri: item.item.product.image ?
                        item.item.product.image :
                        'https://i.pinimg.com/originals/f1/47/2c/f1472cd9f017531ed6c575beeeabb368.png'
                }} />
            </Left>
            <Body style={styles.body}>
                <Left>
                    <Text>{item.item.product.name}</Text>
                </Left>
                <Right>
                    <Text>$ {item.item.product.price}</Text>
                </Right>
            </Body>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    listItem:{
        alignItems: 'center',
        backgroundColor : 'white',
        justifyContent: 'center'
    },
    body:{
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
})


export default CartItem;