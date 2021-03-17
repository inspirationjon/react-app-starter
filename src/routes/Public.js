import { useLocation, Redirect, Route } from 'react-router-dom'
import useToken from '../hooks/useToken'

function Public({ children, ...props }) {
    const { pathname } = useLocation()

    const [token] = useToken(false)

    if (token && pathname === '/login') {
        return <Redirect to='/' />
    }

    return <Route {...props} />
}

export default Public
