import React, { useContext } from 'react';
import { numberWithCommas } from '../utils/format';

import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? '-' : '+';
	return (
		<>
			<li
				className={transaction.amount < 0 ? 'minus' : 'plus'}
				key={transaction.id}>
				{transaction.text}{' '}
				<span>
					{sign}${numberWithCommas(Math.abs(transaction.amount))}
				</span>
				<button
					onClick={() => deleteTransaction(transaction._id)}
					className='delete-btn'>
					x
				</button>
			</li>
		</>
	);
};

export default Transaction;