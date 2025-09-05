import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null)

    // Mock authentication functions for demo
    const signUpNewUser = async (email, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock successful signup
        const mockUser = {
            id: 'demo-user-id',
            email: email,
            created_at: new Date().toISOString()
        }
        
        setSession(mockUser)
        return { data: { user: mockUser }, error: null }
    }

    const signInUser = async (email, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Check for demo credentials
        if (email === 'demo@mybudgetbook.com' && password === 'demo123') {
            const mockUser = {
                id: 'demo-user-id',
                email: email,
                created_at: new Date().toISOString()
            }
            
            setSession(mockUser)
            return { data: { user: mockUser }, error: null }
        }
        
        // For any other email/password, also allow (for demo purposes)
        const mockUser = {
            id: 'demo-user-id',
            email: email,
            created_at: new Date().toISOString()
        }
        
        setSession(mockUser)
        return { data: { user: mockUser }, error: null }
    }

    const signOut = () => {
        setSession(null)
        return { error: null }
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