import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Logos from '../components/Logos';
import Blogs from '../components/Blogs';

const HomePage = () => {
  return(
    <Layout>
      <Hero />
      <Intro />
      <Logos />
      <Blogs />
    </Layout>
  );
}

export default HomePage;
