import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React + NextJS</title>
      </Head>

      <Header />

      <Layout />

      <Footer />
    </div>
  );
};

export default Home;
