import React, {  useEffect, useState } from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import getBasketTotal from './reducer';

function Subtotal(  ){
  var tempPrice=0;
  const [{basket}, dispatch] = useStateValue();  //pulling data from data layer
  const [total, setTotal] = useState();
 useEffect(() => {
    var tempPrice=0;
    console.log(basket);
    basket.forEach((product,index)=>{     
     tempPrice = tempPrice + product.price
},[total])
 
    console.log(tempPrice)
    setTotal(tempPrice)
  },[]);
  
  /*const handlePrice = () => {
    getBasketTotal(basket) ;
   }
*/
    return <div className="subtotal">
        
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
              Subtotal ({basket?.length} items):
              <stong>{value}</stong>
            </p>
            <small className="subtotal__gift">
            <input type='checkbox' /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        //value= {getBasketTotal(basket)}  // if we use the other fn in reducer
        value= {total}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button>Proceed to Checkout</button>
        </div>
        
    
}

export default Subtotal;