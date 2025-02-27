import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { Toaster } from './components/ui/toaster.tsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ClerkProvider appearance={{
        baseTheme: dark,
      }} publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
      <Toaster />
    </ClerkProvider>
  </StrictMode>,
)
