import { Toaster } from 'react-hot-toast'
import useThemeContext from '../../store/theme-context/useThemeContext'
import { light } from '../../store/theme-context/theme-aliases-map'

const Notifications = () => {
	const {theme} = useThemeContext()

	return (
		<Toaster
			toastOptions={{
				className: theme === light ? '' : 'bg-theme-dark text-font-dark',
				success: {
					duration: 1500,
				},
				error: {
					duration: 2000,
				}
			}}
		/>
	)
}

export default Notifications
