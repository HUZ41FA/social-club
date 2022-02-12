import React from 'react';
import { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from "@material-ui/core"

import { getPosts } from "./actions/posts"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import socialclub from "./images/socialclub.png"
import useStyles from "./styles"
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { NavBar } from "./components/NavBar/NavBar"
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
      <NavBar/>
      <Grow in>
        <Grid container justifyContent="space-between" align='stretch'>
          <Grid sx={{
    "&::-webkit-scrollbar": {
	  width: 20
    },
    "&::-webkit-scrollbar-track": {
	  backgroundColor: "orange"
    },
    "&::-webkit-scrollbar-thumb": {
	  backgroundColor: "red",
	  borderRadius: 2
    }
  }} item xs={12} sm={7}>
            <Posts  setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={5}> 
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Grow>
    </Container>
    
  )
};

export default App;
