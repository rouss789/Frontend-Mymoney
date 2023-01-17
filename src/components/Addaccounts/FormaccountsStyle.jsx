import {styled} from "@mui/material/styles"
import { TextField,Button } from "@mui/material"

//componente 
export const DivFormAddaccounts = styled('div')({
    width:"100",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"50px",
})
export const Form=styled('form')({
    width:"600px",
    height:"600px",
    boxShadow:"5px 8px 15px 8px #FFA62B",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    color:"#FFA62B"

})
export const InputFormaccounts=styled(TextField)({
    width:"80%",
    marginBottom:"15px",
})

export const ButtomFormaccounts=styled(Button)({
    width:"80%",
    marginTop:"20px",
    background:"#FFA62B"

})
