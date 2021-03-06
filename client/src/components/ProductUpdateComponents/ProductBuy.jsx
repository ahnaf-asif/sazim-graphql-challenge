import * as React from "react";
import {Button, Dialog} from "@mui/material";

import '../../css/product.css';
import {useMutation} from "@apollo/client";
import BUY_PRODUCT from "../../graphql/mutations/buyProduct"; // this mutation handles product purchase
import {useNavigate} from "react-router-dom";

// this function updates cache after purchasing a product
import updateCacheAfterUpdateProduct from "../../graphql/cacheHandlers/updateCacheAfterUpdateProduct";

export default function ProductBuy(props){

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [buyProduct] = useMutation(BUY_PRODUCT);
    const navigateTo = useNavigate();
    async function handleBuyProduct(){
        try{
            await buyProduct({
                variables: {
                    productId: parseInt(props.productId),
                    userId: parseInt(props.userId),
                },
                update(cache, {data}){
                    // updating a cache after buying a product
                    updateCacheAfterUpdateProduct(cache, data.buyProduct);
                }
            });
            navigateTo(`/sack`); // returning to user sack
        }catch(e){
            // printing errors
            console.log(e);
        }
    }
    return (
        <>
            <Button onClick={handleClickOpen} variant="contained" color="success"> Buy </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <h1 className="text-4xl font-bold py-5 px-5">
                    Are you sure you want to Buy this product?
                </h1>
                <div className="py-5 text-right px-5">
                    <Button variant="contained" color="error" onClick={handleClose}>
                        No
                    </Button> &nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={handleBuyProduct}>
                        Yes
                    </Button>
                </div>
            </Dialog>
        </>
    )
}