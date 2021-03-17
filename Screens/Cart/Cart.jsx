import React from 'react';
import {View, StyleSheet,Dimensions, Button, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Container, Left, Right, H1, ListItem, Thumbnail,Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';


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
                  <ScrollView>
                  {cartItems.map((item,index) =>{
                      return (
                          
                              <ListItem
                          style={styles.listItem}
                          key={index}
                          avatar
                          >
                              <Left>
                                  <Thumbnail source={{
                                      uri: item.product.image ? 
                                      item.product.image : 
                                      'https://i.pinimg.com/originals/f1/47/2c/f1472cd9f017531ed6c575beeeabb368.png'
                                  }} />
                              </Left>
                              <Body style={styles.body}>
                                  <Left>
                                      <Text>{item.product.name}</Text>
                                  </Left>
                                  <Right>
                                      <Text>$ {item.product.price}</Text>
                                  </Right>
                              </Body>
                          </ListItem>
                          
                      )
                  })}
                  </ScrollView>
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
        clearCart: ()=>{ dispatch(actions.clearCart())}
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);
