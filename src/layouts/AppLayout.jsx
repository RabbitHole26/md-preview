import useThemeContext from '../store/theme-context/useThemeContext'
import { light } from '../store/theme-context/theme-aliases-map'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import useLoadingContext from '../store/loading-context/useLoadingContext'
import useVisibilityContext from '../store/visibility-context/useVisibilityContext'
import UnlockFeatureBanner from '../components/banners/UnlockFeatureBanner'
import SignOutPrompt from '../components/notifications/SignOutPrompt'
import LoadingSpinner from '../components/loading-spinner/LoadingSpinner'

const AppLayout = ({children}) => {
  const {theme} = useThemeContext()
  const {authLoading} = useLoadingContext()
  const {signOutPromptVisible} = useVisibilityContext()
  const signOutPrompt = signOutPromptVisible.visible

  return (
    <div className={`flex flex-col ${signOutPrompt || authLoading ? 'h-screen fixed w-full overflow-hidden' : 'min-h-screen'}`}>
      {(authLoading || signOutPrompt) && (
        <div className={`absolute inset-0 z-50 ${theme === light ? 'bg-white/80': 'bg-black/80'}`} />
      )}
      {!authLoading && <SignOutPrompt />}
      {authLoading && <LoadingSpinner />}

      {/* navbar and banner */}
      <div className={`sticky top-0 ${authLoading || signOutPrompt ? 'z-49' : 'z-50'}`}>
        <UnlockFeatureBanner />
        <Navbar />
      </div>

      {/* main content */}
      <div className='grow'>
        {children}
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout
