import * as React from 'react';
import { Link } from 'react-router-dom';

import {timestampToDateString} from '../helper';

import DeleteProduct from "./DeleteProduct";

export default function ProductPreview(props){
    return (
        <>
            <div style={{position: 'relative'}}>
                <div className="delete-product-icon">
                    <DeleteProduct />
                </div>
                <Link className="style-less-link" to={`/product/${props.id}`}>
                    <div className="product-preview py-3 px-5 border border-slate-300 my-5" >

                        <div className="title">
                            <h1 className="text-2xl font-bold">{props.title}</h1>
                            <h5 className="text-xs text-gray-400 font-bold">Categories: Electrnics</h5>
                            <h5 className="text-xs text-gray-400 font-bold">Price: ${props.price}</h5>
                            <p className="mt-5">
                                {props.description}
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