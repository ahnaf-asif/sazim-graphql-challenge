import {useGetAuth, useUpdateAuth} from "../../AuthContext";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import SINGLE_PRODUCT from "../../graphql/queries/singleProduct";
import {CircularProgress} from "@mui/material";
import * as React from "react";
import ProductForm from "./ProductForm";
import UPDATE_PRODUCT from "../../graphql/mutations/updateProduct";
import updateCacheAfterUpdateProduct from "../../graphql/cacheHandlers/updateCacheAfterUpdateProduct";


export default function ProductEdit(){

    const updateAuth = useUpdateAuth(); // used to update auth context
    const auth = useGetAuth(); // auth context value
    const navigateTo = useNavigate();
    const { productId } = useParams(); // getting productId from the route parameter

    useEffect(()=>{
        // redirecting if user isn't logged in
        updateAuth();
        if(!auth){
            navigateTo('/');
        }
    }, []);

    // getting a product by route param userId
    const {error, loading, data} = useQuery(SINGLE_PRODUCT,{
        variables: {
            productId: parseInt(productId)
        }
    });

    const [updateProduct] = useMutation(UPDATE_PRODUCT); // update product mutation

    async function handleEditProduct(product){
        try{
            await updateProduct({
                variables: {
                    productId: parseInt(productId),
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    rent: product.rent,
                    rentPaymentPeriod: product.rentPaymentPeriod,
                    categories: product.categories
                },
                update(cache, {data}){
                    // updating cache after updating a product
                    updateCacheAfterUpdateProduct(cache, data.updateProduct);
                }
            });
            navigateTo(`/product/view/${productId}`); // returning to that product view page
        }catch(e){
            console.log(e);
        }
    }

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
                <h1 className="text-center text-4xl my-10 font-bold">Edit Product</h1>
                {/*This component renders a form and returns form data ( which I used to add new products)*/}
                <ProductForm type= "edit" product={data.singleProduct} submit={handleEditProduct} />
            </div>
        )
    }
}