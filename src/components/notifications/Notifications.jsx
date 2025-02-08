import { Toaster } from 'react-hot-toast'
import useThemeContext from '../../store/theme-context/useThemeContext'
import { light } from '../../store/theme-context/theme-aliases-map'

const Notifications = () => {
	const {theme} = useThemeContext()

	return (
		<Toaster
			toastOptions={{
				// className: theme === light ? '' : 'bg-theme-dark text-font-dark',
				style: {
					backgroundColor: theme === light ? '' : 'rgba(23,18,18,1)',
					color: theme === light ? '' : 'rgba(202,201,201,1)',
				},
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
