import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { light } from "../../store/theme-context/theme-aliases-map"
import InputStyled from "../inputs/InputStyled"
import useThemeContext from "../../store/theme-context/useThemeContext"
import ButtonPrimary from "../buttons/ButtonPrimary"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import toast from "react-hot-toast"
import useAuthContext from "../../store/auth-context/useAuthContext"
import useUpdateUserMetadata from "../../store/supabase-hooks/useUpdateUserMetadata"

const ChangeDisplayNameForm = () => {
  const {theme} = useThemeContext()
  const {loading} = useLoadingContext()
  const {session} = useAuthContext()
  const {updateUserMetadata} = useUpdateUserMetadata()
  const currentDisplayName = session.user.user_metadata.displayName

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm()

  const onSubmit = (formData) => {
    currentDisplayName === formData.newDisplayName.trim()
      ? toast.error('This is your current display name.') 
      : updateUserMetadata(formData, 'UPDATE_displayName')
    reset()
  }

  return (
    <form className={`flex flex-col items-center rounded-md ${theme === light ? 'bg-neutral-200' : 'bg-stone-900'}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full">
        <p className={`text-center font-bold rounded-t-md w-full p-1 ${theme === light ? 'bg-neutral-300' : 'bg-neutral-800'}`}>Change Display Name</p>
        <div className="flex justify-center mt-3">

          {/* new display name */}
          <InputStyled
            register={register}
            errors={errors}
            name='newDisplayName'
            placeholder='New display name'
            rules={{
              required: "Display name is required.",
              minLength: {
                value: 3,
                message: "Minimum display name length is 3 characters."
              },
              maxLength: {
                value: 16,
                message: "Maximum Display name is 16 characters."
              },
              pattern: {
                value: /^[a-z0-9\s]+$/i,
                message: "Display name cannot contain special charaters."
              }
            }}
            icon={<FontAwesomeIcon icon={faUser} />}
          />
        </div>
      </div>
      <div className="mb-3">
        <ButtonPrimary type='submit' className={`lg:min-w-[100px] ${loading ? 'btn-disabled' : ''}`}>
          Save
        </ButtonPrimary>
      </div>
    </form>
  )
}

export default ChangeDisplayNameForm
