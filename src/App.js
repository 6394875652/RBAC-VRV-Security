

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './conponents/Home';
import { AddNewProduct } from './seller/AddNewProduct';
import { RoleManagement } from './Admin/RoleManagement';
import { PermissionMangement } from './Admin/PermissionMangement';
import Navbar from './conponents/Navbar';
import { useState } from 'react'; 
import { useAuth } from './context/AuthContext'; 
import Login from './conponents/Login';

function App() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth(); 

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const PrivateRoute = ({ children, roles }) => {
    if (!user) return <Navigate to="/login" />; 
    if (!roles.includes(user.role)) return <Navigate to="/" />; 
    return children;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute roles={['User', 'Seller', 'Admin']}><Home products={products} /></PrivateRoute>} />
          <Route path="/addnewproduct" element={<PrivateRoute roles={['Seller', 'Admin']}><AddNewProduct addProduct={addProduct} /></PrivateRoute>} />
          <Route path="/rolemanagement" element={<PrivateRoute roles={['Admin']}><RoleManagement /></PrivateRoute>} />
          <Route path="/givepermission" element={<PrivateRoute roles={['Admin']}><PermissionMangement /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

