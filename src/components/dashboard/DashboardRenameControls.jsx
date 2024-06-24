import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import InputStyled from "../inputs/InputStyled"
import ButtonPrimary from "../buttons/ButtonPrimary"
import ButtonAccent from '../buttons/ButtonAccent'
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useOnSubmitRenameControls from "../dashboard-hooks/useOnSubmitRenameControls"
import useHandleRename from "../dashboard-hooks/useHandleRename"
import useApplyElementFocus from "../../utils/useApplyElementFocus"

const DashboardRenameControls = ({
  snippet, 
  snippetId, 
  setSnippetId, 
  setShowRenameControls
}) => {
  const {loading} = useLoadingContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm()

  const {
    handleRenameCancel
  } = useHandleRename({
    setShowRenameControls,
    setSnippetId
  })

  const {onSubmit} = useOnSubmitRenameControls({
    reset,
    setShowRenameControls,
    snippetId,
    setSnippetId
  })

  useApplyElementFocus('#newSnippetTitle')

  return (
    <form 
      className="flex items-center gap-3 mx-1 330px-custom:mx-5 justify-between w-full" 
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex md:justify-center w-full">
        <InputStyled
        id='newSnippetTitle'
        register={register}
        errors={errors}
        name='newSnippetTitle'
        placeholder='Snippet title...'
        className='pl-5 border-0 rounded-md w-[150px] sm:w-[250px] md:w-[300px]'
        inputPadding='p-0'
        displayError={false}
        // ! rendering the error in the standard way (absolute + padding) is out of question - there is no space between list items for this solution.
        // ! the validation rules were disabled and error handling logic is in the 'onSubmit' function.
        // rules={{
        //   required: "New snippet title is required.",
        //   maxLength: {
        //     value: 24,
        //     message: "Maximum 24 characters."
        //   }
        // }}
        />
      </div>
      <div className="flex gap-3">
        <ButtonPrimary 
          type='submit' 
          className={`btn-xs lg:btn-sm w-[50px] ${loading && snippetId === snippet.id ? 'btn-disabled' : ''}`} 
        >
          <FontAwesomeIcon className="text-md md:text-lg" icon={faCheck} />
        </ButtonPrimary>
        <ButtonAccent 
          className={`btn-xs lg:btn-sm w-[50px] ${loading && snippetId === snippet.id ? 'btn-disabled' : ''}`}
          onClick={() => handleRenameCancel(snippet.id)}
        >
          <FontAwesomeIcon className="text-md md:text-lg" icon={faXmark} />
        </ButtonAccent>
      </div>
    </form>
  )
}

export default DashboardRenameControls
