import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { languages, Languages, initLanguage } from '../../lang/i18n'

const Header: FC = () => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState<Languages>(
    Object.values(languages).find((language) => language !== initLanguage) ?? 'en',
  )

  const handleChangeLanguage = (lang: Languages): void => {
    setLang(Object.values(languages).find((language) => language !== lang) ?? 'en')
    i18n.changeLanguage(lang)
  }

  const navigation = [
    { name: t('donation'), link: '/donation' },
    // { name: t('war_news'), link: '/war-news' },
    { name: t('profile'), link: '/profile' },
    { name: t('qna'), link: '/qna' },
  ]

  useEffect(() => {
    console.log('initLanguage', initLanguage)
  }, [])
  return (
    <Popover>
      <div className="py-4 px-4 md:py-6 md:px-8 fixed top-0 left-0 right-0 z-20 bg-aid-purple">
        <nav className="relative flex items-center justify-between" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <img
                  className="h-8 w-auto md:h-10"
                  src="./images/logo_text.svg"
                  alt="Meta aid Logo"
                />
                <span className="sr-only">Meta aid</span>
              </Link>
              {/* <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div> */}
            </div>
          </div>
          <div className="hidden md:block md:ml-auto md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="font-bold text-lg text-white hover:text-aid-blue transition-all duration-300">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pr-2 md:pr-4">
            <button
              type="button"
              className="font-bold text-lg text-white hover:text-aid-blue transition-all duration-300 md:ml-8"
              key={lang}
              onClick={() => handleChangeLanguage(lang)}>
              {t(`${lang}`)}
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* START: mobile용 nav 내용 */}
          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="duration-300 ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90">
            <Popover.Panel
              focus
              className="popup absolute z-20 top-0 inset-x-0 transition transform origin-top-right md:hidden p-0">
              <div className="rounded-lg shadow-md overflow-hidden">
                <div className="text-right">
                  <Popover.Button className="rounded-md p-2 pr-0 inline-flex items-center justify-center text-white bg-aid-purple">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white bg-opacity-90">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="block px-3 py-2 rounded-md text-base font-bold text-gray-700">
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* <button
                  type="button"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </button> */}
              </div>
            </Popover.Panel>
          </Transition>
          {/* END: mobile용 nav 내용 */}
        </nav>
      </div>
    </Popover>
  )
}

export default Header
