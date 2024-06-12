import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import useLoadingContext from '../../store/loading-context/useLoadingContext'
import UnlockFeatureBanner from '../banners/UnlockFeatureBanner'
import useAuthContext from '../../store/auth-context/useAuthContext'

const AppLayout = ({children}) => {
  const {authLoading} = useLoadingContext()
  const {session} = useAuthContext()

  return (
    <div className='min-h-screen flex flex-col'>
      {!session &&
        <UnlockFeatureBanner />
      }
      <div className={authLoading ? 'opacity-20' : ''}>
        <Navbar />
      </div>
      <div className='grow'>
        {children}
      </div>
      <div className={authLoading ? 'opacity-20' : ''}>
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout
