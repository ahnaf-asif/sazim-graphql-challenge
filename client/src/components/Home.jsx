import ProductPreview from './ProductUpdateComponents/ProductPreview';
import '../css/product.css';

import {useQuery} from "@apollo/client";
import ALL_PRODUCTS from '../graphql/queries/allProducts';
import {useEffect} from "react";
import {useUpdateAuth} from "../AuthContext";
import {CircularProgress} from "@mui/material";
import * as React from "react";


export default function Home(){
    // console.log(apolloClient.cache.data);
    const {error, loading, data} = useQuery(ALL_PRODUCTS);

    const updateAuth = useUpdateAuth();
    useEffect(()=>{
        updateAuth();
    }, []);

    if(loading){
        return (
            <div className="text-center mt-5">
                <CircularProgress />
            </div>
        )
    }
    if(data){
        return (
            <>
                <h1 className="text-center mt-10 mb-5 text-6xl font-bold">All Products</h1>
                <div className="flex justify-center">
                    <div className="products all-products">
                        {data.allProducts.map(product => {
                            // console.log(product);
                            return (
                                <ProductPreview
                                    key={product.id}
                                    product={product}
                                />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}