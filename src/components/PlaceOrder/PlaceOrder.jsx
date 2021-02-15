import React, { useState, useEffect } from 'react'
import './PlaceOrder.scss';
import cx from 'classnames';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Slider from '@material-ui/core/Slider';
import store from "../../redux/store";
import { Link } from 'react-router-dom';

function PlaceOrder({type}) {
    const [token, setToken] = useState(null)
    const [currentOption, setCurrentOption]  = useState('Limit');
    const [currentRange, setCurrentRange]  = useState(10);

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        setToken(store.getState().token)
      })
    }, [])
    const handleOptionChange = (e,value) =>{
        setCurrentOption(value)
    }

    const handleRangeChange = (event, range) => {
        setCurrentRange(range);
      };

    return (
        <div className="buyOrder">
            <div className="BuyLimitOrMarket">
                <span 
                    className={cx( {'currentOptionSelected': currentOption === 'Limit'})} 
                    onClick={(e) => handleOptionChange(e,'Limit')}>
                    Limit
                </span>
                <span 
                    className={cx( {'currentOptionSelected': currentOption === 'Market'})} 
                    onClick={(e) => handleOptionChange(e,'Market')}>
                    Market
                </span>
            </div>
            <div className="buyHeading">
                <span>{type === 'buy' ? 'Buy BTC' : 'Sell BTC'}</span>
                <div className="buyHeadingRight">
                    <AccountBalanceWalletIcon/>
                    <span className="amount"> &nbsp; 0.00000000 USDT</span>
                </div>
            </div>
            <div className="BuyPlaceOrder">
                <div className="tradeInput">
                    <span>Price</span>
                    <input type="text"/>
                    <span>BUSD</span>
                </div>
                <div className="tradeInput">
                    <span>Amount</span>
                    <input type="text"/>
                    <span>BTC</span>
                </div>
                <div className="BuySliderArea">
                    <Slider
                        className="BuyRangeSlider"
                        aria-labelledby="discrete-slider"
                        defaultValue={currentRange}
                        step={10}
                        min={0}
                        max={100}
                        marks
                        onChange={handleRangeChange}
                    />
                    {/* <span class="currentRangeText">{currentRange}%</span> */}
                </div>
                
                <div className="tradeInput">
                    <span>Total</span>
                    <input type="text"/>
                    <span>BUSD</span>
                </div>

                {token ? 
                <button              
                    className={cx('OrderBtn', {'BuyBtn': type === 'buy'}, {'SellBtn': type === 'sell'})} 
                >
                    {type === 'buy' ? 'Buy BTC' : 'Sell BTC'}
                </button>
                :
                <Link to="/auth">
                    <button className="OrderBtn BuyBtn">Login</button>
                </Link>
}
            </div>
            
        </div>
    )
}

export default PlaceOrder
