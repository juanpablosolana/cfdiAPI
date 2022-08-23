const LeftHero = ({ setIsOpen }) => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">
            Consulta fácilmente el estatus de las{" "}
          </span>
          <span className="block text-indigo-600 xl:inline">
            facturas emitidas por el SAT MX
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Vas a comprar un auto y te entregan una factura impresa, ingresa los
          datos para saber si fue emitida por el SAT y el estatus que tiene.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="mt-3 sm:mt-0 sm:ml-3" onClick={() => setIsOpen(true)}>
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              ¿De dónde obtengo esos datos?
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LeftHero;
