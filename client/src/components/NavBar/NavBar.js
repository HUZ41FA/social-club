import React from 'react'
import {AppBar, Typography} from "@material-ui/core"
import socialclub from "../../images/socialclub.png"
import {theme} from "../../customTheme"
import { ThemeProvider } from '@material-ui/core';
import useStyles from "./styles"

export const NavBar = () => {
    const classes=useStyles()
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <img className={classes.image} src={socialclub} alt='memories' height={60}></img>
      <ThemeProvider theme={theme}>
        <Typography className={classes.heading} variant='h2' align='center'> SocialClub</Typography>
      </ThemeProvider>
      </AppBar>
  )
}

