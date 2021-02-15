import React, { useEffect, useState } from 'react'
import {  useHistory } from 'react-router-dom'
import './Table.scss'
import store from "../../redux/store";
import axios from "../../axios";
import { COINS } from '../../redux/actionTypes';
import cx from 'classnames';

function Table() {
    const history = useHistory('');
    const [coins, setCoins] = useState([])

    const goToMarket = (e,value) => {
        e.preventDefault();
        history.push(value)
    }

    useEffect(() => {
        axios.get('/coins/getAll', null)
            .then( response => {
                store.dispatch({
                    type: COINS,
                    coins: response.data,
                });
                console.log(coins);
            })
            .catch( error => {
                console.log(error);
            });

        const unsubscribe = store.subscribe(() => {
                setCoins(store.getState().coins)
            });
    }, []);
        
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Price</th>
                    <th>24h Change</th>
                    <th>Markets</th>
                </tr>
            </thead>
            <tbody>
            {coins?.map((coin) => 
                coin.symbol !== 'USDT' &&
                <tr onClick={(e) => goToMarket(e,`trade/${coin.symbol}_USDT`)}>
                    <td className="multiple" >
                        <img src={coin.icon} alt={coin.name}/>
                        <span className="symbol">{coin.symbol}</span>
                        <span className="name">{coin.name}</span>
                    </td>
                    <td className="price">${(coin?.quote.USD?.price).toString().slice(0,5)}</td>
                    <td className={( parseInt(coin?.quote.USD?.percent_change_24h) >0 ? 'green' : 'red')}>
                            {( parseInt(coin?.quote.USD?.percent_change_24h) >0 ? '+' : '')}
                            {(coin?.quote.USD?.percent_change_24h).toString().slice(0,4)} %
                    </td>
                    <td>{coin.symbol}/USDT</td>
                </tr> 
            )}          
                <tr>
                    <td colSpan="4" className="centeredText">View more markets &nbsp; {'>'}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
