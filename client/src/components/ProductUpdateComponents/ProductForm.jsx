// this component shows a form data and then returns the data which can be used in multiple occasions
import React from "react";
import {
    Box, Button,
    Chip,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField
} from "@mui/material";

import {useQuery} from "@apollo/client";
import ALL_CATEGORIES from "../../graphql/queries/allCategories";

// default rentPaymentPeriod options
const rentPaymentPeriodOptions = [
    'hourly', 'daily', 'monthly', 'yearly'
];

export default function ProductForm(props){
    // initialize data from the props
    const [values, setValues] = React.useState({
        title: props.product.title,
        description: props.product.description,
        price: props.product.price,
        rent: props.product.rent,
        rentPaymentPeriod: props.product.rentPaymentPeriod,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const {error, loading, data} = useQuery(ALL_CATEGORIES); // getting all categories from the server

    // setting the categories to render on a multiselect input
    const [selectedCategories, setSelectedCategories] = React.useState(props.product.categories.map(cat => cat.id));

    const handleCategoryChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedCategories(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function handleFormSubmit(e){
        e.preventDefault();

        // just returns the input data to the parent

        const updatedProduct = {
            title: values.title,
            description: values.description,
            price: values.price,
            rent: values.rent,
            rentPaymentPeriod: values.rentPaymentPeriod,
            categories: selectedCategories
        }
        props.submit(updatedProduct);

    }

    if(data) {
        return (
            <div className="product-form">
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        id="title"
                        label="Title"
                        className="w-full"
                        variant="outlined"
                        value={values.title}
                        onChange={handleChange('title')}
                        required
                    />
                    <br/><br/>

                    <FormControl className="w-full">
                        <InputLabel id="demo-multiple-chip-label">Categories</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={selectedCategories}
                            required
                            onChange={handleCategoryChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={data.allCategories.find(e => e.id === value).name} />
                                    ))}
                                </Box>
                            )}
                        >
                            {data.allCategories.map((name) => (
                                <MenuItem
                                    key={name.id}
                                    value={name.id}
                                >
                                    {name.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <br/><br/>

                    <label htmlFor="textarea text-lg">Description</label>
                    <textarea
                        required
                        style={{minHeight: '200px'}}
                        className=" py-2 px-2 my-2 border w-full"
                        value={values.description}
                        onChange={handleChange('description')}
                    >
                </textarea>
                    <br/> <br/>
                    <div className="flex justify-between">
                        <FormControl className="three-pair-input">
                            <InputLabel htmlFor="price">Price</InputLabel>
                            <OutlinedInput
                                id="price"
                                value={values.price}
                                onChange={handleChange('price')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Price"
                                type="number"
                                required
                            />
                        </FormControl>
                        <FormControl className="three-pair-input">
                            <InputLabel htmlFor="rent">Rent</InputLabel>
                            <OutlinedInput
                                id="rent"
                                value={values.rent}
                                onChange={handleChange('rent')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Rent"
                                type="number"
                                required
                            />
                        </FormControl>
                        <TextField
                            className="three-pair-input"
                            id="rentPaymentPeriod"
                            select
                            label="Rent Payment Period"
                            value={values.rentPaymentPeriod}
                            onChange={handleChange('rentPaymentPeriod')}
                            required
                        >
                            {rentPaymentPeriodOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="text-center mt-10">
                        <Button variant="contained" color="success" type="submit">{props.type} Product</Button>
                    </div>
                </form>
            </div>
        )
    }
}