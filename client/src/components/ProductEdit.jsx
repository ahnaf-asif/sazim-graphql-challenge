import {useGetAuth, useUpdateAuth} from "../AuthContext";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import SINGLE_PRODUCT from "../graphql/queries/singleProduct";
import {CircularProgress} from "@mui/material";
import * as React from "react";
import ProductForm from "./ProductForm";
import updateCacheAfterProductUpdate from "../graphql/updateCacheAfterProductUpdate";
import UPDATE_PRODUCT from "../graphql/mutations/updateProduct";


export default function ProductEdit(){

    const updateAuth = useUpdateAuth();
    const auth = useGetAuth();
    const navigateTo = useNavigate();
    const { productId } = useParams();

    useEffect(()=>{
        updateAuth();
        if(!auth){
            navigateTo('/');
        }
    }, []);

    const {error, loading, data} = useQuery(SINGLE_PRODUCT,{
        variables: {
            productId: parseInt(productId)
        }
    });

    const [updateProduct] = useMutation(UPDATE_PRODUCT);

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
                update(cache, data){
                    updateCacheAfterProductUpdate(cache,auth.id, product.productId, data);
                }
            });
            navigateTo(`/product/view/${productId}`);
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
                <ProductForm type= "edit" product={data.singleProduct} submit={handleEditProduct} />
            </div>
        )
    }
}