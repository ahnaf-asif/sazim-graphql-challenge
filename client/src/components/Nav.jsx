import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <AppBar position="static" sx = {{bgcolor: '#6c7982'}}>
            <Toolbar>
                <Typography  sx={{ flexGrow: 1 }}>
                    <Link className="navbar-title text-3xl font-bold" to="/">Tbay</Link>
                </Typography >
                {/*<Button component={Link} to="/my-products" color="inherit">My Products</Button>*/}
                <Button component={Link} to="/login" color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}