import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import './user.css';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className='user'>
            <div className='user-title-container'>
                <h1 className='user-title'>Edit User</h1>
                <Link to="/newUser">
                    <button className='user-add-button'>Create</button>
                </Link>
            </div>
            <div className='user-container'>
                <div className='user-show'>
                    <div className='user-show-top'>
                        <img className='user-show-img' src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=50' />
                        <div className='user-show-top-title'>
                            <span className='user-show-username'>Anna Becker</span>
                            <span className='user-show-user-title'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='user-show-bottom'>
                        <span className='user-show-title'>Account Details</span>
                        <div className='user-show-info'>
                            <PermIdentity className='user-show-icon' />
                            <span className='user-show-info-title'>annabeck99</span>
                        </div>
                        <div className='user-show-info'>
                            <CalendarToday className='user-show-icon' />
                            <span className='user-show-info-title'>1.12.1999</span>
                        </div>
                        <span className='user-show-title'>Contact Details</span>
                        <div className='user-show-info'>
                            <PhoneAndroid className='user-show-icon' />
                            <span className='user-show-info-title'>+1 457 4868487</span>
                        </div>
                        <div className='user-show-info'>
                            <MailOutline className='user-show-icon' />
                            <span className='user-show-info-title'>annabeck99@gmail.com</span>
                        </div>
                        <div className='user-show-info'>
                            <LocationSearching className='user-show-icon' />
                            <span className='user-show-info-title'>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className='user-update'>
                    <span className='user-update-title'>Edit</span>
                    <form className='user-update-form'>
                        <div className='user-update-left'>
                            <div className='user-update-item'>
                                <label>Username</label>
                                <input type='text' placeholder='annabeck99' className='user-update-input' />
                            </div>
                            <div className='user-update-item'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Anna Becker' className='user-update-input' />
                            </div>
                            <div className='user-update-item'>
                                <label>Email</label>
                                <input type='text' placeholder='annabeck99@gmail.com' className='user-update-input' />
                            </div>
                            <div className='user-update-item'>
                                <label>Phone</label>
                                <input type='text' placeholder='+1 457 4868487' className='user-update-input' />
                            </div>
                            <div className='user-update-item'>
                                <label>Address</label>
                                <input type='text' placeholder='New York | USA' className='user-update-input' />
                            </div>
                        </div>
                        <div className='user-update-right'>
                            <div className='user-update-upload'>
                                <img className='user-update-img' src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=50' alt='' />
                                <label htmlFor='file'><Publish className='user-update-icon' /></label>
                                <input type='file' id='file' style={{ display: "none" }} />
                            </div>
                            <button className='user-update-button'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default User;
