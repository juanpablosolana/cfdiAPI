import Head from 'next/head'
import Header from '../components/Header'
// import UploadFile from '../components/UploadFile'
import Footer from '../components/Footer'
// import HelpInfo from '../components/HelpInfo'


export default function Home() {
  return (
    <div >
      <Head>
        <title>CFDI | API</title>
        <meta name="description" content="Consulta de forma fácil y masivamente el estatus de los CFDI 3.3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <UploadFile /> */}
      <Header />
      {/* <HelpInfo /> */}
      {/* <Supabase/> */}
      <Footer />
    </div>
  )
}
