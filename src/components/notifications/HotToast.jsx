import { Toaster } from 'react-hot-toast'
import useThemeContext from '../../store/theme-context/useThemeContext'

const HotToast = () => {
	const {themeLight} = useThemeContext()

	return (
		<Toaster
			toastOptions={{
				style: {
					backgroundColor: themeLight ? '' : 'rgba(23,18,18,1)',
					color: themeLight ? '' : 'rgba(202,201,201,1)',
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

export default HotToast
