import * as React from "react";
import {Button, Dialog} from "@mui/material";
import {Delete} from "@mui/icons-material";

import '../css/product.css';
import {useMutation} from "@apollo/client";
import BUY_PRODUCT from "../graphql/mutations/buyProduct";
import {useNavigate} from "react-router-dom";


export default function DeleteProduct(props){

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
                    sellerId: parseInt(props.sellerId),
                    buyerId: parseInt(props.buyerId),
                },
                update(cache, data){
                    // updateCacheAfterProductBuy(cache, props.buyerId, props.productId, data);
                }
            });
            navigateTo(`/sack`);
        }catch(e){
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