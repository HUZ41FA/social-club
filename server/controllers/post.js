import PostMessage from "../models/postMessage.js"
import express from 'express'
import mongoose from "mongoose"


export const getPost = async (req, res)=>{
    try{
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    }catch(e){
        console.log(e.message)
        res.status(404).json({message:e.message})
    }
}

export const createPost = async (req, res)=>{
    const post = req.body
    const newPost = new PostMessage(post)
    try{
        await newPost.save()
        res.status(201).json(newPost)
    }catch(e){
        res.status(409).json({message:e.message})
    }
}

export const updatePost = async (req, res)=>{
        const {id} = req.params 
        const _id = id
        const post = req.body

        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).json({msg:"No post found"})
        }else{
           const updatePost= await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true})
           res.json(updatePost)
        }
}

export const deletePost = async (req,res)=>{
        const {id}=req.params
        const _id = id
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).json({msg:"No post found"})
        }else{
        await PostMessage.deleteOne({_id:_id})
        res.json({message:"Post has been deleted"})
        }
        
    }


export const likePost = async (req,res)=>{
        const {id}=req.params
        const _id = id
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).json({msg:"No post found"})
        }else{
        const post = await PostMessage.findById(_id)
        post.like++
        const updatedPost =  await PostMessage.findByIdAndUpdate(_id, post, {new:true})

        res.json(updatedPost)
    }
        
    }