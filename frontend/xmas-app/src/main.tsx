import App from './App.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './index.css'

const CLIENT_ID = "658351038879-079hr4ah2i2f1t869ce69ohusfg5drdj.apps.googleusercontent.com"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App/>
    </GoogleOAuthProvider>
  </StrictMode>,
)