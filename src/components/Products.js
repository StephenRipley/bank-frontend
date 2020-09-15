import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getLoggedInBool } from "../selectors";
import { Link } from "react-router-dom";

const Products = ({isLoggedIn}) => {

    return (
        <div>
        <h3>Current Accounts</h3>
        {isLoggedIn === true && (
        <Link to="/newcurrentaccount">Flex Account</Link>
        )}
         {isLoggedIn === false && (
        <Link to="/login">Flex Account</Link>
        )}
        </div>
    )

}

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedInBool(state),
});

export default connect(mapStateToProps)(Products);
