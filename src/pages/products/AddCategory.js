import React, { useState } from "react";
import styles from "./AddCategory.module.css";

function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [newCategory, setNewCategory] = useState([]);
  const [isCategoryAdded, setIsCategoryAdded] = useState(false);

  function categoryChangeHandler(e) {
    var newCategory = e.target.value;
    setCategoryName(newCategory);
    // console.log(newCategory)
  }
  function addCategory(e) {
    e.preventDefault();
    if (categoryName) {
    //  var myArr = categoryName;
      setNewCategory([...newCategory, categoryName]);
      localStorage.setItem("add-category", JSON.stringify([...newCategory, categoryName]));
      setIsCategoryAdded(true);
    }
  }

  return (
    <div className="container">
       {isCategoryAdded && (
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your category added successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      )}
      <div className={styles.mainBox}>
        <h2 style={{ textAlign: "center" }}>Add Category</h2>
        <form onSubmit={addCategory}>
          <div>
            <label className={styles.labelAddCategory} htmlFor="name">
              Category Name
            </label>
            <br />
            <input
              onChange={categoryChangeHandler}
              className={styles.inputAddCategory}
              type="text"
            />
          </div>
          <button type="submit" className={styles.addCategoryBtn}>
            ADD CATEGORY NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
