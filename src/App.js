import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import projects from './services/projects'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Project from './components/Project'

const App = () => {
  const projectById = id => {
    return projects.find(p => p.id === id)
  }

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <Switch>
          <Route
            path="/projects/:id"
            render={({ match }) => (
              <Project project={projectById(match.params.id)} />
            )}
          />
          <Route exact path="/">
            <Home projects={projects} />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
