// this component renders all the products user lent

import {useQuery} from "@apollo/client";
import {CircularProgress} from "@mui/material";
import React from "react";
import ProductPreview from "../ProductUpdateComponents/ProductPreview";
import ALL_PRODUCTS from "../../graphql/queries/allProducts";
import {checkIfUserLentThisProduct} from "../../helper";

export default function LentProducts(props){
    const {error, loading, data} = useQuery(ALL_PRODUCTS);
    if(loading){
        return (
            <div className="text-center mt-5">
                <CircularProgress />
            </div>
        )
    }
    if(data){
        return (
            <div>
                <h1 className="text-center mt-10 mb-10 text-5xl font-bold">Products Lent</h1>

                <div className="flex justify-center">
                    <div className="products all-products">
                        {data.allProducts.map(product => {

                            // checking if the user lent this product
                            if(checkIfUserLentThisProduct(product)) {
                                return (
                                    <ProductPreview
                                        key={`myProducts-${product.id}`}
                                        product={product}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}