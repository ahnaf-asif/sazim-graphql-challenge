import {useQuery} from "@apollo/client";
import * as React from "react";
import ProductPreview from "../ProductPreview";
import {CircularProgress} from "@mui/material";
import ALL_PRODUCTS from "../../graphql/queries/allProducts";
import {checkIfUserBorrowedThisProduct} from "../../helper";

export default function BorrowedProducts(props){
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
                <h1 className="text-center mt-10 mb-10 text-5xl font-bold">Products Borrowed</h1>

                <div className="flex justify-center">
                    <div className="products all-products">
                        {data.allProducts.map(product => {
                            if(checkIfUserBorrowedThisProduct(props.userId, product)){
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