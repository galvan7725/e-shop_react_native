import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

let { width } = Dimensions.get('window');

const ProductList = (props) =>{
const { item } = props;
return(
    <TouchableOpacity
     style={{width: '50%'}} 
     onPress={()=> props.navigation.navigate('Product Detail', { item })}
     >
        <View style={{width : width /2}}>
            <ProductCard {...item} />
        </View>
    </TouchableOpacity>
)
}

ProductList.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string,
        countInStock: PropTypes.number.isRequired
    })
}


export default ProductList;

