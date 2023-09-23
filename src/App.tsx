import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import ListProduct from "./Page/ListProduct";
import DetailProduct from "./Page/DetailProduct";
import SignIn from "./Page/SignIn";
import SignUp from "./Page/SignUp";
import AdminProduct from "./Page/Admin/AdminProduct";
import AddProduct from "./Page/Admin/AddProduct";
import EditProduct from "./Page/Admin/EditProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
