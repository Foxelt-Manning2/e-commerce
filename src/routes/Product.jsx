
import { useNavigate, useParams } from "react-router-dom"
import { useProducts } from "./ProductContext";



function Product() {
   const { id } =useParams();
   const {products,setCart} = useProducts(); 
   const navigate = useNavigate();
   const product = products.find(p=> p.id === parseInt(id));
   if (!product){
    return <div> Item cannot be found</div>
   }

   function handleSubmit(product){
     setCart(
      cart=>{
        const currentCart = cart.find(item=> item.id === product.id);
        if(currentCart){
          return cart.map(item => item.id === product.id ?
          {...item, quantity : item.quantity +1}
          :item
          );
        }
        else{
          return [
            ...cart,{
            id:product.id,
            name:product.title,
            price:product.price,
            image:product.image,
            quantity:1
          }
          ]
        }
      }
     )
     navigate('/order');
   }
   
 

  return (
  <>
    <div>
      <div className="float-left">
        <p className=" text-black font-bold text-2xl">{product.title}</p>
        <p className="text-xl">
          <b className="font-extrabold text-black text-2xl">Description: </b>
        <br/>
        {product.description}</p>
        <img className="gap-6 m-8 w-3/6 h-1/2 "  src={product.image}/>
      </div>
      <div>
        <p><b className="font-extrabold text-black">Category:</b> {product.category}</p>
        <p><b className="font-extrabold text-black">Rating :</b> {product.rating.rate}</p>
        <p><b className="font-extrabold text-black">Votes: </b> {product.rating.count}</p>
        <button className=" bg-red-500" onClick={()=>handleSubmit(product)}>🛒</button>
        </div>
      </div>
  </>
  )
}

export default Product