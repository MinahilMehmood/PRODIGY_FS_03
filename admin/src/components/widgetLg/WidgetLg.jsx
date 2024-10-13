import { useEffect, useState } from "react";
import "./widgetLg.css";
import { userRequest } from "../../requestMethod";
import { format } from "timeago.js";

const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widget-lg-button " + type}>{type}</button>
    }

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const res = await userRequest.get("/orders");
            setOrders(res.data);
        }
        getOrders();
    }, []);

    return (
        <div className="widget-lg">
            <h3 className="widget-lg-title">Orders</h3>
            <table className="widget-lg-table">
                <tr className="widget-lg-tr">
                    <th className="widget-lg-th">Customer Id</th>
                    <th className="widget-lg-th">Date</th>
                    <th className="widget-lg-th">Amount</th>
                    <th className="widget-lg-th">Status</th>
                </tr>
                {
                    orders.map((order) => {
                        return (
                            <tr className="widget-lg-tr" key={order._id}>
                                <td className="widget-lg-user">
                                    <span className="widget-lg-name">{order.userId}</span>
                                </td>
                                <td className="widget-lg-date">{format(order.createdAt)}</td>
                                <td className="widget-lg-amount">{order.amount}</td>
                                <td className="widget-lg-status">
                                    <Button type={order.status} />
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
};

export default WidgetLg;
