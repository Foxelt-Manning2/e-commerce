import { useProducts } from './ProductContext'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import picture from '../assets/Fashion-Model-Man-PNG-Picture.png'
function Home () {
  const { products } = useProducts()
  const navigate = useNavigate()

  function handleSubmit (product) {
    navigate(`/product/detail/${product}`)
  }
  const Men = products.filter(product => product.category === "men's clothing")
  const women = products.filter(
    product => product.category === "women's clothing"
  )
  const jewelery = products.filter(product => product.category === 'jewelery')
  const electronics = products.filter(
    product => product.category === 'electronics'
  )
  return (
    <>
      <div>
        {products.length > 0 ? (
          <>
            <div className='greeting'>
              <section className='text'>
                <li>New Arrivals only</li>
                <p>
                  new 👋
                  <br />
                  collections
                  <br />
                  for everyone
                </p>
              </section>
              <img src={picture} />
            </div>
            <div>
              <p className='text-black text-center font-semibold'>Popular in MEN</p>
              <hr />
            </div>
            <div className='imageGrid'>
              {Men.map((product, index) => (
                <div className='item-cover' key={index}>
                  <p>{product.title}</p>
                  <hr />
                  <img src={product.image}></img>
                  <p>
                    <b>$</b> {product.price}{' '}
                  </p>
                  <button onClick={() => handleSubmit(product.id)}>
                    Check it Out
                  </button>
                </div>
              ))}
            </div>
            <div>
              <p className='text-black text-center font-semibold'>Popular in WOMEN</p>
              <hr />
            </div>
            <div className='imageGrid'>
              {women.map((product, index) => (
                <div className='item-cover' key={index}>
                  <p>{product.title}</p>
                  <hr />
                  <img src={product.image}></img>
                  <p>
                    <b>$</b> {product.price}{' '}
                  </p>
                  <button onClick={() => handleSubmit(product.id)}>
                    Check it Out
                  </button>
                </div>
              ))}
            </div>
            <div>
              <p className='text-black text-center font-semibold'>Popular in JEWELRY</p>
              <hr />
            </div>
            <div className='imageGrid'>
              {jewelery.map((product, index) => (
                <div className='item-cover' key={index}>
                  <p>{product.title}</p>
                  <hr />
                  <img src={product.image}></img>
                  <p>
                    <b>$</b> {product.price}{' '}
                  </p>
                  <button onClick={() => handleSubmit(product.id)}>
                    Check it Out
                  </button>
                </div>
              ))}
            </div>
            <div>
              <p className='text-black text-center font-semibold'>Popular in ELECTRONICS</p>
              <hr />
            </div>
            <div className='imageGrid'>
              {electronics.map((product, index) => (
                <div className='item-cover' key={index}>
                  <p>{product.title}</p>
                  <hr />
                  <img src={product.image}></img>
                  <p>
                    <b> $</b> {product.price}{' '}
                  </p>
                  <button onClick={() => handleSubmit(product.id)}>
                    Check it Out
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='spinner'></div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
