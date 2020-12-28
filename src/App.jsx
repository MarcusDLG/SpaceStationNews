import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Layout } from './components/Layout'
// import {Layout} from '../src/components/Layout.jsx'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/blogs" component={Blogs}></Route>
          <Route exact path="/page2" component={Page2}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
