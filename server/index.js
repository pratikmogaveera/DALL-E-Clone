import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDB from './mongoDB/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 8000


const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('DALL-E says hello :)')
})

try {
    connectDB(process.env.MONGODB_URL)
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
} catch (error) {
    console.log(error)
}