import { Route, Redirect } from 'react-router-dom'
import useToken from '../hooks/useToken'

function Private({ children, ...props }) {
    const [token] = useToken(false)

    if (!token) {
        return <Redirect to='/login' />
    }

    return <Route {...props} />
}

export default Private
