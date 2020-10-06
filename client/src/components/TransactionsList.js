import React, { useContext, useEffect } from 'react';
import {  Transaction } from './Transaction';
import { GlobalContext } from '../Context/GlobalState';

export const TransactionsList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
      getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
          <h3>History</h3>
          <ul className='list'>
          {transactions.map((transaction, idx) => (<Transaction key={idx} transaction={transaction} />))}
              
          </ul>  
        </>
    )
}
