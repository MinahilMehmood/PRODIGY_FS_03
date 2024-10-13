import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbar-wrapper'>
                <div className='top-left'>
                    <span className='logo'>minaadmin</span>
                </div>
                <div className='top-right'>
                    <div className='topbar-icon-container'>
                        <NotificationsNone />
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <div className='topbar-icon-container'>
                        <Language />
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <div className='topbar-icon-container'>
                        <Settings />
                    </div>
                    <img className='top-avatar' src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='topAvatar' />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
