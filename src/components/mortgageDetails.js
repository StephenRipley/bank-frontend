import React from "react";

const MortgageDetails = (props) => {
  if (!props.mortgage) {
    return null;
  }

  return (
    <div>
      <h1>Mortgage details</h1>
      <p>
        Your monthly payment will be £{props.mortgage.monthlyPayment.toFixed(2)}
      </p>
    </div>
  );
};

export default MortgageDetails;
