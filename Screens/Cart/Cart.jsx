import React from 'react';
import {View, StyleSheet,Dimensions, Button, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Container, Left, Right, H1, ListItem, Thumbnail,Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from './CartItem';
//redux
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

const {width} = Dimensions.get('window');

const Cart = (props) =>{
    let total = 0;
    const { cartItems } = props;

    cartItems.forEach(cart => {
        return (total += cart.product.price)
    });

    return(
        <>            
          {cartItems.length > 0 ? (
              <Container>
                  <H1 style={{alignSelf: 'center'}}>Cart</H1>
                    <SwipeListView 
                    data={props.cartItems}
                    renderItem={(data) =>(
                        <CartItem item={data}/>
                    )}
                    renderHiddenItem={(data) =>(
                        <View style={styles.hiddeContainer}>
                            <TouchableOpacity 
                            style={styles.hiddenButton}
                            onPress={()=>props.removeFromCart(data.item)}
                            >
                                <Icon name="trash" color={"white"} size={30}/>
                            </TouchableOpacity>
                        </View>
                    )}
                    disableRightSwipe={true}
                    previewOpenDelay={3000}
                    friction={1000}
                    tension={40}
                    leftOpenValue={75}
                    stopLeftSwipe={75}
                    rightOpenValue={-75}

                    />
                  <View style={styles.bottomContainer}>
                    <Left>
                        <Text style={styles.price}>$ {total}</Text>
                    </Left>
                    <Right>
                        <Button
                        title="Clear"
                        onPress={()=> props.clearCart()}
                        />
                    </Right>
                    <Right style={{marginRight: 10}}>
                        <Button
                        title="Checkout"
                        onPress={()=> props.navigtion.navigate('Checkout')}
                        />
                    </Right>
                  </View>
              </Container>
          ):(
              <Container style={styles.emptyCart}>
                  <Icon name="shopping-cart" size={50} color="#5DADE2"/>
                  <H1>The shopping cart is empty</H1>
              </Container>
          )} 
        </>
    )
}

const styles = StyleSheet.create({
    emptyCart:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    bottomContainer:{
        flexDirection: 'row',
        position:'absolute',
        bottom:0,
        left:0,
        backgroundColor : 'white',
        elevation: 20
    },
    price:{
        fontSize: 18,
        margin:20,
        color: 'red'
    },
    hiddeContainer:{
        flex: 1,
        justifyContent:'flex-end',
        flexDirection: 'row',
    },
    hiddenButton:{
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:25,
        height: 70,
        width: width / 1.2
    }
})

const mapStateToProps = (state) =>{
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
}

mapDispatchToProps = (dispatch) =>{
    return{
        clearCart: ()=>{ dispatch(actions.clearCart())},
        removeFromCart :(item) => dispatch(actions.removeFromCart(item))
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);
