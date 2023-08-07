import Head from 'next/head'
import Footer from 'components/Footer/Footer'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-2 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className="flex flex-col flex-1 justify-center items-center px-20 w-full text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>

        <div className="flex flex-wrap justify-around items-center mt-6 max-w-4xl sm:w-full">

        </div>
      </main>

      <Footer />
    </div>
  )
}
