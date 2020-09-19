import React from 'react';
import './App.css';
import logo from './assets/images/logo/logo.png'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route } from "react-router-dom"
import Launches from './components/Launches'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: `/graphql`,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img className="App-logo" src={logo} alt="SpaceX" />
          {/* Home */}
          <Route exact path="/" component={Launches} />
          {/* Launch */}
          <Route exact path="/launch/:id" component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
