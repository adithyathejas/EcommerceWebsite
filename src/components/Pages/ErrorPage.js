import { Link } from "react-router-dom";
import NavBar from "../Navbar";



const ErrorPage =()=>{
    
    return(
            <>
            <NavBar/>
            <h1>The link you are looking to is not found</h1>
            <center>
            <Link to ='..' className="btn btn-primary" relative="path">Go to previous Page</Link>
            </center>
           
            </>
    );
    
}

export default ErrorPage