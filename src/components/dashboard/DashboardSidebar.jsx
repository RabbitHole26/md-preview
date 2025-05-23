import useVisibilityContext from "../../store/visibility-context/useVisibilityContext"
import daisyUiRemoveFocus from "../../utils/daisyUi-remove-focus"
import LinkCustom from "../link-custom/LinkCustom"

const DashboardSettingsAside = () => {
  const {signOutPromptVisible} = useVisibilityContext()
  const handleClick = () => {
    daisyUiRemoveFocus()
  }

  return (
    <div className={`drawer md:drawer-open ${signOutPromptVisible ? 'z-49' : 'z-50'}`}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="drawer-button md:hidden hover:text-primary underline">More settings</label>
      </div>
      {/* some of the same styles in parent 'div' and child 'ul' are on purpose. */}
      {/* TODO: check which classes are consolidated into the 'drawer' tailwind class to better understand this */}
      <div className="drawer-side md:h-fit shadow-lg md:rounded-md">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="text-xl md:text-sm flex gap-2 h-full justify-center md:h-fit md:rounded-md menu p-4 bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><LinkCustom onClick={handleClick} to="/dashboard/settings/display-name">Change display name</LinkCustom></li>
          <li><LinkCustom onClick={handleClick} to="/dashboard/settings/password">Change password</LinkCustom></li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardSettingsAside