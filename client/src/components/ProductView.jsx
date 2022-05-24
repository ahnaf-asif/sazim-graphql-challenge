import * as React from "react";
import ProductBuy from "./ProductBuy";
import ProductRent from "./ProductRent";

import { useParams, Link } from "react-router-dom";
import {useQuery} from "@apollo/client";
import SINGLE_PRODUCT from "../graphql/queries/singleProduct";
import {useGetAuth} from '../AuthContext';
import ProductEditDeleteSection from "./ProductEditDeleteSection";
import {printCategories} from "../helper";

export default function ProductView(){
    let { productId } = useParams();

    const auth = useGetAuth();

    const {error, loading, data} = useQuery(SINGLE_PRODUCT,{
        variables: {
            productId: parseInt(productId)
        }
    });
    if(data){
        return (
            <div className="flex justify-center">
                <div className="product-view">
                    {auth && (auth.id === data.singleProduct.user.id) &&
                        <ProductEditDeleteSection userId={auth.id} productId={data.singleProduct.id} />
                    }
                    <div className="product-description py-3 px-5 mt-10">
                        <h1 className="text-2xl font-bold">{data.singleProduct.title}</h1>
                        <h5 className="text-xs text-gray-400 font-bold">Categories: {printCategories(data.singleProduct.categories)}</h5>
                        <h5 className="text-xs text-gray-400 font-bold">Price: ${data.singleProduct.price}</h5>
                        <p className="mt-5">{data.singleProduct.description}</p>
                    </div>
                    {auth && (auth.id !== data.singleProduct.user.id) &&
                        <div className="product-action mt-10">
                            <div className="buy-rent text-right">
                                <ProductBuy/> &nbsp; <ProductRent/>
                            </div>
                        </div>
                    }
                    {!auth &&
                        <p className="text-right mt-10">Please <Link className="text-blue-700 font-bold" to="/Login">Login</Link> to rent/buy the product</p>
                    }
                </div>
            </div>
        )
    }
}