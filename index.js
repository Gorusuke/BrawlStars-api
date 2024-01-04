import express from 'express';

const PORT = process.env.PORT ?? 1234

const app = express();
app.use(express.json())

app.use('/', (req, res) => {
  res.send('Esto es una prueba para ver si funciona!')
})

app.listen(PORT, () => {
  console.log(`server is listen in port http://localhost:${PORT}`)
})