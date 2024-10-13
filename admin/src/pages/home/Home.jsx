import { useEffect, useMemo, useState } from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { userData } from '../../dummydata';

import './home.css';
import { userRequest } from '../../requestMethod';

const Home = () => {
    const [userStats, setUserStats] = useState([]);

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
                const res = await userRequest.get("/users/stats");
                res.data.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active User": item.total },
                    ])
                );
            } catch { }
        };
        getStats();
    }, [MONTHS]);

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart title="User Analytics" data={userStats} dataKey="Active User" grid />
            <div className='home-widgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
};

export default Home;
