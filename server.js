const { json } = require("express")
const app = require("./app")
const morgan = require("morgan")
// const router = require("./routes/gift-exchange/")
const router = require("./routes/gift-exchange");
const port = process.env.PORT || 3000

let jsonInfo = {"ping": "pong" }


app.use(morgan("tiny"))


app.use(`/gift-exchange`, router)

const getServerData = () => {
  return jsonInfo
}
const getAppData = () => {
  return app
}

// app.get("/", (request, response) => {
//   //respond with a 200 status code
//   // response.status(200).send("Page Successfully found");
//   response.json(jsonInfo)


// });

app.listen(port, () => {

  console.log(`🚀 Server listening at http://localhost:${port}`)
})

module.exports = {
  getAppData,
  getServerData
}
