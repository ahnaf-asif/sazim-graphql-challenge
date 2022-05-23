import ProductPreview from './ProductPreview';
import '../css/product.css';
import {useEffect, useState} from "react";

//helpers


import {useQuery, gql} from "@apollo/client";
import ALL_PRODUCTS from '../graphql/queries/allProducts';

export default function Home(){

    const {error, loading, data} = useQuery(ALL_PRODUCTS);
    // if(data){
    //     data.allProducts.map(product => {
    //         console.log(product)
    //     })
    // }
    // const [allProducts, setAllProducts] = useState([])
    // useEffect(()=>{
    //     if(data){
    //         setAllProducts(data.allProducts);
    //     }
    //     // console.log(allProducts);
    // }, [data]);
    if(data){
        return (
            <>
                <h1 className="text-center mt-10 mb-5 text-6xl font-bold">All Products</h1>
                <div className="flex justify-center">
                    <div className="products all-products">
                        {data.allProducts.map(product => {
                            return (
                                <ProductPreview
                                    key={product.id}
                                    id={product.id}
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
            </>
        )
    }
}