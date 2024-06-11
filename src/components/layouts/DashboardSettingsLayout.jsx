import DashboardSidebar from "../dashboard/DashboardSidebar"

const DashboardSettingsLayout = ({children}) => {
  return (
    <div className='flex flex-col md:flex-row gap-3'>
      <div>
        <DashboardSidebar />
      </div>
      <div className='grow'>
        {children}
      </div>
    </div>
  )
}

export default DashboardSettingsLayout
