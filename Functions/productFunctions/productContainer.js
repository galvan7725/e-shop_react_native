import React,{useState, useEffect} from 'react';
const data =  require('../../assets/data/products.json');
const categoriesData = require('../../assets/data/categories.json');


const useContainer =(props)=>{
    const {initialProducts, initialProductsFiltered,initialFocus,
         initialTextSearch, initialCategories, initialActive,
          initialS, initialProductsCtg} = props;

    const [products, setProducts] = useState(initialProducts);
    const [productsFiltered, setProductsFiltered] = useState(initialProductsFiltered);
    const [focus, setFocus] = useState(initialFocus);
    const [textSearch, setTextSearch] = useState(initialTextSearch);
    const [categories, setCategories] = useState(initialCategories);
    const [active, setActive] = useState(initialActive);
    const [initialState, setInitialState] = useState(initialS);
    const [productsCtg, setProductsCtg] = useState(initialProductsCtg);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setTextSearch(initialTextSearch);
        setCategories(categoriesData);
        setActive(-1);
        setInitialState(data);
        setProductsCtg(data);
        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus(false);
            setTextSearch('');
            setCategories([]);
            setActive();
            setInitialState();
            setProductsCtg([]);
        }
    }, []);


    return {products, setProducts, 
            productsFiltered, setProductsFiltered, 
            focus, setFocus, 
            textSearch, setTextSearch, 
            categories, setCategories,
            active, setActive,
            initialState, setInitialState,
            productsCtg, setProductsCtg
        };

}


export {useContainer};