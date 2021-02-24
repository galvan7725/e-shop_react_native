import React,{useState, useEffect} from 'react';
const data =  require('../../assets/data/products.json');


const useContainer =(props)=>{
    const {initialProducts, initialProductsFiltered,initialFocus, initialTextSearch} = props;

    const [products, setProducts] = useState(initialProducts);
    const [productsFiltered, setProductsFiltered] = useState(initialProductsFiltered);
    const [focus, setFocus] = useState(initialFocus);
    const [textSearch, setTextSearch] = useState(initialTextSearch);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setTextSearch(initialTextSearch);
        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus(false);
            setTextSearch('');
        }
    }, []);


    return {products, setProducts, productsFiltered, setProductsFiltered, focus, setFocus, textSearch, setTextSearch};

}


export {useContainer};