import DashboardControls from "../dashboard/DashboardControls"

const DashboardLayout = ({children}) => {
  return (
    <div className='flex flex-col'>
        <DashboardControls />
      <div className='grow'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout