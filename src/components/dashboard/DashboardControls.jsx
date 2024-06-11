import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { light, dark } from '../../store/theme-context/theme-aliases-map'
import ButtonPrimary from '../buttons/ButtonPrimary'
import ButtonAccent from '../buttons/ButtonAccent'
import useSignOut from '../../store/supabase-hooks/useSignOut'
import useAuthContext from '../../store/auth-context/useAuthContext'
import useThemeContext from '../../store/theme-context/useThemeContext'
import useLoadingContext from '../../store/loading-context/useLoadingContext'
import useUpdateUserMetadata from '../../store/supabase-hooks/useUpdateUserMetadata'
import ButtonCleanUp from '../buttons/ButtonCleanUp'

const DashboardControls = () => {
  const {session} = useAuthContext()
  const {theme} = useThemeContext()
  const {syncLoading} = useLoadingContext()
  const {handleSignOut} = useSignOut()
  const {updateUserMetadata} = useUpdateUserMetadata()
  const location = useLocation()

  return (
    <div className={`${theme === light ? 'bg-neutral-200' : 'bg-stone-900'}`}>
      
      {/* welcome message and signout button */}
      <div className="flex justify-between my-6 md:my-8 xl:my-10 mx-[5%] 400px-custom:mx-[10%] sm:mx-[20%] xl:mx-[25%] 2xl:mx-[31%]">
        <h2 className="sm:text-xl overflow-hidden">
          Hello there, <span className="italic font-bold">{session.user.user_metadata.displayName}</span> !
        </h2>
        <ButtonPrimary 
          className={'btn-xs sm:btn-sm'} 
          onClick={() => handleSignOut()}
        >
          Sign out
        </ButtonPrimary>
      </div>

      {/* buttons container */}
      <div className='flex justify-center'>
        <div className={`flex gap-2 330px-custom:gap-4 400px-custom:gap-6 rounded-t-xl px-1 py-4 330px-custom:px-4 sm:px-10 w-fit ${theme === dark ? 'bg-[rgba(23,18,18,1)]' : 'bg-[rgba(250,247,245,1)]'}`}>

          {/* settings / snippets */}
          <div className='flex gap-1 330px-custom:gap-2'>
            <Link to='/dashboard/settings'>
              <button className={`btn-sm no-animation bg-secondary rounded-3xl font-bold text-black lg:btn-md w-[100px] md:w-[120px] lg:w-[160px] ${location.pathname.startsWith('/dashboard/') ? 'opacity-100' : 'opacity-50'}`}>
                <span className='text-md lg:text-lg'>Settings</span>
              </button>
            </Link>
            <Link to='/dashboard'>
              <button className={`btn-sm no-animation bg-secondary rounded-3xl font-bold text-black lg:btn-md w-[100px] md:w-[120px] lg:w-[160px] ${location.pathname === '/dashboard' ? 'opacity-100' : 'opacity-50'}`}>
                <span className='text-md lg:text-lg'>Snippets</span>
              </button>
            </Link>
          </div>

          {/* sync / cleanup */}
          <div className='flex gap-1 400px-custom:gap-2'>
            <ButtonAccent
              className={`w-[35px] lg:w-[48px] btn-sm lg:btn-md ${syncLoading ? 'btn-disabled' : ''}`}
              onClick={() => {updateUserMetadata(null, 'USE_refreshSession')}}
            >
              <FontAwesomeIcon className='text-md lg:text-xl' icon={faArrowsRotate} />
            </ButtonAccent>
            <ButtonCleanUp 
              classNameSettingsControls={'w-[35px] lg:w-[48px] btn-sm lg:btn-md'} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardControls
