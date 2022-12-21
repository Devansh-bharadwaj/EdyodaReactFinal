import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import { MdCloudUpload } from 'react-icons/md'
// import { useFormik } from "formik";


function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [stock, setStock] = useState('');
    const [newProduct, setNewProduct] = useState([]);
    const [unitSold, setUnitSold] = useState('');


    function nameChangeHandler(e) {
        // console.log(e.target.value);
        setName(e.target.value)
    }
    function descChangeHandler(e) {
        // console.log(e.target.value);
        setDescription(e.target.value)
    }
    function selectCategory(e) {
        // console.log(e.target.value);
        setCategory(e.target.value)
    }
    function dateHandler(e) {
        // console.log(e.target.value);
        setExpireDate(e.target.value)
    }
    function unitHandler(e) {
        // console.log(e.target.value);
        setStock(e.target.value)
    }
    function unitSoldChangeHandler(e) {
      setUnitSold(e.target.value)
    }

    function addProduct(e){
        e.preventDefault();
        if(name && description && expireDate && stock && unitSold){
          console.log("yes");
          var myArr = {name, description, category, expireDate, stock, unitSold};
          setNewProduct([myArr]);
          localStorage.setItem("add-product", JSON.stringify([myArr]))
          console.log(newProduct);
        }
    }

  return (
    <div className="container">
      <div className={styles.mainBox}>
        <h2>Add Product</h2>
        <div className={styles.mainBoxInner}>
          <div className={styles.innerBoxleft}>
            <form onSubmit={addProduct}>
              <div>
                <label className={styles.labelAddProduct} htmlFor="name">Product Name</label>
                <br />
                <input onChange={nameChangeHandler} className={styles.inputAddProduct} type="text" />
              </div>
              <div>
                <label className={styles.labelAddProduct} htmlFor="description">Description</label>
                <br />
                <textarea onChange={descChangeHandler} className={styles.inputAddProduct} type="text" />
              </div>
              <div>
                <label className={styles.labelAddProduct} htmlFor="name">Unit Sold</label>
                <br />
                <input onChange={unitSoldChangeHandler} className={styles.inputAddProduct} type="text" />
              </div>
              <div>
                <label className={styles.labelAddProduct} htmlFor="name">Category</label>
                <br />
                <select value={category} onChange={selectCategory}>
                    <option>New Arrival</option>
                    <option>Most Popular</option>
                    <option>Trending</option>
                </select>
              </div>
              <div className={styles.stockDiv}>
                <div>
                    <label className={styles.labelAddProduct} htmlFor="date">Expire Date</label>
                    <input onChange={dateHandler} className={styles.inputAddProduct} type="date" />
                </div>
                <div>
                    <label className={styles.labelAddProduct} htmlFor="unit">Units In Stock</label>
                    <input onChange={unitHandler} className={styles.inputAddProduct} type="text" />
                </div>
              </div>
              <button type="submit" className={styles.uploadImage}>ADD PRODUCT NOW</button>
            </form>
          </div>
          <div className={styles.innerBoxRight}>
            <div className={styles.uploadDiv}>
                <MdCloudUpload className={styles.uploadLogo}/>
            </div>
            <button className={styles.uploadImage}>UPLOAD PRODUCT IMAGE</button>
          </div>
        </div>
        {/* <button type="submit" className={styles.uploadImage}>ADD PRODUCT NOW</button> */}
      </div>
    </div>
  );
}

export default AddProduct;
