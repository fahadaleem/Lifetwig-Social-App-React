import React from "react"
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



const Navbar = ()=>{
    return(
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
                Material UI
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default Navbar