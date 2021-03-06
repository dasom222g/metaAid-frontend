import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './lang/i18n'
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'

// const MORALIS_APPLICATION_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID || ''
// const MORALIS_SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL || ''

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider => {
  const library = new Web3Provider(provider, 'any')
  return library
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
