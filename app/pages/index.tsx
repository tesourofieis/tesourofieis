import Head from 'next/head'
import Footer from '../components/Footer/index'
import Header from '../components/Header/index'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Tesouro dos Fiéis</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>
      <Title>Tesouro</Title>
    </main>

    <Footer />
  </div>
)

export default Home
