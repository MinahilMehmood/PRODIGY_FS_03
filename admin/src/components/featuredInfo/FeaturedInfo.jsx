import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './featuredInfo.css';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';

const FeaturedInfo = () => {

    const [income, setIncome] = useState([]);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("/orders/income");
                setIncome(res.data);
                setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
            } catch (err) {

            }
        }
        getIncome();
    }, []);

    return (
        <div className='featured'>
            <div className='featured-item'>
                <span className='featured-title'>Revenue</span>
                <div className='featured-money-container'>
                    <span className='featured-money'>{income[1]?.total}</span>
                    <span className='featured-money-rate'>{Math.floor(percentage)}
                        {percentage < 0 ?
                            (<ArrowDownward className='featured-icon negative' />) :
                            (<ArrowUpward className='featured-icon' />)
                        }
                    </span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>
        </div>
    )
};

export default FeaturedInfo;
