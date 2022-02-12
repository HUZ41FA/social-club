import React from 'react';
import Post from "./Post/Post"
import useStyles from "./styles"
import { useSelector } from 'react-redux';
import {Grid, CircularProgress} from "@material-ui/core"

const Posts = (props) => {
  const { setCurrentId } = props
  const posts = useSelector((state)=>state.posts)
  const classes = useStyles()
  return (
    !posts.length ? <CircularProgress /> : (
    <Grid className={classes.mainContainer} container>
      {
        posts.map((post)=>(
          <Grid key={post._id} item xs={6}  >
            <Post  post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))
      }
    </Grid>
  ))

};

export default Posts;
