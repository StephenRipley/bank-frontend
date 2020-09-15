import React from "react";
import AccountDetails from "./AccountDetails";
import { getLoggedInUser } from "../selectors";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { currentTransactionsRequest } from "../thunks";


const Account = ({ userAccounts, onTransactionsPressed }) => {    

    const bankAccounts = userAccounts.userAccount
    const accountInfo = bankAccounts.map((account) => {

        const body = {
            transactionRequestId: account.accountId,
        }

        return <div key={account.accountId} className="account-item">
            <AccountDetails account={account}/>
            <Form>
            <Button onClick={()=>{
                onTransactionsPressed(body);
            }}>Transaction History</Button>
        </Form>     
        </div>
    });

        return (
            <div>
                <h5>Accounts</h5>
                <ul>{accountInfo}</ul>
            </div>   
        ) 
}

    const mapStateToProps = state => ({
        userAccounts: getLoggedInUser(state),
    })

    const mapDispatchToProps = dispatch => ({
        onTransactionsPressed: body => dispatch(currentTransactionsRequest(body))
    })

export default connect(mapStateToProps,mapDispatchToProps)(Account);