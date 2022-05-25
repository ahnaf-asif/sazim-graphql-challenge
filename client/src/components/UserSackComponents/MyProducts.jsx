// this component renders all products user created

import {useQuery} from "@apollo/client";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import ProductPreview from "../ProductUpdateComponents/ProductPreview";
import ALL_PRODUCTS from "../../graphql/queries/allProducts";
import {checkIfUserCreatedThisProduct} from "../../helper";

export default function MyProducts(props){
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
                <h1 className="text-center mt-10 mb-10 text-5xl font-bold">My Products</h1>

                <div className="flex justify-center">
                    <div className="products all-products">
                        <div className="mt-10 mb-5">
                            <Button to="/product/create" variant="contained" color="primary" component={Link}>Create Product</Button>
                        </div>
                        {data.allProducts.map(product => {

                            // checking if the user created this product
                            // see helper.js in the root directory
                            if(checkIfUserCreatedThisProduct(product)){
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