import { getJsonData } from '../utils/tool'


const Home = ({ data }) => {
  console.log(data)
  return (
    <div >
      ali
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