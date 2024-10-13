import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummydata";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";

const Product = () => {

    const location = useLocation();
    const proId = location.pathname.split("/")[2];
    const [proStats, setProStats] = useState([]);

    const product = useSelector(state => state.product.products.find(product => product._id === proId));
    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ], []);
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("/orders/income?proId=" + proId);
                const list = res.data.sort((a, b) => {
                    return a._id - b._id;
                });
                list.map((item) => setProStats((prev) => [
                    ...prev,
                    { name: MONTHS[item._id - 1], Sales: item.total },
                ]))
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [MONTHS, proId]);

    return (
        <div className="product">
            <div className="product-title-container">
                <h1 className="product-title">Product</h1>
                <Link to="/newProduct">
                    <button className="product-add-button">Create</button>
                </Link>
            </div>
            <div className="product-top">
                <div className="product-top-left">
                    <Chart data={proStats} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src={product.img} className="product-info-img" />
                        <span className="product-name">{product.title}</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">{product._id}</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">sales:</span>
                            <span className="product-info-value">12367</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">in stock:</span>
                            <span className="product-info-value">{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="product-form-left">
                        <label>Product Name</label>
                        <input type="text" placeholder={product.title} />
                        <label>Product Description</label>
                        <input type="text" placeholder={product.desc} />
                        <label>Price</label>
                        <input type="text" placeholder={product.price} />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img className="product-upload-img" src={product.img} />
                            <label htmlFor="file">
                                <Publish />
                            </label>

                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="product-button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Product;
