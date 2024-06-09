// ENV Variables
require('dotenv').config()

import express from 'express'
import config from 'config'

const app = express()

// Json middleware
app.use(express.json())

// db
import db from '../config/db'

// middlewares
import morganMiddleware from './middleware/morganMiddleware'

// import routes
import router from './router'
app.use(morganMiddleware)
app.use('/api/', router)

// Logger
import Logger from '../config/logger'

// app port
const port = config.get<number>("port")

app.listen(port, async() => {
    
    await db()

    Logger.info(`Aplicação está funcionando na porta: ${port}`)
})

