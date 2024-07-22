import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../../styles/authStyle.css";
import axios from "axios";
import { doLogin } from "../auth";

const Login = () => {
  const navigation = useNavigate();
  const [message, setMessage] = useState('');

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onHandlechnage = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

//   Login user
  const handleOnLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginUser = user;
      const response = await axios.post(`http://localhost:5001/user/login`, loginUser);
      console.log(response);
      setMessage(response?.response?.data?.message);
      setUser({
        email: "",
        password: "",
      });
      if(response.data.status){

        // save data into the local storage
        doLogin(response.data, () =>{
          console.log('Data is saved in local storage');
        });

        // navigate to home apage after the login
        navigation('/private/home');
      }
    
    } catch (error) {
      console.log(`something wrong when login`, error);
      setMessage(`${error.response.data.message}`)
    }
  };

  return (
    <>
      {/* .................................................. */}
      <div className="container" style={{ marginTop: "25px" }}>
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <h1 style={{ color: "blue" }}>Login </h1>
 {message ? <h4 style={{ color: "red" }}>{message}</h4> : null}
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control login__input"
                  onChange={onHandlechnage}
                  name="email"
                  value={user.email}
                />
              </div>

              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control login__input"
                  onChange={onHandlechnage}
                  name="password"
                  value={user.password}
                />
              </div>
              <button
                onClick={handleOnLoginSubmit}
                className="button login__submit"

              >
                <span className="button__text">Login In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <button
                className="button login__submit"
                onClick={()=>navigation('/register')}
              >
                <span className="button__text">Register</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
             			
            </form>
            <div className="social-login">
              {/* <h3>log in via</h3> */}
              {/* <div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div> */}
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>

      {/* ........................................................ */}
    </>
  );
};

export default Login;
