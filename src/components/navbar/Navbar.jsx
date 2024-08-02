import ButtonTheme from "../buttons/ButtonTheme"
import useAuthContext from "../../store/auth-context/useAuthContext"
import daisyUiRemoveFocus from "../../utils/daisyUi-remove-focus"
import LinkCustom from '../link-custom/LinkCustom'

const Navbar = () => {
  const {session} = useAuthContext()

  const handleClick = () => {
    daisyUiRemoveFocus()
  }

  return (
    <div className="navbar justify-between bg-base-200 md:px-[10%] 2xl:px-[20%]">
      <div>
        {/* burger menu dropdown */}
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">

            {!session &&
              <>
                <li onClick={handleClick}><LinkCustom to='/login'>Log in</LinkCustom></li>
              </>
            }

            {session &&
              <li onClick={handleClick}><LinkCustom to='/dashboard'>Dashboard</LinkCustom></li>
            }
          </ul>
        </div>
        {/* logo butoon */}
        <LinkCustom to='/' className="btn btn-ghost text-lg">MD-Preview</LinkCustom>
      </div>
      {/* navbar items outside burger dropdown container*/}
      <div className="navbar hidden lg:flex">
        <ul className="ml-10 lg:text-lg menu menu-horizontal px-1">

          {!session &&
            <>
              <li onClick={handleClick}>
                <LinkCustom to='/login'>Log in</LinkCustom>
              </li>
            </>
          }

          {session &&
            <li onClick={handleClick}>
              <LinkCustom to='/dashboard'>Dashboard</LinkCustom>
            </li>
          }
        </ul>

      </div>
      {/* light/dark mode button */}
      <ButtonTheme />
    </div>
  )
}

export default Navbar