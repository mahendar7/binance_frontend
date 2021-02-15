import React, { useState } from 'react'
import TableRow from '../../util/TableRow/TableRow'
import './ExecutedOrders.scss'

function ExecutedOrders() {
    const [executedOrders, setExecutedOrders] = useState([
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'sell'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'sell'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'sell'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'sell'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'sell'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'sell'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
        {'price':15993,'amount':0.000015,time:'22:23:53','type':'buy'},
    ])
    
    return (
        <div className="ExecutedOrders">
            <table>
                    <thead>
                        <tr>
                            <th>Price(BUSD)</th>
                            <th>Amount(BTC)</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {executedOrders?.map((data,index) =>  (
                            <TableRow data={data}  key={index}/>
                        ))}
                    </tbody>
                </table>
          
        </div>
    )
}

export default ExecutedOrders
