// this component renders all the product user bought

import {useQuery} from "@apollo/client";
import React from "react";
import ProductPreview from "../ProductUpdateComponents/ProductPreview";
import {CircularProgress} from "@mui/material";
import ALL_PRODUCTS from "../../graphql/queries/allProducts";
import {checkIfUserBoughtThisProduct} from "../../helper";

export default function BoughtProducts(props){
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
                <h1 className="text-center mt-10 mb-10 text-5xl font-bold">Products Bought</h1>

                <div className="flex justify-center">
                    <div className="products all-products">
                        {data.allProducts.map(product => {

                            // checking if the user bought this product
                            if(checkIfUserBoughtThisProduct(product)){
                                return (
                                    <ProductPreview
                                        key={`boughtProducts-${product.id}`}
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