import * as React from "react";
import ProductBuy from "./ProductBuy";
import ProductRent from "./ProductRent";
import DeleteProduct from "./DeleteProduct";

import {Link} from 'react-router-dom';
import {Edit} from '@mui/icons-material';

export default function ProductView(){
    return (
        <div className="flex justify-center">
            <div className="product-view">
                <div className="edit-delete-section mt-5">
                    <div className="edit-product-icon">
                        <Link to="/product/edit/13">
                            <Edit />
                        </Link>
                    </div>
                    <div className="delete-product-icon">
                        <DeleteProduct />
                    </div>
                </div>
                <div className="product-description py-3 px-5 mt-10">
                    <h1 className="text-2xl font-bold">Product Title</h1>
                    <h5 className="text-xs text-gray-400 font-bold">Categories: Electrnics</h5>
                    <h5 className="text-xs text-gray-400 font-bold">Price: $550</h5>
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci atque distinctio error exercitationem fugiat modi molestiae molestias mollitia nesciunt nisi odio quae, quaerat quia sapiente, sed, sequi suscipit? <br/> <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda corporis cumque debitis delectus distinctio dolor dolores ipsa molestiae neque nostrum officiis pariatur quas, quos ratione rerum, tenetur vero voluptates.
                    </p>
                </div>
                <div className="product-action mt-10">
                    <div className="buy-rent text-right">
                        <ProductBuy/> &nbsp; <ProductRent/>
                    </div>
                </div>
            </div>
        </div>
    )
}