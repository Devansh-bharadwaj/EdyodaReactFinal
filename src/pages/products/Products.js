import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Products() {
  const productData = JSON.parse(localStorage.getItem("data"));
  const [products, setProducts] = useState(productData.productsPage.products);
  const [myCategory, setMyCategory] = useState(productData.productsPage.categories);
  console.log(myCategory)
  // console.log(productData.name)
  const navigate = useNavigate();

  function addNewProduct() {
    navigate("/add-product");
  }

  function addNewCategory() {
    navigate("/add-category");
  }

  useEffect(() => {
    var newProduct = JSON.parse(localStorage.getItem("add-product"));
    if (newProduct) {
      setProducts([...products, ...newProduct]);
      console.log(products);
    }
  }, []);


  useEffect(() => {
    var newCategory = JSON.parse(localStorage.getItem("add-category"));
    console.log(newCategory)
    if(newCategory) {
      setMyCategory([...myCategory, ...newCategory]);
      console.log(myCategory);
    }
  }, []);

  const removeElement = (id) => {
    const newArr = products.filter((currElem) => {
      return currElem.name !== id;
    });
    setProducts(newArr);
  };

  // function deleteSelectedItem(event) {
  //   if(event.target.checked){
  //     const newArray = products.filter((currElem) => {
  //       return currElem
  //     })
  //   }
  // }

  // var newProduct = JSON.parse(localStorage.getItem("add-product"))
  // setProducts([...products, newProduct]);
  // console.log(products);

  console.log(products);
  return (
    <div className="container mt-5">
      <div className={styles.mainBox}>
        <div className={styles.leftBox}>
          <div className={styles.innerLeft}>
            <table
              className="table table-hover"
              style={{ marginBottom: "0px" }}
            >
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">UNIT SOLD</th>
                  <th scope="col">IN STOCK</th>
                  <th scope="col">EXPIRE DATE</th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.name}>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td>{product.name}</td>
                      <td>{product.unitSold}</td>
                      <td>{product.stock}</td>
                      <td>{product.expireDate}</td>
                      <td>
                        <div
                          className={styles.deleteStyle}
                          onClick={() => removeElement(product.name)}
                        >
                          <RiDeleteBin6Line />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className={styles.productBtn} onClick={addNewProduct}>
            ADD NEW PRODUCT
          </button>
          <button className={styles.productBtn}>
            DELETE SELECTED PRODUCTS
          </button>
        </div>
        <div className={styles.rightBox}>
          <h2>Product Categories</h2>
          <div className={styles.innerLeft} style={{ marginTop: "30px" }}>
            <table className="table" style={{ marginBottom: "0px" }}>
              <tbody>
                {myCategory?.map((product, i) => {
                  return (
                    <tr key={i}>
                      <td>{product}</td>
                      <td>
                        <div className={styles.deleteStyle}>
                          <RiDeleteBin6Line />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className={styles.productBtn} onClick={addNewCategory}>ADD NEW CATEGORY</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
