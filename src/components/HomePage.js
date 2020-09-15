import React from "react";
import "../App.css";
import { RiBankLine } from "react-icons/ri";
import { getLoggedInBool, getLoggedInUser } from "../selectors";
import { connect } from "react-redux";

const HomePage = ({ isLoggedIn, user }) => {
  return (
    <div className="components">
      <h1>
        | <RiBankLine /> | Welcome to FDM Bank!
      </h1>
      <h3>Thank you for choosing to bank with FDM</h3>
      <br />
      {isLoggedIn === false && (
        <h4>If you wish to open an account please register first then login</h4>
      )}
      {isLoggedIn === true && (
        <h3>
          Hello, {user.firstName} {user.lastName}, what can we help you with
          today?
        </h3>
      )}
      <p>
        This site will allow you to use our loan checker or mortgage calculator
        without an account
      </p>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedInBool(state),
  user: getLoggedInUser(state),
});

export default connect(mapStateToProps)(HomePage);
