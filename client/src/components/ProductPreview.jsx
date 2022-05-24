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
            <div style={{position: 'relative'}}>
                {auth && auth.id === props.userId &&
                    <ProductEditDeleteSection userId={auth.id} productId={props.id} />
                }
                <Link className="style-less-link" to={`/product/view/${props.id}`}>
                    <div className="product-preview py-3 px-5 border border-slate-300 my-5 mt-5" >
                        <div className="title mt-5">
                            <h1 className="text-2xl font-bold">{props.title}</h1>
                            <h5 className="text-xs text-gray-400 font-bold">Categories: {printCategories(props.categories)}</h5>
                            <h5 className="text-xs text-gray-400 font-bold">Price: ${props.price}</h5>
                            <p className="mt-5">
                                {props.description.length > 200
                                    ? <span> {props.description.slice(0,200)} <span className="text-blue-600"> ... see more</span> </span>
                                    : props.description
                                }
                            </p>
                            <div className="mt-5 date-and-views flex justify-between text-xs text-gray-400">
                                <div className="dates">Date posted: {timestampToDateString(props.createdAt)}</div>
                                <div className="views">1540 views {props.id}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}