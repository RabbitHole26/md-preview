import { Routes, Route } from "react-router-dom"
import DashboardSnippets from "../../components/dashboard/DashboardSnippets"
import ErrorPage from "../error/ErrorPage"
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import DashboardSettings from "../../components/dashboard/DashboardSettings"
import DashboardLayout from "../../components/layouts/DashboardLayout"

const DashboardPage = () => {
  const {authLoading} = useLoadingContext()

  return (
    <div className="transition-all">
      {!authLoading &&
        <div>
          <DashboardLayout>
            <div className="mt-10 lg:mt-[60px] mx-[2%] 400px-custom:mx-[12%] sm:mx-[17%] xl:mx-[20%] 2xl:mx-[28%] mb-[100px]">
              <Routes>
                <Route path="/" element={<DashboardSnippets />}/>
                <Route path="/settings/*" element={<DashboardSettings />}/>
                <Route path="*" element={<ErrorPage />}/>
              </Routes>
            </div>
          </DashboardLayout>
        </div>
      }
      {authLoading &&
        <LoadingSpinner />
      }
    </div>
  )
}

export default DashboardPage