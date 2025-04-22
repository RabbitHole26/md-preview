import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import useLoadingContext from '../store/loading-context/useLoadingContext'
import useVisibilityContext from '../store/visibility-context/useVisibilityContext'
import UnlockFeatureBanner from '../components/banners/UnlockFeatureBanner'
import SignOutPrompt from '../components/notifications/SignOutPrompt'

const AppLayout = ({children}) => {
  const {authLoading} = useLoadingContext()
  const {signOutPromptVisible} = useVisibilityContext()
  const signOutPrompt = signOutPromptVisible.visible

  return (
    <div className='min-h-screen flex flex-col'>
      <SignOutPrompt />

      {/* navbar and banner */}
      <div className='sticky top-0 z-50'>
        <UnlockFeatureBanner />
        <div className={authLoading || signOutPrompt ? 'opacity-20' : ''}>
          <Navbar />
        </div>
      </div>

      {/* main content */}
      <div className={`grow ${signOutPrompt ? 'opacity-20' : 'opacity-100'}`}>
        {children}
      </div>

      {/* footer */}
      <div className={authLoading || signOutPrompt ? 'opacity-20' : ''}>
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout
