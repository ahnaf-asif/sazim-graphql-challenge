import * as React from 'react';
import { Link } from 'react-router-dom';

import {timestampToDateString} from '../helper';

import {useGetAuth} from "../AuthContext";
import ProductEditDeleteSection from "./ProductEditDeleteSection";
import {printCategories} from "../helper";

export default function ProductPreview(props){

    const auth = useGetAuth();

    return (
        <>
            <div style={{position: 'relative', overflow: 'hidden'}}>
                {auth && auth.id === props.product.user.id &&
                    <ProductEditDeleteSection userId={auth.id} productId={props.product.id} />
                }
                {!props.product.status !== 'active' &&
                    <div className="arrow-right">
                        <span>Sold</span>
                    </div>
                }
                <Link className="style-less-link" to={`/product/view/${props.product.id}`}>
                    <div className="product-preview py-3 px-5 border border-slate-300 mb-5" >
                        <div className="title">
                            <h1 className="text-2xl font-bold mt-5">{props.product.title}</h1>
                            <h5 className="text-xs text-gray-400 font-bold">Categories: {printCategories(props.product.categories)}</h5>
                            <h5 className="text-xs text-gray-400 font-bold">Price: ${props.product.price}</h5>
                            <p className="mt-5">
                                {props.product.description.length > 200
                                    ? <span> {props.product.description.slice(0,180)} <span className="text-blue-600"> ... see more</span> </span>
                                    : props.product.description
                                }
                            </p>
                            <div className="mt-5 date-and-views flex justify-between text-xs text-gray-400">
                                <div className="dates">Date posted: {timestampToDateString(props.product.createdAt)}</div>
                                <div className="views">{props.product.views} views</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}