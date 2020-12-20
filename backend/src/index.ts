import cors from 'cors'

import express from 'express'
import path from 'path'

import IndexRoutes from './routes'

const app = express()
const port = 4200

app.use(cors({ origin: true }));

// Settings
app.set('port',port)
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(__dirname));

//Routes
app.use('/', IndexRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 


