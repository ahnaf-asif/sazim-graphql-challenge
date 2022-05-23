import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './css/index.css'

import { ApolloProvider } from "@apollo/client";
import apolloClient from "./graphql/client";

// console.log(client);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ApolloProvider client={apolloClient}>
            <App />
          </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>
)
