import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from "../../redux/apiCalls.js";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='product-list-item'>
                        <img className='product-list-img' src={params.row.img} alt='' />
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row._id}>
                            <button className='product-list-edit'>Edit</button>
                        </Link>
                        <DeleteOutline className='product-list-delete' onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className="product-list">
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                getRowId={row => row._id}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
};

export default ProductList;
