import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
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
          {/* <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route> */}
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
