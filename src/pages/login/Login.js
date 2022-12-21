import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";


function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function usernameChangeHandler(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function passwordChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }


  function loginHandler(event) {
    event.preventDefault();

    if(username === "admin" && password === "admin"){
      props.onLogin(true)
      navigate('/')
    }

  }

  return (
    <div className="container" >
      <div className={styles.loginMain}>
        <div className={styles.loginHeading}>Welcome to Dashboard, Login</div>
        <div className={styles.formOuterDiv}>
          <form className={styles.formLogin} onSubmit={loginHandler} >
            <label className={styles.labelLogin} htmlFor="username">Username</label>
            <input
              style={{ backgroundColor: "#54657d" }}
              type="text"
              onChange={usernameChangeHandler}
              required
            />
            <label className={styles.labelLogin} style={{marginTop:"15px"}} htmlFor="password">Password</label>
            <input
              style={{ backgroundColor: "#54657d" }}
              type="password"
              onChange={passwordChangeHandler}
              required
            />
            <button className={styles.loginBtn} type='submit'>LOGIN</button>
            <button className={styles.loginBtn}>FORGOT YOUR PASSWORD?</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
