import type { NextPage } from 'next'
import Head from 'next/head'
import CountrySearchContainer from '../components/CountrySearchContainer';
import { useStore } from '../store';

const Home: NextPage = () => {
  const isDarkMode = useStore((state) => state.isDarkMode)

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#222e37" : "#fafafa",
        minHeight: "100vh",
        maxHeight: "fit-content",
      }}
    >
      <Head>
        <title>Country Flag Search</title>
        <meta name="description" content="Country flag search and basic information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CountrySearchContainer />
    </div>
  )
}

export default Home
