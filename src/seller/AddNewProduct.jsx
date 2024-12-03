// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// export const AddNewProduct=({ addProduct })=> {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !description || !price || !image) {
//       alert('Please fill in all fields!');
//       return;
//     }

//     // Create new product object
//     const newProduct = {
//       name,
//       description,
//       price,
//       image,
//     };

//     // Pass new product to parent (Home.js)
//     addProduct(newProduct);

//     // Redirect back to home page
//     navigate('/');
//   };

//   return (
//     <div className="container my-4">
//       <h2>Add New Product</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="productName">
//           <Form.Label>Product Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter product name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="productDescription">
//           <Form.Label>Product Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             placeholder="Enter product description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="productPrice">
//           <Form.Label>Price</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="productImage">
//           <Form.Label>Product Image URL</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Add Product
//         </Button>
//       </Form>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// export const AddNewProduct = ({ addProduct }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation: Check if all fields are filled
//     if (!name || !description || !price || !image) {
//       alert('Please fill in all fields!');
//       return;
//     }

//     // Create new product object
//     const newProduct = {
//       name,
//       description,
//       price,
//       image,
//     };

//     // Pass new product to parent (App.js)
//     addProduct(newProduct);

//     // Redirect to home page after adding product
//     navigate('/');
//   };

//   return (
//     <div className="container my-4">
//       <h2>Add New Product</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="productName">
//           <Form.Label>Product Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter product name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="productDescription">
//           <Form.Label>Product Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             placeholder="Enter product description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="productPrice">
//           <Form.Label>Price</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="productImage">
//           <Form.Label>Product Image URL</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Add Product
//         </Button>
//       </Form>
//     </div>
//   );
// };

// Inside AddNewProduct.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const AddNewProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !image) {
      alert('Please fill in all fields!');
      return;
    }

    const newProduct = {
      name,
      description,
      price,
      image,
    };

    addProduct(newProduct); // Pass new product to the parent (App.js)
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="container my-4">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productImage">
          <Form.Label>Product Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};
