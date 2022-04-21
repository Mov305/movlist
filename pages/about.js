import Head from 'next/head'

function about() {
  return (
    <>
      <Head>
        <title>Orxy | About </title>
        <meta name="keywords" content="About" />
      </Head>
      <div>
        <h1 className=' text-3xl mb-8 font-semibold'>about</h1>
        <p className="mb-6">this is a simple text it does mean nothing so do not bather yourself reading it would only waste your time</p>
      </div>
    </>

  )
}

export default about