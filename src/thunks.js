import {
  createUser,
  loginUser,
  loadAllUsers,
  newLoan,
  returnCheckedMortgage,
  returnCurrentTransactions,
} from "./actions";
import axios from "axios";

export const loadAll = () => async (dispatch, getState) => {
  const url = "http://localhost:8088/bank/login/AllUsers";
  try {
    axios.get(url).then((all) => {
      dispatch(loadAllUsers(all));
    });
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const loginRequested = (body) => async (dispatch) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const url = "http://localhost:8088/bank/login/LoginUser";

  try {
    const loginRequest = JSON.stringify(body);
    console.log("Login request " + loginRequest);
    axios.post(url, loginRequest, axiosConfig).then((response) => {
      console.log("ANYTHING");
      console.log(response);
      dispatch(loginUser(response));
    });
  } catch (err) {
    console.log("Sausages");
    dispatch(displayAlert(err));
  }
};

export const createUserRequest = (body) => (dispatch) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const url = "http://localhost:8088/bank/login/RegisterUser";

  try {
    const newUserRequest = JSON.stringify(body);
    axios.post(url, newUserRequest, axiosConfig).then((newUser) => {
      console.log(newUser);
      dispatch(createUser(newUser));
    });
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const loanCheckRequested = (body) => (dispatch) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const url = "http://localhost:8088/bank/loanChecker/calculateLoan";

  try {
    const newLoanRequest = JSON.stringify(body);
    axios.post(url, newLoanRequest, axiosConfig).then((loan) => {
      dispatch(newLoan(loan));
    });
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const submitMortgage = (body) => async (dispatch) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const url = "http://localhost:8088/bank/mortgageCalculator/calculateMortgage";

  try {
    const mortgage = JSON.stringify(body);
    await axios.post(url, mortgage, axiosConfig).then((checkedMortgage) => {
      console.log(checkedMortgage);
      dispatch(returnCheckedMortgage(checkedMortgage));
    });
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const currentTransactionsRequest = (body) => async (dispatch) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const url = "http://localhost:8088/bank/account/transactions";

  try {
    const transactions = JSON.stringify(body);
    console.log(transactions)
    await axios.post(url, transactions, axiosConfig).then((currentTransactions) => {
      console.log(currentTransactions);
      dispatch(returnCurrentTransactions(currentTransactions));
      window.location = "/account/currentTransactions"
    });
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const newCurrentAccountRequested = () => async (dispatch) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
    const url = "http://localhost:8088/bank/CAController/CreateCurrentAccount"
    
    try {
      await axios.post(url, axiosConfig).then((currentAccount) => {
        console.log(currentAccount)
      });
    } catch (error) {
      dispatch(displayAlert(error));
  }
}

export const displayAlert = (text) => () => {
  alert(text);
};
