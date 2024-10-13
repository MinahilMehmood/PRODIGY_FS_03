import { DataGrid } from '@mui/x-data-grid';
import "./userList.css";
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummydata.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='user-list-user'>
                        <img className='user-list-img' src={params.row.avatar} alt='' />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className='user-list-edit'>Edit</button>
                        </Link>
                        <DeleteOutline className='user-list-delete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className="user-list">
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
};

export default UserList;
