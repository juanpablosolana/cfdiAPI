import Image from "next/image";
import Menu from "../Menu";
import Form from "../Hero/Form";
import HelpInfo from "../HelpInfo";
import LeftHero from "../Hero/LeftHero";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rfcEmisor, setRfcEmisor] = useState("");
  const [rfcReceptor, setRfcReceptor] = useState("");
  const [total, setTotal] = useState("");
  const [folioFiscal, setFolioFiscal] = useState("");
  const [example, setExample] = useState("");

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>

      <HelpInfo
        state={isOpen}
        setState={setIsOpen}
        setRfcEmisor={setRfcEmisor}
        setRfcReceptor={setRfcReceptor}
        setTotal={setTotal}
        setFolioFiscal={setFolioFiscal}
        setExample={setExample}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">


          <div className="relative z-20">
            <div className="pt-6 px-4 sm:px-6 lg:px-8">
              <Menu />
            </div>

            {/* Mobile menu overlay */}
            <div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="card rounded-2xl shadow-xl overflow-hidden animate-slide-down">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      src="/img/workflow-mark-indigo-600.svg"
                      width={50}
                      height={50}
                      alt="CFDI API Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-2 inline-flex items-center justify-center text-secondary-400 hover:text-secondary-600 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-100"
                    >
                      <span className="sr-only">Cerrar menú principal</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-5 pt-2 pb-6 space-y-1">
                  <a
                    href="https://api.cfdiapi.com"
                    className="block px-3 py-2 rounded-xl text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                  >
                    Utiliza nuestra API
                  </a>
                </div>
              </div>
            </div>
          </div>

          <LeftHero setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Enhanced form section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-800 opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>

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
    </div>
  );
};
export default Header;
