import React, { useState } from 'react'
import './CurrentOrders.scss';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import cx from 'classnames';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import TableRow from '../util/TableRow/TableRow';

function CurrentOrders() {
    const [currentOrders, setCurrentOrders] = useState([
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
    ])
    
    const [option, setOption] = useState('');
    const [iconOption, setIconOption] = useState('normal');

    const handleOptionChange = (e) =>{
        setOption(e.target.value)
    }

    const changeIcon = (e,value) =>{
        setIconOption(value)
    }
    return (
        <div className="currentOrders">
            <div className="opt">
                <div className="left">
                    <FormatAlignCenterIcon  className={cx('option-item', {'selected': iconOption === 'normal'})} onClick={(e) => changeIcon(e,'normal')} />
                    <FormatAlignJustifyIcon className={cx('option-item','green', {'selected': iconOption === 'green'})} onClick={(e) => changeIcon(e,'green')}/>
                    <FormatAlignJustifyIcon className={cx('option-item', 'red', {'selected': iconOption === 'red'})} onClick={(e) => changeIcon(e,'red')}/>
                </div>
                <div className="right">
                    <select value={option} onChange={handleOptionChange}>
                        <option value="grapefruit">1</option>
                    </select>
                </div>
            </div>
            <div className="currentOrdersTable">
                <table>
                    <thead>
                        <tr>
                            <th>Price(BUSD)</th>
                            <th>Amount(BTC)</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map((data,index) => <TableRow data={data} key={index} />)}
                        
                        <tr className="currentPrice">
                            <td>$15,995.34</td>
                            <td>15,991.26</td>
                            <td className="moreOption">More <SignalCellularAltIcon className="signalIcon"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default CurrentOrders
