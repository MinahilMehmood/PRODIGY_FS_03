import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom";
import { LineStyle, PermIdentity, Storefront, Timeline } from '@mui/icons-material';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("persist:root");
        navigate("/login");
    };

    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Dashboard</h3>
                    <ul className='sidebar-list'>
                        <Link className='link' to="/">
                            <li className='sidebar-list-item active'>
                                <LineStyle className='sidebar-icon' />
                                Home
                            </li>
                        </Link>
                        <li className='sidebar-list-item' onClick={handleLogout}>
                            <Timeline className='sidebar-icon' />
                            Logout
                        </li>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Quick Menu</h3>
                    <ul className='sidebar-list'>
                        <Link to="/users" className='link'>
                            <li className='sidebar-list-item active'>
                                <PermIdentity className='sidebar-icon' />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className='sidebar-list-item'>
                                <Storefront className='sidebar-icon' />
                                Products
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
