import express from 'express';
import { brawlesRouter } from './routes/brawlers.js'

const PORT = process.env.PORT ?? 1234

const app = express();
app.use(express.json())

app.use('/', brawlesRouter)

app.listen(PORT, () => {
  console.log(`server is listen in port http://localhost:${PORT}`)
})