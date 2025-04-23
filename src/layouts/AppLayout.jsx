import useThemeContext from '../store/theme-context/useThemeContext'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import useLoadingContext from '../store/loading-context/useLoadingContext'
import useVisibilityContext from '../store/visibility-context/useVisibilityContext'
import UnlockFeatureBanner from '../components/banners/UnlockFeatureBanner'
import SignOutPrompt from '../components/notifications/SignOutPrompt'
import LoadingSpinner from '../components/loading-spinner/LoadingSpinner'

const AppLayout = ({children}) => {
  const {themeLight} = useThemeContext()
  const {authLoading} = useLoadingContext()
  const {signOutPromptVisible} = useVisibilityContext()
  const uiDisabled = authLoading || signOutPromptVisible.visible

  return (
    <div className={`flex flex-col ${uiDisabled ? 'h-screen fixed w-full overflow-hidden' : 'min-h-screen'}`}>
      {uiDisabled && (
        <div className={`absolute inset-0 z-50 ${themeLight ? 'bg-white/80': 'bg-black/80'}`} />
      )}
      {!authLoading && <SignOutPrompt />}
      {authLoading && <LoadingSpinner />}

      {/* navbar and banner */}
      <div className={`sticky top-0 ${uiDisabled ? 'z-49' : 'z-50'}`}>
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
