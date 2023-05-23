import { useState, useRef, useContext } from 'react';
import {useNavigate} from 'react-router-dom' ;
import {Button,Form,Container,Row,Col,Card,Spinner} from 'react-bootstrap'


import AuthContext from '../../Store/Auth-Context';

const LoginForm = () => {
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()

  const authCtx=useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPass = passwordRef.current.value;
    setIsLoading(true)

    if(isLogin){
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD43hx1Kysh-IuGSxl43hu86mmoxycYfT4',{
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPass,
          returnSecureToken:true
        }),headers:{
          'content-Type':'application/json'
        }
      }).then(res=>{
        if(res.ok){
         
          res.json().then(data=>{console.log(data.idToken);authCtx.login(data.idToken);navigate('/Store',{replace:true})})

        }else{
          res.json().then(data=>{
            let errorMessage = 'Authentication failed!';
            if(data &&data.error&&data.error.message){
            errorMessage = data.error.message; 
            alert(errorMessage) 
            }
          });
        }
        setIsLoading(false)
      })


    }else{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD43hx1Kysh-IuGSxl43hu86mmoxycYfT4',{
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPass,
          returnSecureToken:true
        }),headers:{
          'content-Type':'application/json'
        }
      }).then(res=>{
        if(res.ok){
          res.json().then(data=>{console.log(data.idToken);authCtx.login(data.idToken);navigate('/',{replace:true})})
        }else{
          res.json().then(data=>{
            let errorMessage = 'Authentication failed!';
            if(data &&data.error&&data.error.message){
            errorMessage = data.error.message; 
            alert(errorMessage) 
            }
          });
        }
        setIsLoading(false)
      })

      
    }

  }

  return (
    <Container>
      <Row className='m-5'>
      <h1 className='text-center'>{isLogin ? <b>Login</b> : <b>Sign Up</b>}</h1>
      </Row>
      <Card className="p-4 bg-black text-white">
      <Form onSubmit={submitHandler}>
       <Row className='mb-3'>
         <Form.Group controlId="email">
          <Form.Label><b>Your Email</b></Form.Label>
          <Form.Control type="email" required ref={emailRef}/>
         </Form.Group>
         </Row>
        <Row className='mb-3'>
          <Form.Group controlId="password">
            <Form.Label><b>Your Password</b></Form.Label>
            <Form.Control type="password" required ref={passwordRef}/>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          {!isLoading && <Col md={6} className="mt-3"><Button type='submit' variant ={ isLogin?'primary':'success'} className='w-100'>{isLogin?'Login':'Create Account'}</Button></Col>}
          {isLoading&&<Col md={6} className="mt-3"><Spinner/></Col>}
          <Col className="mt-3">
            <Button  className='w-100'
            variant={isLogin?'success':'primary'}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </Button></Col>
        </Row>
      </Form>
      </Card>
      </Container>
  );
};

export default LoginForm;
