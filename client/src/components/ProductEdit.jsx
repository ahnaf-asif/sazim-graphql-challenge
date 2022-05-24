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
    if(loading){
        return (
            <div className="text-center mt-5">
                <CircularProgress />
            </div>
        )
    }
    if(data){

        const [updateProduct] = useMutation(UPDATE_PRODUCT);

        async function handleEditProduct(product){
            try{
                const resp = await updateProduct({
                    variables: product,
                    update(cache, data){
                        updateCacheAfterProductUpdate(cache,auth.id, product.productId, data);
                    }
                });
                navigateTo(`/product/view/${product.productId}`);
            }catch(e){
                console.log(e);
            }
        }

        return (
            <div>
                <h1 className="text-center text-4xl my-10 font-bold">Edit Product</h1>
                <ProductForm product={data.singleProduct} submit={handleEditProduct} />
            </div>
        )
    }
}