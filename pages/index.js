import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Verificar Facturas CFDI México | Consulta Estatus SAT Gratis | CFDI API</title>
        <meta
          name="description"
          content="🔍 Verifica facturas CFDI del SAT México GRATIS. Consulta el estatus de facturas electrónicas en segundos. Disponible en web y Telegram @cfdiAPIbot. ✅ Seguro y confiable."
        />
        <meta
          name="keywords"
          content="verificar facturas CFDI, consultar estatus SAT, facturas electrónicas México, validar CFDI gratis, RFC verificación, UUID factura, folio fiscal consulta, SAT México, facturas digitales, comprobantes fiscales, validación CFDI online, estatus factura electrónica, verificar RFC emisor, consulta CFDI gratuita, bot telegram CFDI, cfdiAPIbot, telegram facturas"
        />
        <meta name="author" content="Lo Programamos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="es-MX" />
        <meta name="geo.region" content="MX" />
        <meta name="geo.country" content="México" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cfdiapi.com/" />
        <meta property="og:site_name" content="CFDI API" />
        <meta property="og:title" content="🔍 Verificar Facturas CFDI México | Consulta Estatus SAT Gratis" />
        <meta property="og:description" content="Verifica facturas CFDI del SAT México GRATIS en segundos. Herramienta oficial para validar RFC, UUID y autenticidad. ✅ Seguro, rápido y confiable." />
        <meta property="og:image" content="https://cfdiapi.com/img/og-cfdi-verificacion.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Verificación de Facturas CFDI México - Herramienta Gratuita" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@loprogramamos" />
        <meta name="twitter:creator" content="@loprogramamos" />
        <meta name="twitter:url" content="https://cfdiapi.com/" />
        <meta name="twitter:title" content="🔍 Verificar Facturas CFDI México | Consulta Estatus SAT Gratis" />
        <meta name="twitter:description" content="Verifica facturas CFDI del SAT México GRATIS en segundos. Herramienta oficial para validar RFC, UUID y autenticidad. ✅ Seguro y confiable." />
        <meta name="twitter:image" content="https://cfdiapi.com/img/og-cfdi-verificacion.jpg" />
        <meta name="twitter:image:alt" content="Verificación de Facturas CFDI México - Herramienta Gratuita" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CFDI API" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://cfdiapi.com/" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://loprogramamos.com" />

        {/* Alternate languages */}
        <link rel="alternate" hrefLang="es-mx" href="https://cfdiapi.com/" />
        <link rel="alternate" hrefLang="es" href="https://cfdiapi.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://cfdiapi.com/" />

        {/* Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "CFDI API - Verificador de Facturas",
              "alternateName": "Verificador CFDI México",
              "description": "Herramienta gratuita para verificar el estatus de facturas electrónicas CFDI emitidas por el SAT México. Valida RFC, UUID y autenticidad de comprobantes fiscales.",
              "url": "https://cfdiapi.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "browserRequirements": "Requires JavaScript",
              "softwareVersion": "2.0",
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString().split('T')[0],
              "inLanguage": "es-MX",
              "audience": {
                "@type": "Audience",
                "audienceType": "Business professionals, taxpayers, accountants",
                "geographicArea": {
                  "@type": "Country",
                  "name": "México"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "MXN",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01"
              },
              "creator": {
                "@type": "Organization",
                "name": "Lo Programamos",
                "url": "https://loprogramamos.com",
                "logo": "https://loprogramamos.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": "Spanish"
                }
              },
              "featureList": [
                "Verificación gratuita de facturas CFDI",
                "Consulta de estatus en tiempo real",
                "Validación de RFC emisor y receptor",
                "Verificación de UUID/Folio Fiscal",
                "Interfaz fácil de usar",
                "Sin registro requerido",
                "Bot de Telegram disponible @cfdiAPIbot",
                "Múltiples canales de acceso"
              ],
              "screenshot": "https://cfdiapi.com/img/screenshot-verificacion.jpg"
            })
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lo Programamos",
              "url": "https://loprogramamos.com",
              "logo": "https://loprogramamos.com/logo.png",
              "description": "Empresa de desarrollo de software especializada en soluciones fiscales y tecnológicas para México",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://loprogramamos.com"
              ]
            })
          }}
        />

        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cómo verificar una factura CFDI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para verificar una factura CFDI necesitas: RFC del emisor, RFC del receptor, total con centavos y el folio fiscal (UUID). Ingresa estos datos en nuestro verificador gratuito."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Es gratuito verificar facturas CFDI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, nuestro servicio de verificación de facturas CFDI es completamente gratuito. No requiere registro ni pago."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Dónde encuentro el folio fiscal de una factura?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El folio fiscal (UUID) es un código de 36 caracteres que aparece en la factura electrónica. Tiene el formato: 12345678-1234-1234-1234-123456789012"
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué significa que una factura esté 'Vigente'?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Una factura con estatus 'Vigente' significa que fue emitida correctamente por el SAT y es válida para efectos fiscales."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <main className="flex-1">
        <Header />
      </main>

      <Footer />
    </div>
  );
}
