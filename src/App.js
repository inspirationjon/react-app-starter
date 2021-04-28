import './App.scss'
import AuthenticatedApp from './AuthenticatedApp.js'
import UnauthenticatedApp from './UnauthenticatedApp.js'
import useToken from './hooks/useToken'

function App() {
    const [token] = useToken()
    if (token) {
        return <AuthenticatedApp />
    } else {
        return <UnauthenticatedApp />
    }
}

export default App
