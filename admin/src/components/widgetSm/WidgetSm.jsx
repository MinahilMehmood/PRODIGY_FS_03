import { Visibility } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './widgetSm.css';
import { userRequest } from '../../requestMethod';

const WidgetSm = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await userRequest.get("/users/?new=true");
            setUsers(res.data);
        }
        getUsers();
    }, []);

    return (
        <div className='widget-sm'>
            <span className='widget-sm-title'>New Join Members</span>
            <ul className='widget-sm-list'>
                {users.map((user) => (
                    <li className='widget-sm-list-item' key={user._id}>
                        <img className='widget-sm-img' alt='userProfilePic' src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} />
                        <div className='widget-sm-list-user'>
                            <span className='widget-sm-username'>{user.username}</span>
                        </div>
                        <button className='widget-sm-button'>
                            <Visibility className='widget-sm-icon' />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WidgetSm;
