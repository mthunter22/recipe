// hot loader causing issues with react-router-dom
// import { hot } from "react-hot-loader"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import Home from "./Containers/Home"
import { Recipe } from "./Containers/Recipe";
import reducers from "./reducers"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

const WrappedHome = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
        </Routes>
    </BrowserRouter>
  </Provider>
)

// const HotHome = hot(module)(WrappedHome)

ReactDOM.render(<WrappedHome />, document.getElementById("home"))
