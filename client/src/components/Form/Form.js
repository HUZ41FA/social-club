import React, { useEffect, useState } from 'react';
import useStyles from "./styles"
import { TextField, Typography, Paper, Button } from "@material-ui/core"
import FileBase from 'react-file-base64' 
import { useDispatch } from 'react-redux';
import {createPost, updatePost} from '../../actions/posts'
import { useSelector } from "react-redux"

const Form = (props) => {

    const { currentId, setCurrentId } = props
    const [postData, setPostData] = useState({
      creator:'',
      title:'',
      message:'',
      tags:'',
      selectedFiles:'',
})
    const reset = ()=>{setPostData({
      creator:'',
      title:'',
      message:'',
      tags:'',
      selectedFiles:'',
},
      setCurrentId(null))}
    const classes = useStyles()
    const dispatch = useDispatch()
    const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id===currentId): null)
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(currentId){
        dispatch(updatePost(currentId, postData))
        reset()
      }else{
        dispatch(createPost(postData))
        reset()
      }
    }
    
    useEffect(()=>{
      if(post){
        setPostData(post)
        console.log("This will run when a post is selected for editing")
      }console.log("This is inside the FORM component, will run at start and it has a dependency array: [post]")
    }, [post])
    
    return <Paper className={classes.paper} elevation={20}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>
          {currentId ? "Editing" : "Creating"} a memory
        </Typography>
        <TextField  name='creator' variant='outlined'label='Creator' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})}/>
        <TextField  name='title' variant='outlined'label='Title' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})}/>
        <TextField  name='message' variant='outlined'label='Message' fullWidth multiline value={postData.message} onChange={(e)=>setPostData({...postData, message:e.target.value})}/>
        <TextField  name='tags' variant='outlined'label='Tags' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
        <div className={classes.fileInput}>
          <FileBase  type='file' multiple= {false} onDone={({base64})=>setPostData({...postData, selectedFiles:base64})}/>
        </div>
        <Button fullWidth type='submit' color='primary' variant='contained' size='large' className='buttonSubmit'>Submit</Button>
        <Button fullWidth onClick={reset} color='secondary' variant='contained' size='small' >Reset</Button>        
      </form>
    </Paper>
};

export default Form;
