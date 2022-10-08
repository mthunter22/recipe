import express from "express"
import bodyParser from "body-parser"
import http from "http"
import { createAndConnectToServer } from "./db"
import { searchMiddleware, recipeMiddleware } from "./routes"
import path from "path"

const appStartup = async (): Promise<void> => {
  await createAndConnectToServer()
  const app = express()
  // add parsers for the body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  // create our routes
  app.post("/api/search", searchMiddleware)
  app.get("/api/recipe/:id", recipeMiddleware)
  // create a server
  const httpServer = new http.Server(app)
  const port = process.env.PORT || 4000
  httpServer.listen(port, () => {
    console.log("now running on 4000")
  });
  app.use(express.static(path.resolve(__dirname, "../../frontend/src/frontend/dist")));
}

appStartup()
