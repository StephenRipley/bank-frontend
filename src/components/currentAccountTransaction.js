import React from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../selectors';
import CurrentAccountTransactionDetails from './currentAccountTransactionDetails';

const CurrentAccountTransaction = (transactions) =>{

    const forMapping = transactions.transactions
    console.log(transactions.transactions)
    const transactionInfo = forMapping.map((transaction) => {

        return <div key={transaction.currentTransactionId} className="account-item">
            <CurrentAccountTransactionDetails transaction={transaction}/>
        </div>
    })

    return(
        <div>
            <h5>Your Transactions</h5>
            <ul>{transactionInfo}</ul>
        </div>
    )
    
}

const mapStateToProps = state =>({
    transactions: getTransactions(state)
})

export default connect(mapStateToProps)(CurrentAccountTransaction)