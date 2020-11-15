import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
    console.log(props.ingredients)
    const IngridentsSummary=Object.keys(props.ingredients).map(igkey => {
    return (<li>{igkey}:{props.ingredients[igkey]}</li>)
    })
    return(
        <Aux>
            <h1>Order Summary</h1>
            <p>Here are yor Ingridents</p>
            <ul>
                {IngridentsSummary}
            </ul>
            <p><strong>Total price is: {props.price}</strong></p>
            <p>Do you want to checkout?</p>
            <Button 
            btnType="Success"
            clicked={props.purchaseContinue}>Continue</Button>
            <Button 
            btnType="Danger"
            clicked={props.purchaseCancel}>Cancel</Button>
            </Aux>
    )
    }
export default OrderSummary;