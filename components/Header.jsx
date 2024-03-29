import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavSlider from './NavSlider'

const Header = ({ links, logoUrl }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeaderLogo, setShowHeaderLogo] = useState(false)
  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowHeaderLogo(true)
      } else {
        setShowHeaderLogo(false)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="flex bg-light h-16 justify-center fixed top-0 left-0 right-0 z-50">
      <div className="nav-inner w-full flex items-center justify-between px-2 sm:px-12 md:px-14 lg:px-14 xl:px-0 max-w-7xl">
        <Link href="/">
          <a className="h-full">
            <div
              className={classNames(
                'h-full py-5 relative md:opacity-100 transition-all',
                {
                  'opacity-100': showHeaderLogo,
                },
              )}
            >
              <img src={logoUrl} className="h-full ml-2" />
            </div>
          </a>
        </Link>
        <div
          className="flex items-center transition-all text-coal hover:text-main"
          onClick={toggleNav}
        >
          <h5
            className="hidden md:block cursor-pointer"
            style={{ transform: 'translateY(2px)' }}
          >
            {isOpen ? 'Close' : 'Menu'}
          </h5>
          {!isOpen ? (
            <MenuIcon
              fontSize="large"
              className="h-10 w-10 mx-2 fill-current cursor-pointer"
            />
          ) : (
            <CloseIcon
              fontSize="large"
              className="h-10 w-10 mx-2 fill-current cursor-pointer"
            />
          )}
        </div>
      </div>

      <NavSlider menuItems={links} isOpen={isOpen} onToggle={toggleNav} />
    </div>
  )
}

export default Header
