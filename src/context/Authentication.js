import { createContext, useEffect, useState } from 'react'

const Context = createContext(null)

function Provider({ children }) {
    const [state, setState] = useState(window.localStorage.getItem('token'))

    useEffect(() => {
        if (state) {
            window.localStorage.setItem('token', state)
        } else {
            window.localStorage.removeItem('token')
        }
    }, [state])

    return (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }
