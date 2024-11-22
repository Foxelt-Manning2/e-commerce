import { useNavigate } from "react-router-dom";
import { useProducts } from "./ProductContext"
import './order.css'
function Order() {
  const {cart,setCart} =useProducts();
  const navigate =useNavigate();
 function handleQuantityChange(e,id){

  const newQuantity =parseInt(e.target.value,10);
  if( newQuantity <1 ) return;
    setCart(c=>
    c.map((item)=>item.id === id?
    {...item,quantity:newQuantity}
    :item)
    )
 }
 function Checkout(){
  navigate('/checkout');
 }

 function removeFromCart(itemId){
   setCart(c => c.filter(item => item.id !== itemId))
 }

  return (
  <>
  <div className="cartpage">
    {cart.map((item,index)=><div className="cart-box item-cover" key={index}>
      <li> Item: {item.name}</li>
      <li> Price: {item.price}</li>
      <li> Quantity:<input type='number' value={item.quantity} onChange={(e)=>handleQuantityChange(e,item.id)}/></li>
      <img className="cart-image" src={item.image} />
      <div>
        <button  className='cart-button' onClick={()=> removeFromCart(item.id)}>Remove From Cart</button>
      </div>
    </div>)}
    <p className=""><b className="text-black">Total: $</b>{Math.round(cart.reduce((total,item)=>total+item.price*item.quantity,0)*100)/100}</p>
    <button className="cart-button" onClick={()=>Checkout()}>Check out items</button>
  </div>
  </>

  )
}

export default Order