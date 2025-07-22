import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "../superbaseClient"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(undefined)

    const signUpNewUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) {
            console.error(error)
        }
        return { data, error }
    }
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
        supabase.auth.onAuthStateChange((event, session) => {
            setSession(session)
        })
    }, [])

    const signInUser = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password })
            if (error) {
                console.error(error)
            }
            return { data, error }
        } catch (error) {
            console.error(error)
            return { data: null, error }
        }
    }

    const signOut = () => {
        const { error } = supabase.auth.signOut()
        if (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signOut, signInUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}