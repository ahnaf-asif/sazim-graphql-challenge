import {Link} from "react-router-dom";
import {Edit} from "@mui/icons-material";
import DeleteProduct from "./DeleteProduct";
import * as React from "react";

// This component handles Product's edit-delete buttons

export default function ProductEditDeleteSection(props){
    return (
        <div className="edit-delete-section mt">
            <div className="edit-product-icon">
                {/*going to the edit product page*/}
                <Link to={`/product/edit/${props.productId}`}>
                    <Edit />
                </Link>
            </div>
            <div className ="delete-product-icon">
                {/* this component handles delete product. takes userId and productId and deletes product with productId */}
                <DeleteProduct userId={props.userId} productId = {props.productId}  />
            </div>
        </div>
    )
}