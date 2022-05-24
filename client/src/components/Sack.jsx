import {useUpdateAuth, useGetAuth} from "../AuthContext";
import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom";

import PropTypes from 'prop-types';
import {Box, Tab, Tabs} from "@mui/material";

import MyProducts from "./UserSackComponents/MyProducts";
import BoughtProducts from "./UserSackComponents/BoughtProducts";
import SoldProducts from "./UserSackComponents/SoldProducts";
import LentProducts from "./UserSackComponents/LentProducts";
import BorrowedProducts from "./UserSackComponents/BorrowedProducts";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Sack(){

    const updateAuth = useUpdateAuth();
    const auth = useGetAuth();
    let navigateTo = useNavigate();

    useEffect(()=>{
        updateAuth();
        if(!auth){
            navigateTo('/');
        }
    }, []);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="mt-10">
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow: "auto" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="My Products" />
                        <Tab label="Bought" />
                        <Tab label="Sold"/>
                        <Tab label="Borrowed"/>
                        <Tab label="Lent"/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <MyProducts userId={auth.id} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BoughtProducts userId={auth.id} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SoldProducts userId={auth.id} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <BorrowedProducts userId={auth.id} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <LentProducts userId={auth.id} />
                </TabPanel>
            </Box>
        </div>
    )
}