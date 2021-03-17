import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider as Authentication } from './context/Authentication'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Authentication>
                <App />
            </Authentication>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
