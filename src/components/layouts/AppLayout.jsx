import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import useLoadingContext from '../../store/loading-context/useLoadingContext'
import UnlockFeatureBanner from '../banners/UnlockFeatureBanner'

const AppLayout = ({children}) => {
  const {authLoading} = useLoadingContext()

  return (
    <div className='min-h-screen flex flex-col'>
      <UnlockFeatureBanner />
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
