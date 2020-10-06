import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    const numberWithCommas = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
          <button onClick={() => deleteTransaction(transaction._id)} className='delete-btn'>x</button>
        </li>
    )
}
