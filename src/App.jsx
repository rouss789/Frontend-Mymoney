import {Routes,Route} from "react-router-dom"
import {Login} from "./pages/Login";
import { Addaccounts } from "./pages/Addaccounts";



/*Componente App */
export const App= ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/> 
            <Route path="/newaccounts" element={<Addaccounts/>}/>    
        </Routes>
    )
}