import { useState } from "react";
import { useProducts } from "./ProductContext";
import './order.css'
import { Link } from "react-router-dom";

function Checkout() {
    const {cart,setCart,user,logout}= useProducts()
    const [agree,setAgree]= useState(true);

   function handleButton(){
    setAgree(false);
    setCart([]);
   }

  return (
    <>
     <div>
            {agree? (
                <>

    
            <div className="cart-box1 item-cover">
            <p>
               {user.name}<br/> 
                You have bought
            </p>
                {cart.map((items,index)=>
                     <div key={index} className="item-cover">
                        <p>{items.quantity} {items.name}</p>
                        <img  className='cart-image'src={items.image}/>
                     </div>)}
            </div>
                
                <br />
                <br />
                <div className="text-black cart-box2">
                    Contact Info :
                <p><b>Country :</b> {user.country}</p>
                <p><b>Address :</b> {user.address}</p>
                <p><b>Phone number :</b> {user.number}</p>
            <button onClick={()=>handleButton()}>Proceed</button>
                </div>
                <p>if this is not your contact info please
                <Link onClick={()=>logout()} className="m-5 no-underline text-green-700">Logout</Link> </p>
                </>
            ):(
                <div className="place-self-center text-red-600">
                <p>Thank you for your business</p>
                <p>Please continue to patronage us</p>
            </div>
            )
            
         }
       
     </div>
    </>
  )
}

export default Checkout