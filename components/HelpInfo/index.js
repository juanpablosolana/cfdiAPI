import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function HelpInfo({ state, setState }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(state);
  }, [state]);

  if (isBrowser) {
    return ReactDOM.createPortal(

      <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" onClick={_ => { setIsBrowser(false), setState(false) }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    className="cursor-pointer"
                  >
                    <path d="M443.6 387.1L312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"></path>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-indigo-700" id="modal-title">
                    Busca en la factura lo siguientes datos
                  </h3>
                  <div className="mt-2">
                    <ul className="text-sm text-gray-500">
                      <li>
                       - RFC del emisor : Es el nombre del negocio que emite la factura
                      </li>
                      <li>
                       - RFC del receptor : Debe ser tu RFC o el del que hace la compra
                      </li>
                      <li>
                       - Total : Con centavos
                      </li>
                      <li>
                       - Folio fiscal : Debes ingresarlo tal como aparece en la factura.
                      </li>
                    </ul>
                    <section>
                      <h3 className="text-indigo-500">Ejemplo:</h3>
                      <ul>
                        <li>
                          RFC emisor: RTU111018SV3
                        </li>
                        <li>
                          RFC receptor: OEE0508161P7
                        </li>
                        <li>
                          Total con centavos : 34,800.00
                        </li>
                        <li>
                          Folio fiscal: 49E87987-F780-42B2-AA23-4385D7CA1D75
                        </li>
                      </ul>
                      <a href="http://transparencia.hidalgo.gob.mx/descargables/ENTIDADES/OperadoraEventosEH/48r/ComunicacionS/2018/4trim/facturas/C-035.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-700	">
                        Fuente
                      </a>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }

}

export default HelpInfo;