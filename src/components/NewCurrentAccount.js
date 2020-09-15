import React , { useState} from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { newCurrentAccountRequested } from "../thunks";

const NewCurrentAccount = ({onSubmitPressed}) => {

    const history = useHistory();

    return (
        <div className="accountForm">
        <Form>
            <Button
                variant="success"
                onClick={() => {
                    onSubmitPressed();
                    history.push("/account")
                }}
                >Submit</Button>
        </Form>
        </div>
    )

    
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSubmitPressed: () => dispatch(newCurrentAccountRequested()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(NewCurrentAccount);