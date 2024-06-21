import { useState } from "react"
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faEraser } from '@fortawesome/free-solid-svg-icons'
import useInputContext from '../../store/input-context/useInputContext'
import useAuthContext from "../../store/auth-context/useAuthContext"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useSnippetContext from "../../store/snippet-context/useSnippetContext"
import ButtonPrimary from "../buttons/ButtonPrimary"
import ButtonSecondary from "../buttons/ButtonSecondary"
import ButtonCleanUp from "../buttons/ButtonCleanUp"
import InputStyled from "../inputs/InputStyled"
import SnippetFormTitleHelper from './SnippetFormTitleHelper'
import useOnSubmitMarkdownForm from "./useOnSubmitMarkdownForm"
import useHandleReset from "../../utils/useHandleReset"

const SnippetForm = () => {
  const [selectedInputField, setSelectedInputField] = useState(false)
  const {session} = useAuthContext()
  const {loading} = useLoadingContext()
  const {input} = useInputContext()
  const {selectedSnippet} = useSnippetContext()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: {errors}
  } = useForm()

  const {onSubmit} = useOnSubmitMarkdownForm({reset})

  const {handleReset} = useHandleReset()

  const watchedInputMatchesSnippet = watch().snippetTitle === input.title && selectedSnippet
  
  return (
    <div className="relative mx-2 my-3 pt-10 gap-2 transition-all">
      {session &&
        <div className="flex flex-col items-center">
          {selectedSnippet &&
            <SnippetFormTitleHelper setValue={setValue}/>
          }
          <form 
            className="flex flex-col items-center gap-2 400px-custom:flex-row 400px-custom:items-start 400px-custom:"
            onSubmit={handleSubmit(onSubmit)}
          >

            {/* snippet name */}
            <InputStyled
              register={register}
              errors={errors}
              setValue={setValue}
              // ! onBlur and onFocus are used to conditionally render errors only when the input field is focused
              onBlur={() => {setSelectedInputField(false)}}
              onFocus={() => {setSelectedInputField(true)}}
              name='snippetTitle'
              placeholder='Snippet title...'
              className={'max-w-[250px] pl-5 400px-custom:w-[200px] md:w-[250px]'}
              inputPadding={'pb-10'}
              displayError={selectedInputField && errors}
              errorVariantClassName={'absolute text-sm flex justify-center w-[200px] text-red-600 py-2'}
              rules={{
                required: "Snippet title is required.",
                maxLength: {
                  value: 24,
                  message: "Maximum 24 characters."
                }
              }}
            />

            <div className="flex gap-2">
              {/* button update / save */}
              {watchedInputMatchesSnippet
                ? (
                  <ButtonPrimary 
                  type={'submit'} 
                  className={`btn-sm 400px-custom:btn-md w-[48px] ${loading ? 'btn-disabled' : ''}`}
                  >
                    <FontAwesomeIcon className='text-xl' icon={faFloppyDisk} />
                  </ButtonPrimary>
                )
                : (
                  <ButtonSecondary 
                  type={'submit'} 
                  className={`btn-sm 400px-custom:btn-md w-[48px] ${loading ? 'btn-disabled' : ''}`}
                  >
                    <FontAwesomeIcon className='text-xl' icon={faFloppyDisk} />
                  </ButtonSecondary>
                )
              }

              {/* button erase */}
              <ButtonSecondary
                type='button'
                className={`btn-sm 400px-custom:btn-md w-[48px] ${loading || input.body?.trim().length === 0 ? 'btn-disabled' : ''}`} 
                onClick={() => handleReset(true)}
              >
                <FontAwesomeIcon className='text-xl' icon={faEraser} />
              </ButtonSecondary>

              {/* button cleanup */}
              <ButtonCleanUp 
                classNameSnippetForm={'btn-sm 400px-custom:btn-md w-[48px]'}
              />

              {/* debuggining buttons */}
              {/* <button className="btn btn-secondary flex flex-col items-center" onClick={() => {console.log(session)}}>
                <span className="font-normal">print</span>
                <span className="font-bold">session</span>
              </button> */}
            </div>
          </form>
        </div>
      }
    </div>
  )
}

export default SnippetForm