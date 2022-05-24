import {useQuery} from "@apollo/client";
import ALL_PRODUCTS from "../graphql/queries/allProducts";
import USER_PRODUCTS from "../graphql/queries/userProducts";
import {Button, CircularProgress} from "@mui/material";
import * as React from "react";
import {Link} from "react-router-dom";
import ProductPreview from "./ProductPreview";

export default function MyProducts(props){
    const {error, loading, data} = useQuery(USER_PRODUCTS, {
        variables: {
            userId: parseInt(props.userId)
        }
    });
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
                        <div className="mt-10">
                            <Button to="/product/create" variant="contained" color="primary" component={Link}>Create Product</Button>
                        </div>
                        {data.userProducts.map(product => {
                            return (
                                <ProductPreview
                                    key={product.id}
                                    id={product.id}
                                    userId={product.user.id}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    rent={product.rent}
                                    rentPaymentPeriod={product.rentPaymentPeriod}
                                    createdAt={product.createdAt}
                                    categories={product.categories}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}