import Head from 'next/head'
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='bg-black h-[400px] min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar />
        {/* Feed */}
        {/* Widegets */}

        {/* Modal */}
      </main>
    </div>
  )
}