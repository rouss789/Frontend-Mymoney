import { useState } from "react";
import { DivFormAddaccounts, Form,InputFormaccounts,ButtomFormaccounts} from "./FormaccountsStyle";
import Navbar from "../Navbar/Navbar";
export const Formaccounts =()=>{

    const [formData, setFormData] = useState({
        name:{
            value:"",
            error:"false",

        },
        typeAccount:{
            value:"",
            error:"false",
        },
        numberAccount:{
            value:"",
            error:"false",
        },
        balance:{
            value:"",
            error:"false",
        },
        cutoffDate:{
            value:"",
            error:"false",
        }
    });

    const submit =(e)=>{
        e.preventDefault();
        console.log(formData);
    }

    const change =(e)=>{
       const {name, value}=e.target
       setFormData({...formData,[name]:{value,error:false}})
    }

    return <DivFormAddaccounts>
        <Navbar/>
        <Form onSubmit={submit}>
            <h1>Registro de Cuentas</h1>
            <InputFormaccounts label="Nombre de la cuenta" name="name" onChange={change}/>
            <InputFormaccounts label="Tipo" name="typeAccount" onChange={change}/>
            <InputFormaccounts label="Número de cuenta" name="numberAccount" onChange={change}/>
            <InputFormaccounts label="Saldo actual" name="balance" onChange={change}/>
            <InputFormaccounts label="Fecha de corte" name="cutoffDate" onChange={change}/>
            <ButtomFormaccounts variant="contained" type="submit">Agregar cuenta</ButtomFormaccounts>
        </Form>
    </DivFormAddaccounts>
};