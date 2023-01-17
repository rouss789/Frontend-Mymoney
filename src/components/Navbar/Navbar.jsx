import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { IconButton,  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


//const useStyles = makeStyles(theme =>({
    //offset:theme.mixins.toolbar
//}))

const Navbar =()=>{
    //const classes = useStyles()
    return(
            <div><AppBar position="fixed" color="warning">
              <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                  Inicio
                </Typography>
              </Toolbar>
            </AppBar>
       
            </div>
    )
}
export default Navbar