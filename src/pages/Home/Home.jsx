import React from 'react'
import Layout from '../../components/Layout/Layout'
import Sections1 from './Sections1'
import '../../styles/HomeStyle.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const Home = () => {
  return (
    <>
    <Layout>
    {/*  {Home section Hero Banner} */ }
      <Sections1 />
      {/* Home Section about  */}
      <Section2 />
      {/* Home Section Menu */}
      <Section3 />
      {/* Home section Promotion. */}
      <Section4 />
      {/* Home section shop */}
      <Section5 />
      {/* Home section blog */}
      <Section6 />
      {/* Home section contact */}
      <Section7 />
    </Layout>
    </>
  )
}

export default Home
