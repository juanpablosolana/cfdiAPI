import ReactDOM from "react-dom";
const HelpInfo = ({
  state,
  setState,
  setRfcEmisor,
  setRfcReceptor,
  setTotal,
  setFolioFiscal,
  setExample,
}) => {
  const setData = () => {
    setRfcEmisor("RTU111018SV3");
    setRfcReceptor("OEE0508161P7");
    setTotal("34800.00");
    setFolioFiscal("49E87987-F780-42B2-AA23-4385D7CA1D75");
    setExample(true);
    setState(false);
  };
  const isClose = () => setState(false);

  const handleEscapeKey = (event) => {
    if (event.code === "Escape") {
      isClose();
      return document.removeEventListener("keydown", handleEscapeKey);
    }
  };

  if (state) {
    return ReactDOM.createPortal(
      <div
        className="fixed z-50 inset-0 overflow-y-auto animate-fade-in"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-secondary-900 bg-opacity-80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
            onClick={isClose}
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom card rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full animate-scale-in">
            <div className="bg-gradient-to-br from-white to-secondary-50 px-6 pt-6 pb-4 sm:p-8 sm:pb-6">
              <div className="sm:flex sm:items-start">
                <div
                  className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 sm:mx-0 sm:h-10 sm:w-10 cursor-pointer hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-medium"
                  onClick={isClose}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-1">
                  <h3
                    className="text-2xl leading-8 font-display font-bold gradient-text mb-4"
                    id="modal-title"
                  >
                    📄 ¿Dónde encuentro estos datos?
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Busca la siguiente información en tu factura electrónica:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900">RFC del Emisor</h4>
                          <p className="text-sm text-secondary-600">RFC del negocio que emite la factura</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900">RFC del Receptor</h4>
                          <p className="text-sm text-secondary-600">Tu RFC o del que hace la compra</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900">Total</h4>
                          <p className="text-sm text-secondary-600">Monto total con centavos</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-sm">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900">Folio Fiscal</h4>
                          <p className="text-sm text-secondary-600">UUID tal como aparece en la factura</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Ejemplo de datos:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-medium text-primary-700">RFC emisor:</span>
                        <span className="ml-2 text-primary-800 font-mono">RTU111018SV3</span>
                      </div>
                      <div>
                        <span className="font-medium text-primary-700">RFC receptor:</span>
                        <span className="ml-2 text-primary-800 font-mono">OEE0508161P7</span>
                      </div>
                      <div>
                        <span className="font-medium text-primary-700">Total:</span>
                        <span className="ml-2 text-primary-800 font-mono">34800.00</span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="font-medium text-primary-700">Folio fiscal:</span>
                        <span className="ml-2 text-primary-800 font-mono text-xs">49E87987-F780-42B2-AA23-4385D7CA1D75</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={setData}
                  className="btn-primary flex-1 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Probar con ejemplo
                </button>
                <button
                  onClick={isClose}
                  className="btn-secondary flex-1 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root"),
      document.addEventListener("keydown", handleEscapeKey)
    );
  } else {
    return null;
  }
};

export default HelpInfo;
