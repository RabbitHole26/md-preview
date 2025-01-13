import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import useAuthContext from './store/auth-context/useAuthContext'
import usePreviewContext from './store/preview-context/usePreviewContext'
import HomePage from './pages/home/HomePage'
import DashboardPage from './pages/dashboard/DashboardPage'
import AboutPage from './pages/about/AboutPage'
import SignUpPage from './pages/signup/SignUpPage'
import SignInPage from './pages/signin/SignInPage'
import ErrorPage from './pages/error/ErrorPage'
import AppLayout from './layouts/AppLayout'
import './App.css'

function App() {
  const {session} = useAuthContext()
  const {setSnippetPreview} = usePreviewContext()
  const location = useLocation()

  // ! this useEffect de-renders the snippet preview in dashboard whenever user navigates away from dashboard
  // ! this is to prevent edge cases: like updating snippet that is still being previewed
  useEffect(() => {
    if (location.pathname !== '/dashboard')
      setSnippetPreview(prev => ({
        ...prev,
        id: null
      }))
  }, [location.pathname, setSnippetPreview])

  return (
    <div>
      <AppLayout>
        <Toaster />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='about' element={<AboutPage />}/>
          {!session &&
            <>
              <Route path='signup' element={<SignUpPage />}/>
              <Route path='login' element={<SignInPage />}/>
            </>
          }
          {session &&
            <Route path='dashboard/*' element={<DashboardPage />}/>
          }
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AppLayout>
    </div>
  )
}

export default App