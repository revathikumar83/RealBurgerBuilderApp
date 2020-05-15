import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be functional component, doesn't have to be class component
    componentWillUpdate(){
        console.log('[ordersummary] willUpdate');
    }
    
   render(){
        const ingridientSummary = Object.keys(this.props.ingridients)
        .map( igkey => {
            return ( <li key={igkey}>
                <span style={{textTransform:'capitalize'}}> {igkey} </span> : {this.props.ingridients[igkey] 
                }
            </li> )
        });

    return(
    <Aux>
    <h3>Your order</h3>
    <p>A delicious burger with the following ingridients:</p>
    <ul>{ingridientSummary}</ul>
    <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
    <p>Continue to Checkout?</p>
    
    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

   </Aux>
    );
    }
}

export default OrderSummary;