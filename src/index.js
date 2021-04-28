import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider as Authentication } from './context/Authentication'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Authentication>
                    <App />
                </Authentication>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
