import React from 'react'
import './TableRow.scss';
import cx from 'classnames';

export default function TableRow({data}) {
    return (
        <tr>
            <td className={cx( {'sell': data.type === 'sell'},{'buy': data.type === 'buy'})}>{data.price}</td>
            <td>{data.amount}</td>
            <td>{data.time}</td>
        </tr>
    )
}
