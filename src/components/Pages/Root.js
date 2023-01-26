import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar'


const Root = ()=>{
    return <>
    <NavBar></NavBar>
    <Outlet/>
    </>
    
}

export default Root