import {useGetAuth, useUpdateAuth} from "../AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import ProductForm from "./ProductForm";
import * as React from "react";
import {useMutation} from "@apollo/client";
import ADD_PRODUCT from "../graphql/mutations/addProduct";
import updateCacheAfterProductCreate from "../graphql/updateCacheAfterProductCreate";

const emptyProduct = {
    title: '',
    description: '',
    price: 0,
    rent: 0,
    rentPaymentPeriod: '',
    categories: []
}

export default function ProuctCreate(){
    const updateAuth = useUpdateAuth();
    const auth = useGetAuth();
    const navigateTo = useNavigate();

    useEffect(()=>{
        updateAuth();
        if(!auth){
            navigateTo('/');
        }
    }, []);

    const [addProduct] = useMutation(ADD_PRODUCT);

    async function handleCreateProduct(product){
        try{
            const variables = {
                userId: parseInt(auth.id),
                title: product.title,
                description: product.description,
                price: parseInt(product.price),
                rent: parseInt(product.rent),
                rentPaymentPeriod: product.rentPaymentPeriod,
                categories: product.categories
            };
            // console.log(variables);
            const newProduct = await addProduct({
                variables: variables,
                update(cache, data){
                    updateCacheAfterProductCreate(cache,auth.id, data);
                }
            });
            // console.log(newProduct);
            navigateTo(`/product/view/${newProduct.data.addProduct.id}`);
        }catch(e){
            console.log(e);
        }

    }

    return (
        <div>
            <h1 className="text-center text-4xl my-10 font-bold">Create Product</h1>
            <ProductForm type="create" product={emptyProduct} submit={handleCreateProduct} />
        </div>
    )
}