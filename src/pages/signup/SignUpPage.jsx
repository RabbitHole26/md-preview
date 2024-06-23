import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons"
import useSignUp from "../../store/supabase-hooks/useSignUp"
import InputStyled from "../../components/inputs/InputStyled"
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useApplyElementFocus from "../../utils/useApplyElementFocus"

const SignUpPage = () => {
  const {authLoading} = useLoadingContext()
  const {handleSignUp} = useSignUp()

  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors}
  } = useForm()

  const onSubmit = (formData) => {
    handleSignUp(formData)
  }

  useApplyElementFocus('#displayName')

  return (
    <div className="transition-all">
      {!authLoading &&
        <form className="flex flex-col mt-10 items-center" onSubmit={handleSubmit(onSubmit)}>

          {/* display name */}
          <InputStyled
            register={register}
            errors={errors}
            id='displayName'
            name='displayName'
            placeholder='Display name'
            rules={{
              required: "Display name is required.",
              minLength: {
                value: 3,
                message: "Minimum display name length is 3 characters."
              },
              maxLength: {
                value: 16,
                message: "Maximum display name length is 16 characters."
              },
              pattern: {
                value: /^[a-z0-9\s]+$/i,
                message: "Display name cannot contain special charaters."
              }
            }}
            // icon={userIcon}
            icon={<FontAwesomeIcon icon={faUser} />}
          />

          {/* email */}
          <InputStyled
            register={register}
            errors={errors}
            name='email'
            type='email'
            placeholder='Email'
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email."
              }
            }}
            icon={<FontAwesomeIcon icon={faEnvelope} />}
          />
          
          {/* password */}
          <InputStyled
            register={register}
            errors={errors}
            name='password'
            type='password'
            placeholder='Password'
            rules={{
              required: "Password is required.",
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
            name='confirmPassword'
            type='password'
            placeholder='Confirm password'
            rules={{
              validate: (match) => {
                const password = getValues("password")
                return match === password || "Passwords should match."
              }
            }}
            icon={<FontAwesomeIcon icon={faKey} />}
          />

          {/* submit button */}
          <div className="flex flex-col items-center">
            <ButtonPrimary type="submit" className={'w-[180px]'}>
              Create profile
            </ButtonPrimary>
            {/* login link */}
            <p className='text-sm md:text-md mb-20 mt-5 underline hover:text-primary'>
              <Link to='/login'>Back to log in page.</Link>
            </p>
          </div>
        </form>
      }
      {authLoading &&
        <LoadingSpinner />
      }
    </div>
  )
}


export default SignUpPage
