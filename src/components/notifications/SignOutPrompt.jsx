import { useEffect } from "react"
import useSignOut from "../../hooks/supabase/useSignOut"
import useVisibilityContext from "../../store/visibility-context/useVisibilityContext"
import ButtonPrimary from "../buttons/ButtonPrimary"
import ButtonSecondary from "../buttons/ButtonSecondary"

const SignOutPrompt = () => {
  const {signOutPromptVisible, setSingOutPromptVisible} = useVisibilityContext()
  const {handleSignOut} = useSignOut()
  const btnClass = 'btn-sm md:btn-md min-w-[100px]'

  // delay the opacity transition on prompt enter
  useEffect(() => {
    if (signOutPromptVisible.visible) {
      setTimeout(() => {
        setSingOutPromptVisible(prev => ({
          ...prev,
          opaque: true
        }))
      }, 100)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signOutPromptVisible.visible])

  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-md bg-base-200 shadow-md transition-opacity duration-200 ${
        signOutPromptVisible.visible ? 'z-50' : '-z-50'} ${
        signOutPromptVisible.opaque ? 'opacity-100': 'opacity-0'}
      }`}
    >
      {/* text */}
      <p className="flex flex-col gap-3 text-center text-lg">
        <span className="font-semibold">Are you sure you want to sign out?</span>
        <span>Any unsaved work will be lost.</span>
      </p>

      {/* buttons container */}
      <div className="flex flex-col md:flex-row gap-2 items-center md:justify-center mt-4 pt-4 border-t-[1px] border-stone-300">
        <ButtonSecondary 
          className={btnClass}
          onClick={() => {
            setSingOutPromptVisible(prev => ({
              ...prev,
              opaque: false
            }))
            // delay the prompt exit to allow opacity transition
            setTimeout(() => {
              setSingOutPromptVisible(prev => ({
                ...prev,
                visible: false
              }))
            }, 200)
          }}
        >
          Continue
        </ButtonSecondary>
        <ButtonPrimary
          className={btnClass}
          onClick={() => {
            handleSignOut()
            setSingOutPromptVisible({
              visible: false,
              opaque: false
            })
          }}
        >
          Sign Out
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default SignOutPrompt