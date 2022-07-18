import React from 'react'

import Article from '../components/home/article'
import CarrouselComp from '../components/ui/carrousel'

import { getJsonData } from '../utils/tool'


const Home = ({ data }) => {
  return (
    <div >
      <CarrouselComp data={data.carrousel} />
      <Article data={data.articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await getJsonData()
  return {
    props: {
      data: data
    }
  }
}

export default Home