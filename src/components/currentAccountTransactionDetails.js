import React from 'react';

const CurrentAccountTransactionDetails = (props) => {

    return(
        <div className="components">
            <p>Type: {props.transaction.type} </p>
            <p>Description: {props.transaction.description}</p>
            <p>Amount: {props.transaction.amount}</p>
            <p>Date: {props.transaction.date}</p>
            <p>Status: {props.transaction.status}</p>
        </div>
    )
}

export default CurrentAccountTransactionDetails