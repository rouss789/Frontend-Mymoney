import {Routes,Route} from "react-router-dom"
import { Home} from "pages/Home/home"
import { Login } from "pages/Login/login"
import { Accounts } from "pages/Accounts/accounts"


/*Componente App */
export const App= ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/Login" element={<Login/>}/> 
            <Route path="/Accounts" element={<Accounts/>}/> 
           
        </Routes>
    )
}