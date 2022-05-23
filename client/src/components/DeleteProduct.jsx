import * as React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {Delete} from "@mui/icons-material";

import '../css/product.css';
import {useMutation} from "@apollo/client";
import DELETE_PRODUCT from "../graphql/mutations/deleteProduct";
import {useNavigate} from "react-router-dom";

export default function DeleteProduct(props){

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [deleteProduct, { data, loading, error }] = useMutation(DELETE_PRODUCT);

    let navigateTo = useNavigate();

    async function handleDeleteProduct() {
        // graphql mutation
        try{
            const resp = await deleteProduct({
                variables: {
                    productId: parseInt(props.productId)
                }
            })
            navigateTo('/sack');
        }catch(e){
            console.log(e);
        }
    }

    return (
        <>
            <Delete onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <h1 className="text-4xl font-bold py-5 px-5">
                    Are you sure you want to delete this product?
                </h1>
                <div className="py-5 text-right px-5">
                    <Button variant="contained" color="error" onClick={handleClose}>
                        No
                    </Button> &nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={handleDeleteProduct}>
                        Yes
                    </Button>
                </div>
            </Dialog>
        </>
    )
}