import { Link } from "react-router-dom"

const DashboardSnippetsPlaceholder = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <p>
        You don&#96;t have any snippets yet...
      </p>
      <p>
        Create your first snippet{' '}
        <Link className="underline hover:text-secondary" to='/'>
          here
        </Link>
        !
        </p>
    </div>
  )
}

export default DashboardSnippetsPlaceholder