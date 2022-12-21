import React, { useState, useEffect } from "react";
import styles from "./Account.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function Account() {
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [pic, setPic] = useState('');
  const data = JSON.parse(localStorage.getItem("data"));
  const accountData = data.accountsPage;
  // const [profileData, setProfileData] = useState([]);
  // console.log(data)
  // console.log(accountData)

  function selectAccountHandler(e) {
    // console.log(typeof(e.target.value));
    setAccountType(e.target.value);
  }

  useEffect(() => {
    if(accountType == 'Admin'){
      setAccountName(accountData.Admin.name);
      setAccountType('Admin');
      setEmail(accountData.Admin.email);
      setPassword(accountData.Admin.password);
      setPhone(accountData.Admin.phone);
      setPic(accountData.Admin.profilePic);
    }
    else if(accountType == 'Merchant'){
      setAccountName(accountData.Merchant.name);
      setAccountType('Merchant');
      setEmail(accountData.Merchant.email);
      setPassword(accountData.Merchant.password);
      setPhone(accountData.Merchant.phone);
      setPic(accountData.Merchant.profilePic);
    }
    else if(accountType == 'Editor'){
      setAccountName(accountData.Editor.name);
      setAccountType('Editor');
      setEmail(accountData.Editor.email);
      setPassword(accountData.Editor.password);
      setPhone(accountData.Editor.phone);
      setPic(accountData.Editor.profilePic);
    }
    else{
      setAccountName(accountData.Customer.name);
      setAccountType('Customer');
      setEmail(accountData.Customer.email);
      setPassword(accountData.Customer.password);
      setPhone(accountData.Customer.phone);
      setPic(accountData.Customer.profilePic);
    }
  }, [accountType])
  
  function deletePic() {
    setPic("");
  }

  // function updateProfile() {

  // }

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <div className={styles.section1}>
        <h2>List of Accounts</h2>
        <p>Accounts</p>
        <select value={accountType} onChange={selectAccountHandler}>
          <option>Select Account</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Merchant</option>
          <option>Customer</option>
        </select>
      </div>
      <div className={styles.section2}>
        <div className={styles.leftBox}>
          <h2>Change Avatar</h2>
          <div className={styles.imgDiv}>
            <img
              style={{ marginTop: "20px" }}
              src={pic}
              alt="profile"
            />
            <div className={styles.profileDelete}>
              <RiDeleteBin6Line onClick={deletePic}/>
            </div>
          </div>
          <button className={styles.uploadBtn}>UPLOAD NEW PHOTO</button>
        </div>
        <div className={styles.rightBox}>
          <h2>Account Setting</h2>
          <form className={styles.accountForm}>
            <div>
              <label htmlFor="name">Account Name</label><br />
              <input value={accountName} onChange={(e) => setAccountName(e.target.value)} type="text" />
            </div>
            <div>
              <label htmlFor="email">Account Email</label><br />
              <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label><br />
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div>
              <label htmlFor="reEnter">Re-Enter password</label><br />
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label><br />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" />
            </div>
            <div>
              <label htmlFor="space">&nbsp;</label><br />
              <button style={{marginTop:"0px"}} className={styles.uploadBtn}>UPDATE YOUR PROFILE</button>
            </div>
            <button className={styles.uploadBtn}>DELETE YOUR ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
