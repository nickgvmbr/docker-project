const app = require('express')(),
  port = 3030


app.get(
  '/', (req, res) =>
    res.send('Hello world 🌴')
)


app.listen(
  port, () =>
    console.log(`Listening on ${ port }...`)
)
