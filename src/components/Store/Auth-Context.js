import React, { useState,useContext } from "react";
import axios from 'axios'
import CartContext from "./Cart-Context";

const AuthContext = React.createContext({
  token: "",
  email:"",
  _id:"",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  timeoutCheck:()=>{}
});



export const AuthContextProvider = (props) => {
  const cartCtx=useContext(CartContext)
  const initialToken=localStorage.getItem('token');
  const loggedInEmail=localStorage.getItem('email');
  const initialID=localStorage.getItem('userID')
  const [token, setToken] = useState(initialToken);
  const [email,setEmail]=useState(loggedInEmail)
  const [_id,setId]=useState(initialID)
  const userIsloggedIn = !!token;
  //function storing to localstorage and state
  let setValue =(email,id,token)=>{
    setId(id)
    setToken(token);
    setEmail(email);
    
  }

  const loginHandler = async (token,email) => { 
    try{
      let data 
      let response = await axios.get('https://crudcrud.com/api/0c2288e2b93241b6b8af2e0dc6f058bc/Cart')
      if(response.data.length==0){
        let response = await axios.post('https://crudcrud.com/api/0c2288e2b93241b6b8af2e0dc6f058bc/Cart',{id:email,items:[]})
        data=response.data 
      }
      else {
        data= response.data
        for(let i=0;i<data.length;i++){
          if(data[i].id==email){
            data=data[i]
          }

        }
      }   
        console.log("id updated",data._id)
        await setValue(email,data._id,token)
        localStorage.setItem('email',email)
        localStorage.setItem('userID',data._id)
        localStorage.setItem('token',token)
        
        
    }
    catch(e){
      console.error(e.message)
    }
    
    return "completed"
  };


  const logoutHandler = () => {
    localStorage.clear()
    setValue(null,null,null)
    cartCtx.emptyCart();
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
    _id: _id,
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
