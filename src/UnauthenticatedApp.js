import './App.scss'
import Login from './screens/Login/Login'

function UnauthenticatedApp() {
    return (
        <>
            <main className='site-content'>
                <Login />
            </main>
        </>
    )
}

export default UnauthenticatedApp
