import { useState } from "react";
import { DivFormLogin, Form,InputFormLogin,ButtomLogin} from "./FormLoginStyle";
import Navbar from "../Navbar/Navbar";

export const FormLogin =(props)=>{

    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

    const submit =(e)=>{
        e.preventDefault();
        console.log(formData);
    }

   /* const change =(e)=>{
       const {name, value}=e.target
       setFormData({...formData,[name]:{value,error:false}})
    }*/
      const change =(e)=>{
        const inputValue = e.targe.value;
        const inputName = e.targe.name;
        const currentData = {...formData};
        currentData[inputName]= inputValue;
        setFormData(currentData);

      }

    return <DivFormLogin>
        <Navbar/>
        <Form onSubmit={submit}>
            <h1>Bienvenido</h1>
            <InputFormLogin type="text" name="email" label="Correo Electronico"   onChange={change}/>
            <InputFormLogin  type="password" name="password" label="Contraseña"  onChange={change}/>
            <ButtomLogin variant="contained" type="submit">Iniciar sesión</ButtomLogin>
        </Form>
    </DivFormLogin>
    
};
