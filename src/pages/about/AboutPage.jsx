import { light } from "../../store/theme-context/theme-aliases-map"
import useAuthContext from '../../store/auth-context/useAuthContext'
import useThemeContext from "../../store/theme-context/useThemeContext"
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import LinkCustom from "../../components/link-custom/LinkCustom"

const AboutPage = () => {
  const {session} = useAuthContext()
  const {theme} = useThemeContext()

  return (
    <div className="flex flex-col gap-8 sm:gap-[60px] mx-3 pt-5 pb-20 items-center sm:mx-[10%] lg:mx-[20%] 2xl:mx-[30%]">
      <div className="sm:mt-10 flex flex-col gap-6 md:gap-10">
        <h1 className="text-xl lg:text-2xl font-bold text-center">Welcome to MD-Preview!</h1>
        <p>
          This is your go-to markdown editor with live preview! This app makes it easy to create, edit, and manage your markdown snippets all in one place. Whether you&apos;re jotting down quick notes or drafting longer content, MD-Preview has you covered.
        </p>
        <ul className="mx-6 330px-custom:mx-[10%]">
          <li>Store, edit, and preview markdown snippets.</li>
          <li>Rename, delete, and organize your snippets effortlessly.</li>
          <li>Enjoy dynamic local storage that saves your work automatically, even if you refresh or open new tabs.</li>
          <li>Switch between light and dark modes to suit your preference.</li>
          <li>Sync your snippets across all your devices with just a click.</li>
          <li>Manage your account settings, including username and password changes.</li>
        </ul>
        {!session
          ? (
            <p>
              <LinkCustom className="underline has-hover:hover:text-primary" to='/signup'>
                Create an account
              </LinkCustom>
              {' '}
              using your email address to access your snippets from any device, anytime you&apos;re
              {' '}
              <LinkCustom className="underline has-hover:hover:text-primary" to='/login'>
                logged in
              </LinkCustom>
              . With MD-Preview, you can seamlessly continue your work wherever you are.
            </p>
          )
          : (
            <p>
              You can access your snippets from any device, anytime you&apos;re logged in. With MD-Preview, you can seamlessly continue your work wherever you are.
            </p>
          )
        }
      </div>
      <LinkCustom className={`sticky bottom-0 p-6 rounded-btn ${theme === light ? 'bg-radial-gradient-theme-light' : 'bg-radial-gradient-theme-dark'}`} to='/'>
        <ButtonPrimary>
          Back to homepage
        </ButtonPrimary>
      </LinkCustom>
    </div>
  )
}

export default AboutPage