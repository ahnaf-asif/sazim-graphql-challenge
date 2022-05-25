import * as React from "react";
import ProductBuy from "./ProductUpdateComponents/ProductBuy";
import ProductRent from "./ProductUpdateComponents/ProductRent";

import { useParams, Link } from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import SINGLE_PRODUCT from "../graphql/queries/singleProduct";
import {useGetAuth} from '../AuthContext';
import ProductEditDeleteSection from "./ProductUpdateComponents/ProductEditDeleteSection";
import {
    checkIfProductAlreadySold,
    printCategories,
    shouldShowBuyRent,
    timestampToDateString
} from "../helper";
import {useEffect} from "react";
import INCREASE_PRODUCT_VIEWS from "../graphql/mutations/increaseProductViews";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import updateCacheAfterCreateProduct from "../graphql/cacheHandlers/updateCacheAfterCreateProduct";

export default function ProductView(){
    let { productId } = useParams();

    const auth = useGetAuth();

    const {error, loading, data} = useQuery(SINGLE_PRODUCT,{
        variables: {
            productId: parseInt(productId)
        }
    });

    const [increaseProductViews] = useMutation(INCREASE_PRODUCT_VIEWS);
    async function handleIncreaseProductViews(){
        try{
            const res = await increaseProductViews({
                variables: {
                    productId: parseInt(productId),
                },
                update(cache, {data}){
                    updateCacheAfterCreateProduct(cache, data.increaseProductViews);
                }
            });
        }catch(e){
            console.log(e);
        }
    }
    useEffect ( () =>{
        handleIncreaseProductViews();
    }, []);

    if(data){
        // console.log(data);
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
                    {shouldShowBuyRent(data.singleProduct) &&
                        <div className="product-action mt-10">
                            <div className="buy-rent text-right">
                                <ProductBuy userId={auth.id} productId={data.singleProduct.id} /> &nbsp;
                                <ProductRent userId={auth.id} product={data.singleProduct} />
                            </div>
                        </div>
                    }
                    {auth && checkIfProductAlreadySold(data.singleProduct) &&
                        <div className="product-action mt-10 text-right text-orange-400 font-bold">
                            The product is already sold
                        </div>
                    }
                    {!auth &&
                        <p className="text-right mt-10">Please <Link className="text-blue-700 font-bold" to="/Login">Login</Link> to rent/buy the product</p>
                    }
                    <div className="mt-10">
                        {/* Showing the rent booking history */}
                        <h2 className="text-center text-2xl font-bold ">Rent Booking History</h2>
                        <hr className="mt-10"/>
                        <Table aria-label="simple table w-96">
                            <TableHead>
                                <TableRow>
                                    <TableCell>From</TableCell>
                                    <TableCell align="left">To</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.singleProduct.rentHistories.map((rentHistory) => (
                                    <TableRow key={rentHistory.from} >
                                        <TableCell align="left">{timestampToDateString(parseInt(rentHistory.from))}</TableCell>
                                        <TableCell align="left">{timestampToDateString(parseInt(rentHistory.to))}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>
        )
    }
}