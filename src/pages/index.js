import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';

const HomePage = () => {
  return(
    <Layout>
      <Hero />
      <Intro />
    </Layout>
  );
}

export default HomePage;
