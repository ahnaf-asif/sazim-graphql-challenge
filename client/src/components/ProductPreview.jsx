import * as React from 'react';
import { Link } from 'react-router-dom';
import DeleteProduct from "./DeleteProduct";

export default function ProductPreview(){

    return (
        <>
            <div style={{position: 'relative'}}>
                <div className="delete-product-icon">
                    <DeleteProduct />
                </div>
                <Link className="style-less-link" to="/product/12">
                    <div className="product-preview py-3 px-5 border border-slate-300 my-5" >

                        <div className="title">
                            <h1 className="text-2xl font-bold">Product Title</h1>
                            <h5 className="text-xs text-gray-400 font-bold">Categories: Electrnics</h5>
                            <h5 className="text-xs text-gray-400 font-bold">Price: $550</h5>
                            <p className="mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci atque distinctio error exercitationem fugiat modi molestiae molestias mollitia nesciunt nisi odio quae, quaerat quia sapiente, sed, sequi suscipit?
                            </p>
                            <div className="mt-5 date-and-views flex justify-between text-xs text-gray-400">
                                <div className="dates">Date posted: 21st Sept 2021</div>
                                <div className="views">1540 views</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}