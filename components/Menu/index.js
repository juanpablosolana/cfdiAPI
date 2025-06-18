import Image from "next/image";

const Menu = () => {
  return (
    <nav
      className="relative flex items-center justify-between sm:h-12 lg:justify-start animate-fade-in"
      aria-label="Navegación principal"
    >
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#" className="group flex items-center space-x-3">
            <span className="sr-only">CFDI API</span>
            <div className="relative">
              <Image
                className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-200"
                src="/img/workflow-mark-indigo-600.svg"
                width={50}
                height={50}
                alt="CFDI API Logo"
              />
              <div className="absolute inset-0 bg-primary-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold gradient-text">
                CFDI API
              </h1>
              <p className="text-xs text-secondary-500 font-medium">
                Consulta de Facturas
              </p>
            </div>
          </a>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-2 inline-flex items-center justify-center text-secondary-400 hover:text-secondary-600 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-100 shadow-soft"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:ml-10 md:pr-4">
        <div className="flex items-center space-x-6">
          <a
            href="https://api.cfdiapi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-4 py-2 font-medium text-secondary-600 hover:text-primary-600 transition-all duration-200"
          >
            <span className="relative z-10">Utiliza nuestra API</span>
            <div className="absolute inset-0 bg-primary-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform scale-95 group-hover:scale-100"></div>
          </a>

          <div className="flex items-center space-x-2 text-sm text-secondary-500">
            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Servicio activo</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
