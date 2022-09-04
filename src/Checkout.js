import React from "react";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import {useStateValue} from './StateProvider'
function Checkout(){
    const [{basket,user}, dispatch] = useStateValue();  //pulling data from data layer
    return(
       <div className="checkout">
       <div className="checkout__left">
       
          <img className="checkout__ad" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/01/PINTEREST-Sizes-2.jpg?auto=format&q=60&fit=max&w=930" alt="" />
       
       <div>
             <h3>Hello {user?.email}</h3>

           <h2 className="checkout__title">
               Your Shopping Basket
            </h2>
            {    basket.map ( item => (
             <CheckoutProduct
             id={item.id}
             title= {item.title}
             Image={item.image}
             price={item.price}
             rating={item.rating}
             /> 
            ))}
           
       </div>
       </div>
       <div className="checkout__right">
         <Subtotal />
       </div>
        </div>
    )
}

export default Checkout;