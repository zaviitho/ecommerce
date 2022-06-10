import { AppBar, IconButton, styled, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/nav-bar.css';
const NavBar = () => {
    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
    const navigate = useNavigate()
    return (
        
        <div>
            <AppBar color="inherit">
                <Toolbar className='container'>
                    <Typography>
                        <Link to='/' className='link'>ecommerce</Link>
                    </Typography>
                    <div className='buttons'>
                        <IconButton onClick={()=>navigate('/user')}>
                            <AccountCircleIcon className='button'/>
                        </IconButton>
                        <IconButton >
                            <InventoryIcon className='button'/>
                        </IconButton>
                        <IconButton >
                            <ShoppingCartIcon className='button'/>
                        </IconButton>
                    </div>
                </Toolbar>
                
            </AppBar>
            <Offset/>
        </div>
    );
};

export default NavBar;