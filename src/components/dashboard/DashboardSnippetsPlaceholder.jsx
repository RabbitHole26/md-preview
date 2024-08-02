import LinkCustom from "../link-custom/LinkCustom"

const DashboardSnippetsPlaceholder = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <p>
        You don&#96;t have any snippets yet...
      </p>
      <p>
        Create your first snippet{' '}
        <LinkCustom className="underline hover:text-secondary" to='/'>
          here
        </LinkCustom>
        !
        </p>
    </div>
  )
}

export default DashboardSnippetsPlaceholder