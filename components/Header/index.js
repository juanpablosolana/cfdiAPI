import Image from 'next/image'
import Menu from '../Menu'
import Form from '../Hero/Form'
import HelpInfo from '../HelpInfo'
import LeftHero from '../Hero/LeftHero'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [rfcEmisor, setRfcEmisor] = useState('')
  const [rfcReceptor, setRfcReceptor] = useState('')
  const [total, setTotal] = useState('')
  const [folioFiscal, setFolioFiscal] = useState('')
  const [example, setExample] = useState('')

  return (
    <div className="relative bg-white overflow-hidden">
      <HelpInfo
        state={isOpen}
        setState={setIsOpen}
        setRfcEmisor={setRfcEmisor}
        setRfcReceprot={setRfcReceptor}
        setTotal={setTotal}
        setFolioFiscal={setFolioFiscal}
        setExample={setExample}
      />
      <div className="max-w-7xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-screen w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <Menu />
            </div>

            <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      src="/img/workflow-mark-indigo-600.svg"
                      width={50}
                      height={50}
                      alt="Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Nuestra API</a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Legales</a>
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Entrar</a>
                </div>
              </div>
            </div>
          </div>

          <LeftHero setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-300">
        <Form
          rfcEmisor={rfcEmisor}
          rfcReceptor={rfcReceptor}
          total={total}
          folioFiscal={folioFiscal}
          example={example}
          setExample={setExample}
        />
      </div>
    </div>
  )
}
export default Header;