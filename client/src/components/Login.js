import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const {push} = useHistory();

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const login = e => {
    e.preventDefault()
    axiosWithAuth()
    .post(`/api/login`, loginData)
    .then(res => {
      localStorage.setItem('token', JSON.stringify(res.data.payload))
      push('/protected');
    })
    .catch(err=>console.log(err));
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <div>
        <form onSubmit={login}>
          Username:
          <input
            type='text'
            name='username'
            value={loginData.username}
            onChange={handleChange}
          /><br/>
          Password:
          <input
            type='password'
            name='password'
            value={loginData.password}
            onChange={handleChange}
          /><br/>
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
