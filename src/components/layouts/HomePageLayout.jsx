import SnippetForm from "../markdown-forms/SnippetForm"

const HomePageLayout = ({children}) => {
  return (
    <div className='flex flex-col'>
        <SnippetForm />
      <div className='grow'>
        {children}
      </div>
    </div>
  )
}

export default HomePageLayout