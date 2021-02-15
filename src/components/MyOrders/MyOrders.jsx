import React, { useState } from 'react'
import './MyOrders.scss'
import cx from 'classnames';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function MyOrders() {
    const [currentOption, setCurrentOption]  = useState('Open Orders');

    const handleOptionChange = (e,value) =>{
        setCurrentOption(value)
    }
    
    return (
        <div className="myOrders">
            <div className="myOrdersOptions">
                <span 
                    className={cx( {'currentOptionSelected': currentOption === 'Open Orders'})} 
                    onClick={(e) => handleOptionChange(e,'Open Orders')}>
                    Open Orders(0)
                </span>
                <span 
                    className={cx( {'currentOptionSelected': currentOption === 'Order History'})} 
                    onClick={(e) => handleOptionChange(e,'Order History')}>
                    Order History
                </span>
                <span 
                    className={cx( {'currentOptionSelected': currentOption === 'Trade History'})} 
                    onClick={(e) => handleOptionChange(e,'Trade History')}>
                    Trade History
                </span>
                <span 
                    className={cx( {'currentOptionSelected': currentOption === 'Funds'})} 
                    onClick={(e) => handleOptionChange(e,'Funds')}>
                    Funds
                </span>
                <span 
                    className={cx( {'currentOptionSelected': currentOption === 'Positions'})} 
                    onClick={(e) => handleOptionChange(e,'Positions')}>
                    Positions
                </span>
            </div>
            {currentOption === 'Open Orders' ?
            <div className="OpenOrders">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Pair</th>
                            <th>Type</th>
                            <th>Side</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Filled</th>
                            <th>Total</th>
                            <th>Price</th>
                            <th>Trigger Conditions</th>
                            <th className="CancelAllBtn">Cancel All <ArrowDropDownIcon/></th>
                        </tr>
                    </thead>
                </table>
            </div>
            
            :
            null
            }
        </div>
    )
}

export default MyOrders
