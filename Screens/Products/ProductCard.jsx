import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

var {width} = Dimensions.get("window");

const ProductCard = (props) => {
    const { name, price, image, countInStock } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image}
            resizeMode = "contain"
            source={{uri: image ? image : 'https://i.pinimg.com/originals/f1/47/2c/f1472cd9f017531ed6c575beeeabb368.png'}}
            />
            <View styles={styles.card}/>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 12)+ '...' : name}
            </Text>
            <Text style={styles.price}>
                ${price}
            </Text>
            {countInStock > 0 ? (
                <View style={{marginBottom: 60}}>
                    <Button title={'Add'} color={'green'}></Button>
                 </View>
            ): <Text style={{marginTop: 20}}>Currently unavailable</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
      width: width / 2 - 20,
      height: width / 1.7,
      padding : 10,
      borderRadius: 10,
      marginTop: 55,
      marginBottom: 5,
      marginLeft: 10,
      alignItems: 'center',
      elevation: 8,
      backgroundColor: 'white',
  },
  image :{
      width : width / 2 -20 - 10,
      height : width / 2 -20 - 30,
      backgroundColor : 'transparent',
      position: 'absolute',
      top: -45
  },
  card :{
      marginBottom : 10,
      height : width / 2 - 20 - 90,
      backgroundColor : 'transparent',
      width : width / 2 - 20 - 10
  },
  title:{
      fontWeight : 'bold',
      fontSize : 14,
      textAlign: 'center',
      marginTop: 70
  },
  price :{
      fontSize: 20,
      color: 'orange',
      marginTop: 10
  }      
})

export default ProductCard;

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    countInStock: PropTypes.number.isRequired
}