const LeftHero = ({ setIsOpen }) => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 animate-slide-up">
      <div className="sm:text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 text-sm font-medium mb-6 animate-fade-in">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          🇲🇽 Verificador CFDI Oficial México
        </div>

        {/* Main heading */}
        <h1 className="text-4xl tracking-tight font-display font-bold text-secondary-900 sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg">
          <span className="block xl:inline animate-fade-in">
            Consulta fácilmente el{" "}
          </span>
          <span className="block gradient-text xl:inline animate-fade-in" style={{animationDelay: '0.2s'}}>
            estatus de facturas
          </span>
          <span className="block text-secondary-700 xl:inline animate-fade-in" style={{animationDelay: '0.4s'}}>
            {" "}emitidas por el SAT
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-secondary-600 sm:mt-8 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-8 md:text-2xl lg:mx-0 leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
          <strong>Consulta gratis el estatus de facturas CFDI</strong> emitidas por el SAT México.
          Verifica la autenticidad de comprobantes fiscales digitales de manera{" "}
          <span className="font-semibold text-primary-600">instantánea y segura</span>.
          Perfecto para validar facturas de vehículos, inmuebles, servicios y productos.
        </p>

        {/* Features list */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-lg animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-secondary-700 font-medium">Consulta CFDI instantánea</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-secondary-700 font-medium">Validación RFC y UUID</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-secondary-700 font-medium">Conexión directa SAT</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-secondary-700 font-medium">Gratis y sin registro</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start animate-fade-in" style={{animationDelay: '1s'}}>
          <button
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-700 bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl hover:from-primary-100 hover:to-primary-200 hover:border-primary-300 transform hover:-translate-y-1 transition-all duration-300 shadow-soft hover:shadow-medium focus:outline-none focus:ring-4 focus:ring-primary-200"
          >
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ¿De dónde obtengo estos datos?
            </span>
          </button>
        </div>

        {/* Telegram Bot Badge */}
        <div className="mt-8 animate-fade-in" style={{animationDelay: '1s'}}>
          <a
            href="https://t.me/cfdiAPIbot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-medium hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="font-medium">
              También en Telegram: <span className="font-bold">@cfdiAPIbot</span>
            </span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-secondary-500 animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success-500 rounded-full"></div>
            <span>Verificador CFDI oficial</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span>Consulta SAT en tiempo real</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
            <span>100% gratuito</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Facturas electrónicas México</span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LeftHero;
