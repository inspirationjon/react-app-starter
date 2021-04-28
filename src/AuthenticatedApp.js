import './App.scss'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home/Home'

function AuthenticatedApp() {
    return (
        <>
            <main className='site-content'>
                <Switch>
                    <Route path='/' component={Home} exact />
                </Switch>
            </main>
        </>
    )
}

export default AuthenticatedApp
