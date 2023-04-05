import * as express from "express"
import { Request, Response } from "express"

const port = 3333;

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/users', (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Petya' },
  ]
  res.json(users)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}...`)
})