import express, { Request, Response } from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.get('/', (req: Request, res: Response) => {
  res.send('back-end de agenda com postgres, node.js e react.js')
})

app.listen(4000, () => console.log('server is running'))
