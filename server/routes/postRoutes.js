import express from 'express'
import { v2 as cloudinary } from 'cloudinary'
import Post from '../mongoDB/models/Post.js'
import * as dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json({ success: true, data: posts})
    } catch (err) {
        res.status(500).json({ success: false, message: err})
    }
})

router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body
        // console.log(name, prompt)
        const photoUrl = await cloudinary.uploader.upload(photo)
        // console.log(photoUrl)
        const newPost = await Post.create({ name, prompt, photo: photoUrl.url })
        // console.log(newPost)
        res.status(200).json({ success: true, data: newPost })
    } catch (err) {
        res.status(500).json({ success: false, message: err})
    }
})

export default router