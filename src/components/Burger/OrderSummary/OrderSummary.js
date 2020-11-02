import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../UI/Button/Button";


const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li  key={uuidv4()}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        })
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success'clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxiliary>
    )
};

export default OrderSummary;