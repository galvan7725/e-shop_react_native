import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';


const Cart = (props) =>{
    return(
        <View style={{ flex: 1}}>            
            {props.cartItems.map((item,i)=>{
                return(
                    <Text key={i}>{item.product.name}</Text>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) =>{
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired
}


export default connect(mapStateToProps,null)(Cart);
