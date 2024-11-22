import { useNavigate } from "react-router-dom";
import { useShop } from "./shopContext"


function ProductCategory() {
    const {productCategory} = useShop();
    const navigate =useNavigate();
    function handleSubmit(product){
        navigate(`/product/detail/${product}`)
     }
    
  return (
  <> <div className="imageGrid">

     {!productCategory.length<1?
         (productCategory.map((product,index)=>(<div className="item-cover"  key={index}>
            <br className="my-6"></br>
            <img src={product.image}></img>
            <p>{product.title}</p>
            <p ><b className="text-stone-900">$</b>  {product.price} </p>
            <button onClick={()=>handleSubmit(product.id)}>Check it Out</button>
        </div>))):(
            <>
            <div>LOADING....</div>
            </>
        )}
        </div>
  </>
  )
}

export default ProductCategory