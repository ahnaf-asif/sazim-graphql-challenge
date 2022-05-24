import * as React from "react";
import {Alert, Button, Dialog, DialogContent} from "@mui/material";

import '../../css/product.css';
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {checkIfTimePeriodAvailable} from "../../helper";
import RENT_PRODUCT from "../../graphql/mutations/rentProduct";
import updateCacheAfterUpdateProduct from "../../graphql/cacheHandlers/updateCacheAfterUpdateProduct";

export default function ProductRent(props){

    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        from: '',
        to: ''
    });
    const [err, setErr] = React.useState(false);
    const [errText, setErrText] = React.useState('');

    const handleChange = (prop) => (event) => {
        setErr(false);
        setFormData({ ...formData, [prop]: event.target.value });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [rentProduct] = useMutation(RENT_PRODUCT);
    const navigateTo = useNavigate();

    async function handleRentProduct(){

        // console.log(, );
        const from = new Date(formData.from).getTime();
        const to = new Date(formData.to).getTime();
        if(!checkIfTimePeriodAvailable(from, to, props.product.rentHistories)){
            setErr(true);
            setErrText('Product will not be available at that time. please select another time');
        }
        else if(from > to){
            setErr(true);
            setErrText('Please Select a valid time-period');
        }
        else{
            // console.log(from.toString(), to.toString());
            try{
                await rentProduct({
                    variables: {
                        from: from.toString(),
                        to: to.toString(),
                        productId: parseInt(props.product.id),
                        userId: parseInt(props.userId),
                    },
                    update(cache, {data}){
                        updateCacheAfterUpdateProduct(cache, data.rentProduct);
                    }
                });
                navigateTo(`/sack`);
            }catch(e){
                console.log(e);
            }
        }

    }

    return (
        <>
            <Button onClick={handleClickOpen} variant="contained" color="secondary"> Rent </Button>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <h1 className="text-4xl font-bold py-5 px-5">
                    Please select the rent period
                </h1>
                <DialogContent>
                    {err &&
                        <div className="mb-5">
                            <Alert severity="error">{errText}</Alert>
                        </div>
                    }
                    <div className="flex">
                        <div className="from">
                            <label htmlFor="">From</label>
                            <input
                                type="datetime-local"
                                className="border p-2"
                                value={formData.from}
                                onChange={handleChange('from')}
                            />
                        </div>
                        <div className="to">
                            <label htmlFor="">To</label>
                            <input
                                type="datetime-local"
                                className="border p-2"
                                value={formData.to}
                                onChange={handleChange('to')}
                            />
                        </div>
                    </div>
                </DialogContent>
                <div className="py-5 text-right px-5">
                    <Button variant="contained" color="error" onClick={handleClose}>
                        Cancel
                    </Button> &nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={handleRentProduct}>
                        Rent
                    </Button>
                </div>
            </Dialog>
        </>
    )
}