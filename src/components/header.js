import React, { useState } from "react"
import { Link } from "gatsby"

const Menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Our Services",
    href: "/our-services",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavigationHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav>
        {isOpen ? (
          <div
            className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-40"
            onClick={toggleNavigationHandler}
            aria-hidden="true"
          ></div>
        ) : null}
        <div
          className={`main-navigation relative top-0 z-50 h-full w-10/12 bg-sir-primary p-10 text-white transition lg:h-auto lg:w-full lg:translate-x-0 lg:py-3 lg:px-0 lg:transition-none ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="lg:sm:px-10 lg:mx-auto lg:flex lg:max-w-screen-xl lg:flex-row lg:items-center lg:px-0">
            <div className="hidden lg:block">
              <Link to={`/`}>[Logo]</Link>
            </div>
            <ul className="border-b border-solid border-slate-700 text-left lg:m-auto lg:flex lg:space-x-10 lg:border-0">
              {Menu.map(item => (
                <li key={item.name} className="py-3 font-bold">
                  <Link to={item.href} activeClassName="text-sir-secondary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fixed top-0 z-40 w-full bg-sir-primary lg:hidden">
          <div className="sir-container flex items-center py-4">
            <div>
              <Link to={`/`}>[]</Link>
            </div>

            <button
              onClick={toggleNavigationHandler}
              className="relative -right-3 ml-auto select-none lg:hidden"
            >
              <svg
                className={`svg-menu text-white ${
                  isOpen ? "animate-menu" : ""
                }`}
                viewBox="0 0 100 100"
                width="45"
              >
                <path
                  className="line top stroke-current"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle stroke-current" d="m 30,50 h 40" />
                <path
                  className="line bottom stroke-current"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
