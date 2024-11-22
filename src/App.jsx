import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Order from "./routes/Order";
import Notfound from "./routes/Notfound";
import Login from "./routes/Login";
import NavBar from "./routes/NavBar";
import Product from "./routes/Product";
import SignUp from "./routes/SignIn";
import { useProducts } from "./routes/ProductContext";
import Checkout from "./routes/Checkout";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProductCategory from "./routes/ProductCategory";
import { ShopProvider } from './routes/shopContext.jsx'

function App() {
	const { loggedIn} = useProducts();
	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route exact path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/Product/detail/:id" element={<Product />} />
				<Route element={<ProtectedRoute loggedIn={loggedIn} />}>
					<Route path="/order" element={<Order />} />
					<Route path="/checkout" element={<Checkout />} />
				</Route>

				<Route path="/product/category/:category" element={<ShopProvider><ProductCategory/></ShopProvider>} />

				<Route path="*" element={<Notfound />} />
			</Route>
		</Routes>
	);
}

export default App;
