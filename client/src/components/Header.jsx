import { AppBar, Toolbar } from '@mui/material';
import logo from '../invoice_pic.png';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <img
                    src={logo}
                    alt="Logo"
                    style={{ height: '40px' }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;