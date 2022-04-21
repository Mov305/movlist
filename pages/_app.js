import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

  return (
    <div className='font-medium px-12 text-gray-700 font-Nunito bg-slate-100  min-h-[100vh]'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
) 
}

export default MyApp
