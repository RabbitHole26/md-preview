import { Link } from "react-router-dom"

const DashboardSnippetsPlaceholder = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <p>
        You don&#96;t have any snippets yet...
      </p>
      <div className="flex">
        <div className="flex gap-1">
          <p>
            Create your first snippet
          </p>
          <Link
            className="underline hover:text-secondary"
            to='/'
          >
            here
          </Link>
        </div>
        <p>
          !
        </p>
      </div>
    </div>
  )
}

export default DashboardSnippetsPlaceholder