import React from 'react';
import './App.css';
import logo from './assets/images/logo/logo.png'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: `http://localhost:5005/graphql`,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img className="App-logo" src={logo} alt="SpaceX" />
        <h2>🚀 All Launches</h2>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
