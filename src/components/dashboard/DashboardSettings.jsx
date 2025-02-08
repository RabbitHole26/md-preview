import { Route, Routes, Navigate } from "react-router-dom"
import ChangePasswordForm from "../dashboard-forms/ChangePasswordForm"
import DashboardSettingsLayout from "../../layouts/DashboardSettingsLayout"
import ChangeDisplayNameForm from "../dashboard-forms/ChangeDisplayNameForm"
import ErrorPage from "../../pages/error/ErrorPage"
// import DashboardSettingsMain from "./DashboardSettingsMain"

const DashboardSettings = () => {
  return (
    <div>
      <DashboardSettingsLayout>
        <Routes>
          {/* <Route path="/" element={<DashboardSettingsMain />} /> */}
          <Route index element={<Navigate to="/dashboard/settings/display-name" replace />}/>
          <Route path="/display-name" element={<ChangeDisplayNameForm />}/>
          <Route path="/password" element={<ChangePasswordForm />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </DashboardSettingsLayout>
    </div>
  )
}

export default DashboardSettings
