import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faKey } from "@fortawesome/free-solid-svg-icons"
import { light } from "../../store/theme-context/theme-aliases-map"
import InputStyled from "../inputs/InputStyled"
import ButtonPrimary from "../buttons/ButtonPrimary"
import useThemeContext from "../../store/theme-context/useThemeContext"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useUpdateUserMetadata from "../../hooks/supabase/useUpdateUserMetadata"

const DashboardSettings = () => {
  const {theme} = useThemeContext()
  const {loading} = useLoadingContext()
  const {updateUserMetadata} = useUpdateUserMetadata()

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: {errors}
  } = useForm()

  const onSubmit = (formData) => {
    updateUserMetadata(formData.confirmNewPassword, 'UPDATE_password')
    reset()
  }

  return (
    <form className={`flex flex-col items-center rounded-md ${theme === light ? 'bg-neutral-200' : 'bg-stone-900'}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full">
        <p className={`text-center font-bold rounded-t-md w-full p-1 ${theme === light ? 'bg-neutral-300' : 'bg-neutral-800'}`}>Change Password</p>
        <div className="flex flex-col items-center mt-3">

          {/* new password */}
          <InputStyled
            register={register}
            errors={errors}
            name='newPassword'
            type='password'
            placeholder='New password'
            rules={{
              required: "New password is required.",
              minLength: {
                value: 8,
                message: "Minimum password length is 8 characters."
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*_-])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                message: "Password must contain at least one number and one special character."
              }
            }}
            icon={<FontAwesomeIcon icon={faKey} />}
          />
        
          {/* confirm password */}
          <InputStyled
            register={register}
            errors={errors}
            name='confirmNewPassword'
            type='password'
            placeholder='Confirm new password'
            rules={{
              validate: (match) => {
                const password = getValues("newPassword")
                return match === password || "Passwords should match."
              }
            }}
            icon={<FontAwesomeIcon icon={faKey} />}
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

export default DashboardSettings
