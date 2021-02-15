import React from 'react'
import Chart from '../Chart/Chart'
import ExecutedOrders from '../Chart/ExecutedOrders/ExecutedOrders'
import CurrentOrders from '../CurrentOrders/CurrentOrders'
import Header from '../Header/Header'
import MyOrders from '../MyOrders/MyOrders'
// import Hero from '../Hero/Hero'
import './Trade.scss'
import PlaceOrder from '../PlaceOrder/PlaceOrder'

function Trade() {
    return (
        <div className="trade">
            <Header />
            <div className="dashboard">
                <div className="dashBoardLeft">
                    <Chart/>
                    <MyOrders/>
                </div>
                <div className="dashBoardRight">
                    <div className="top">
                        <CurrentOrders/>
                        <ExecutedOrders/>
                    </div>
                    <div className="bottom">
                        <PlaceOrder type={'buy'}/>
                        <PlaceOrder type={'sell'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade
