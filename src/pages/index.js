import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Logos from '../components/Logos';

const HomePage = () => {
  return(
    <Layout>
      <Hero />
      <Intro />
      <Logos />
    </Layout>
  );
}

export default HomePage;
