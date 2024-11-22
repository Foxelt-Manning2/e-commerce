import { Link, Outlet } from 'react-router-dom'
import { useProducts } from './ProductContext'

function NavBar () {
  const { cart, loggedIn, logout } = useProducts()
  return (
    <>
      <div className='navbar'>
        <p className='Foxy'>🦊 Foxelts Shop</p>
        <hr />
        <section>
          <Link to={'/'}> HOME</Link>
          <Link to={`product/category/${"men's clothing"}`}>MEN</Link>
          <Link to={`/product/category/${"women's clothing"}`}>WOMEN</Link>
          <Link to={`/product/category/${'jewelery'}`}>JEWELRY</Link>
          <Link to={`/product/category/${'electronics'}`}>ELECTRONICS</Link>
        </section>
        <hr />
        {!loggedIn ? (
          <Link to={'/login'}>Login</Link>
        ) : (
          <>
            <Link onClick={() => logout()}>Logout</Link>
          </>
        )}
        <Link to={'/order'} className='m-5 text-center no-underline '>
          <p className='fly'>
            🛒
            <sup className='border-control'>
              {cart?.reduce((total, item) => total + item.quantity, 0) || 0}
            </sup>
          </p>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar
