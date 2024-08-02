import { Link } from 'react-router-dom'
import scrollToTop from '../../utils/scroll-to-top'

const LinkCustom = ({
  children,
  to,
  className,
}) => {
  return (
    <Link 
      to={to} 
      className={className} 
      onClick={scrollToTop}
    >
      {children}
    </Link>
  )
}

export default LinkCustom