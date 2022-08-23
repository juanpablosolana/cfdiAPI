const Footer = () => {
  return (
    <div className="">
      <footer className="text-gray-600 body-font bg-indigo-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            2021 CFDI | API Desarrollado por —
            <a
              href="https://pablosolana.dev"
              rel="noopener noreferrer"
              className="text-gray-400 ml-1"
              target="_blank"
            >
              Pablo Solana{" "}
            </a>
            {/* Para
            <a href="https://loprogramamos.com" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">Lo Programamos</a> */}
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
