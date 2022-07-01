import Image from 'next/image'
const Menu = () => {
  return (
    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <Image
              className="h-8 w-auto"
              src="/img/workflow-mark-indigo-600.svg"
              width={50}
              height={50}
              alt="Logo"
            />
          </a>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <a href="https://api.cfdiapi.com" className="font-medium text-gray-500 hover:text-gray-900">Utiliza nuestra API</a>
      </div>
    </nav>
  )
}

export default Menu