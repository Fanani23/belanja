import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product_name, setProductName] = useState("");
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [category_id, setCategoryId] = useState();
  const [photo, setPhoto] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const editProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("stock", stock);
      formData.append("price", price);
      formData.append("category_id", category_id);
      formData.append("photo", photo);
      console.log(formData);
      await axios.put(`http://localhost:3010/product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:3010/product/${id}`);
    setProductName(response.data.product_name);
    setStock(response.data.stock);
    setPrice(response.data.price);
    setCategoryId(response.data.category_id);
    setPhoto(response.data.photo);
    console.log(response);
  };

  return (
    <div>
      <div>
        <form onSubmit={editProduct}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={product_name}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stock</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Stock"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="price"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Category Id</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={category_id}
                onChange={(e) => setCategoryId(e.target.value)}
                placeholder="Category Id"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Photo</label>
            <div className="control">
              <input
                type="file"
                className="input"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
          </div>
          <div>
            <button type="submit">save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProduct;
