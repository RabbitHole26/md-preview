const InputStyled = ({
  register,
  id, 
  name, 
  type = 'text', 
  placeholder, 
  errorMessage,
  rules,
  errors,
  onBlur,
  onFocus,
  className = 'pl-10 w-[280px] xs:w-[300px] max-w-[350px]',
  // ! must be truthy for any errors to be displayed
  displayError = 'true',
  // ! if truthy error variant paragraph is rendered, use to provide classes
  errorVariantClassName,   
  // ! adjust padding of the input field where errors are displayed
  inputPadding = 'pb-16',
  // ! use to customize input icon (optional) 
  icon                    
}) => {
  const registerFunction = register(name, rules)

  // ! render error message dynamically based on the name prop
  if (errors && name)
    errorMessage = errors?.[name]?.message

  return (
    <div className={`relative ${inputPadding}`}>
      <div>
        {/* render input field icons conditionally to prevent runtime errors resulting in a crash if icons variables return undefined. 
        not sure if this is still the case after migrating to FA */}
        {icon && (
          <div className='absolute h-[48px] w-[48px] text-[12px] opacity-20 pointer-events-none'>
            <div className="flex items-center justify-center h-full">
              {icon}
            </div>
          </div>
        )}
        {/* input field */}
        <input
          {...registerFunction}
          id={id}
          type={type}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`input input-bordered ${className}`}
        />
      </div>
      {/* paragraph with the error message */}
      {/* default version of the paragraph is pre-styled */}
      {/* custom version can be triggered and styled through 'errorVariantClassName' prop */}
      <div className="flex justify-center">
        {displayError &&
          (errorVariantClassName
            ? (
              <p className={`${errorVariantClassName}`}>
                {errorMessage}
              </p>
            )
            : (
              <p className="absolute text-center text-sm text-red-600 p-2 max-w-[300px]">
                {errorMessage}
              </p>
            )
          )
        }
      </div>
    </div>
  )
}

export default InputStyled
