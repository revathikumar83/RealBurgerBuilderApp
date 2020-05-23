import React, { Component } from 'react';
//import classes from './css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';

class Orders extends Component {
state = {
    orders: [],
    loading: true
}

componentDidMount(){
    axios.get('./orders.json')
    .then(res => {
        const fetchedOrders = [];
        for(let key in res.data){
            fetchedOrders.push({ ...res.data[key], id:key})
        }
        this.setState({loading: false, orders: fetchedOrders})

    })
    .catch(error => {
        this.setState({loading: false }) 
    })
}
render() {

    return (
      <div>  
          {this.state.orders.map(order=>(
              <Order key={order.id}
                     ingridients={order.ingridients}
                     price={order.price}/>
          ))}
          
      </div>
   
    );
}
    
}

export default withErrorHandler(Orders, axios);