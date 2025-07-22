import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const { signUpNewUser } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const result = await signUpNewUser(email, password)
      if (result && result.error) {
        setError(result.error.message)
      } else {
        navigate('/download')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(https://puntopago.net/assets/advantages/2@1.5x.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="relative z-10 w-full max-w-md mx-auto rounded-2xl border border-white/20 bg-white/20 backdrop-blur-md shadow-2xl p-8 sm:p-10 flex flex-col items-center" style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}>
        <div className="mb-6 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-3 border border-white/40 shadow-sm">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1687 6H24L13.8313 19H0L10.1687 6Z" fill="#9E77ED" />
              <path d="M10.9935 19.9648L7 25H21.6894L32 12H21.1583L14.8412 19.9648H10.9935Z" fill="#155EEF" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1 drop-shadow">Sign up</h1>
          <p className="text-gray-200 text-base drop-shadow">Create your account</p>
        </div>
        <form onSubmit={handleSignup} className="flex flex-col gap-5 w-full mt-2">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 transition backdrop-blur placeholder-gray-500"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 transition backdrop-blur placeholder-gray-500"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 rounded-lg bg-gray-900/80 text-white font-semibold text-base shadow hover:bg-gray-900/90 transition"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
        <p className="mt-6 text-gray-200 text-sm drop-shadow">
          Already have an account?{' '}
          <Link to="/signin" className="text-white/90 hover:text-white font-medium transition underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup