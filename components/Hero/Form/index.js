import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../../Spinner";

const Form = ({
  rfcEmisor,
  rfcReceptor,
  total,
  folioFiscal,
  example,
  setExample,
}) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    mode: "onBlur",
  });
  const [status, setStatus] = useState(null);
  const [statusCode, setStatusCode] = useState("");
  const [cancelCode, setCancelCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (example) {
      setValue("rfcEmisor", `${rfcEmisor}`);
      setValue("rfcReceptor", `${rfcReceptor}`);
      setValue("total", `${total}`);
      setValue("folioFiscal", `${folioFiscal}`);
    }
  }, [example, rfcEmisor, rfcReceptor, total, folioFiscal, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    setShowResult(false);
    setExample(false);

    const { rfcEmisor, rfcReceptor, total, folioFiscal } = data;
    const URL = `/api/estatus/${rfcEmisor}/${rfcReceptor}/${total}/${folioFiscal}`;

    try {
      const response = await fetch(URL);
      const responseData = await response.json();
      const { error } = responseData;

      if (error) {
        setStatus(error);
        setStatusCode("");
        setCancelCode("");
      } else {
        const consultaResult = responseData["s:Envelope"]["s:Body"]["ConsultaResponse"]["ConsultaResult"];
        setStatus(consultaResult["a:Estado"]["_text"]);
        setStatusCode(consultaResult["a:CodigoEstatus"]["_text"]);
        setCancelCode(consultaResult["a:EsCancelable"]["_text"]);
      }

      setShowResult(true);
      reset();
      document.getElementById("rfcEmisor")?.focus();

      // Auto-hide result after 15 seconds
      setTimeout(() => {
        setShowResult(false);
        setStatus(null);
      }, 15000);

    } catch (err) {
      setStatus("Error de conexión. Por favor, intenta nuevamente.");
      setShowResult(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Verificación CFDI
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Ingresa los datos de la factura
          </h2>
          <p className="text-white text-opacity-80 text-sm">
            Todos los campos son obligatorios para la verificación
          </p>
        </div>

        {/* Form */}
        <form
          id="api-form"
          className="mt-8 space-y-6 animate-slide-up"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            {/* RFC Emisor */}
            <div>
              <label htmlFor="rfcEmisor" className="block text-sm font-medium text-white text-opacity-90 mb-2">
                RFC Emisor
              </label>
              <input
                placeholder="Ej: ABC123456789"
                id="rfcEmisor"
                className={`input-field ${errors.rfcEmisor ? 'border-error-400 ring-error-100' : ''}`}
                {...register("rfcEmisor", {
                  required: "El RFC del emisor es obligatorio",
                  minLength: { value: 12, message: "El RFC debe tener al menos 12 caracteres" },
                  maxLength: { value: 13, message: "El RFC no puede tener más de 13 caracteres" },
                  pattern: { value: /^[A-Z&Ñ]{3,4}[0-9]{6}[A-Z0-9]{3}$/, message: "Formato de RFC inválido" }
                })}
              />
              {errors.rfcEmisor && (
                <p className="mt-1 text-sm text-error-200">{errors.rfcEmisor.message}</p>
              )}
            </div>

            {/* RFC Receptor */}
            <div>
              <label htmlFor="rfcReceptor" className="block text-sm font-medium text-white text-opacity-90 mb-2">
                RFC Receptor
              </label>
              <input
                placeholder="Ej: XYZ987654321"
                className={`input-field ${errors.rfcReceptor ? 'border-error-400 ring-error-100' : ''}`}
                {...register("rfcReceptor", {
                  required: "El RFC del receptor es obligatorio",
                  minLength: { value: 12, message: "El RFC debe tener al menos 12 caracteres" },
                  maxLength: { value: 13, message: "El RFC no puede tener más de 13 caracteres" },
                  pattern: { value: /^[A-Z&Ñ]{3,4}[0-9]{6}[A-Z0-9]{3}$/, message: "Formato de RFC inválido" }
                })}
              />
              {errors.rfcReceptor && (
                <p className="mt-1 text-sm text-error-200">{errors.rfcReceptor.message}</p>
              )}
            </div>

            {/* Total */}
            <div>
              <label htmlFor="total" className="block text-sm font-medium text-white text-opacity-90 mb-2">
                Total (con centavos)
              </label>
              <input
                placeholder="Ej: 1234.56"
                className={`input-field ${errors.total ? 'border-error-400 ring-error-100' : ''}`}
                type="number"
                step="0.01"
                {...register("total", {
                  required: "El total es obligatorio",
                  min: { value: 0.01, message: "El total debe ser mayor a 0" },
                  max: { value: 999999999.99, message: "El total es demasiado grande" }
                })}
              />
              {errors.total && (
                <p className="mt-1 text-sm text-error-200">{errors.total.message}</p>
              )}
            </div>

            {/* Folio Fiscal */}
            <div>
              <label htmlFor="folioFiscal" className="block text-sm font-medium text-white text-opacity-90 mb-2">
                Folio Fiscal (UUID)
              </label>
              <input
                placeholder="Ej: 12345678-1234-1234-1234-123456789012"
                className={`input-field ${errors.folioFiscal ? 'border-error-400 ring-error-100' : ''}`}
                {...register("folioFiscal", {
                  required: "El folio fiscal es obligatorio",
                  minLength: { value: 36, message: "El UUID debe tener 36 caracteres" },
                  maxLength: { value: 36, message: "El UUID debe tener 36 caracteres" },
                  pattern: { value: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, message: "Formato de UUID inválido" }
                })}
              />
              {errors.folioFiscal && (
                <p className="mt-1 text-sm text-error-200">{errors.folioFiscal.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            {loading ? (
              <div className="flex items-center justify-center py-4">
                <Spinner />
                <span className="ml-3 text-white font-medium">Verificando factura...</span>
              </div>
            ) : (
              <button
                type="submit"
                className={`w-full bg-white hover:bg-secondary-50 text-primary-700 font-semibold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 ${
                  example ? 'animate-bounce' : ''
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verificar Factura
                </span>
              </button>
            )}
          </div>
        </form>

        {/* Results */}
        {showResult && status && (
          <div className={`animate-slide-down ${
            status === "Vigente" ? "status-success" : "status-error"
          }`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {status === "Vigente" ? (
                  <svg className="w-6 h-6 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-error-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  {status === "Vigente" ? "✅ Factura Válida" : "❌ Factura Inválida"}
                </h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Estatus:</span> {status}</p>
                  {statusCode && <p><span className="font-medium">Código:</span> {statusCode}</p>}
                  {cancelCode && <p><span className="font-medium">Es cancelable:</span> {cancelCode}</p>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Form;
