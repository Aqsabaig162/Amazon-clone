import React from "react";
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
function CheckoutProduct({id, Image,title,price, rating}){
    const [{basket}, dispatch] = useStateValue();  //pulling data from data layer
   const removeFromBasket = () => {
       dispatch (
           {
               type: 'REMOVE_FROM_BASKET',
               id: id, 
           }
       )
   }
    return(
        <div className="checkoutProduct">
       <img className="checkoutProduct__image" src={Image}/>
        <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
            {title}
        </p>
        <p className="checkoutProduct__price">
           <small>$</small>
           <strong>{price }</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating) 
               .fill()
               .map((_, i) => (
                <p>🌟</p>
               ))}
        </div>
        <button onClick={removeFromBasket}> Remove from bucket </button>
        </div>
        
        </div>
    )
}
export default CheckoutProduct