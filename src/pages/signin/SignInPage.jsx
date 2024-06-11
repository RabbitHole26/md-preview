import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons"
import useSignIn from "../../store/supabase-hooks/useSignIn"
import InputStyled from "../../components/inputs/InputStyled"
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useApplyElementFocus from "../../utils/useApplyElementFocus"

const SignInPage = () => {
  const {authLoading} = useLoadingContext()
  const {handleLogin} = useSignIn()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const onSubmit = (formData) => {
    handleLogin(formData)
  }

  useApplyElementFocus('#email')

  return (
    <div className="transition-all">
      {!authLoading &&
      <form className="flex flex-col mt-10 items-center" onSubmit={handleSubmit(onSubmit)}>

        {/* email */}
        <InputStyled
          register={register}
          errors={errors}
          id='email'
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
            required: "Password is required."
          }}
          icon={<FontAwesomeIcon icon={faKey} />}
        />

        {/* submit button */}
        <div className="flex flex-col items-center">
          <ButtonPrimary className={'w-[180px]'}>
            Login
          </ButtonPrimary>
          {/* signup link */}
          <p className="text-sm md:text-md mb-20 mt-5 underline hover:text-primary">
            <Link className="flex flex-col items-center" to='/signup'>
              <span>Don&apos;t have an account?</span>
              <span>Sign up here!</span>
            </Link>
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

export default SignInPage
