const app = require('express')(),
  port = 8080


app.get(
  '/', (req, res) =>
    res.send('Hello world 🌴')
)


app.listen(
  port, () =>
    console.log(`Listening on ${ port }...`)
)
