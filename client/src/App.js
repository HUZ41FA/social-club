import React from 'react';
import { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from "@material-ui/core"

import { getPosts } from "./actions/posts"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import socialclub from "./images/socialclub.png"
import useStyles from "./styles"
import { useDispatch } from 'react-redux';
import {theme} from "./customTheme"
import { ThemeProvider } from '@material-ui/core';

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)
  
  useEffect(()=>{
    dispatch(getPosts())
    console.log("This is in the main APP component and will run in the start and has a dependency array: [currentId, dispatch]")
  },[currentId, dispatch])

  return (
    <Container maxwidth="lg" >
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <img className={classes.image} src={socialclub} alt='memories' height={60}></img>
      <ThemeProvider theme={theme}>
        <Typography className={classes.heading} variant='h2' align='center'> SocialClub</Typography>
      </ThemeProvider>
      </AppBar>
      <Grow in>
        <Grid container justifyContent="space-between" align='stretch'>
          <Grid style={{maxHeight: '100vh', overflow: 'auto'}} item xs={12} sm={7}>
            <Posts  setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}> 
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Grow>
    </Container>
    
  )
};

export default App;
