import {Link} from "react-router-dom";
import {Edit} from "@mui/icons-material";
import DeleteProduct from "./DeleteProduct";
import * as React from "react";

export default function ProductEditDeleteSection(props){
    return (
        <div className="edit-delete-section mt-5">
            <div className="edit-product-icon">
                <Link to={`/product/edit/${props.productId}`}>
                    <Edit />
                </Link>
            </div>
            <div className="delete-product-icon">
                <DeleteProduct userId={props.userId} productId = {props.productId}  />
            </div>
        </div>
    )
}