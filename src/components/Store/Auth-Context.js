import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  timeoutCheck:()=>{}
});

export const AuthContextProvider = (props) => {
  const initialToken=localStorage.getItem('token');
  const loggedInEmail=localStorage.getItem('email');
  const [token, setToken] = useState(initialToken);
  const [email,setEmail]=useState(loggedInEmail)
  const userIsloggedIn = !!token;
  const loginHandler = async (token,email) => {
   //code to clean email
   
    //storing to localstorage
    setToken(token);
    setEmail(email);
    localStorage.setItem('email',email) 
    try{   
        let response = await axios.post('https://crudcrud.com/api/9a3c7c465c5a4ad695e97f7f29c54c80/Cart',{id:email,items:[]})
        let data=response.data
        localStorage.setItem('userID',data._id)
    }
    catch(e){
      console.error(e.message)
    }
    localStorage.setItem('token',token)
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.clear()
  };
  const timeoutHandler=()=>{
    let min=5*60*1000;
    let now = new Date().getTime()
    let setupTime = localStorage.getItem('setupTime')
    if(setupTime==null){
      localStorage.setItem('setupTime',now)
    }else{
      if(now-setupTime>min){
        localStorage.clear()
        localStorage.setItem('setupTime',now)
      }
    }


  }

  const contextValue = {
    token: token,
    email:email,
    isLoggedIn: userIsloggedIn,
    login: loginHandler,
    logout: logoutHandler,
    timeoutCheck:timeoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
