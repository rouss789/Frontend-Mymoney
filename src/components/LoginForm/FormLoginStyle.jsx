import {styled} from "@mui/material/styles"
import { TextField,Button } from "@mui/material"

//componente 
export const DivFormLogin = styled('div')({
    width:"400px",
    height:"100vh",
    display:"flex",
    //justifyContent:"center",
    alignItems:"center",
    margin:"10px",
    left: "900px",
    position:"absolute",
    
})

export const Form=styled('form')({
    width:"600px",
    height:"600px",
    boxShadow:"5px 8px 15px 8px #FFA62B",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    color:"#FFA62B",
    marginTop:"80px"
    

})
export const InputFormLogin=styled(TextField)({
    width:"80%",
    marginBottom:"15px",
    marginTop:"100px"
})

export const ButtomLogin=styled(Button)({
    width:"50%",
    marginTop:"40px",
    background:"#FFA62B"

})
