
import Head from 'next/head'
import Header from '../components/navigation/header'

const MainLayout = (props) => {
  return (
    <>
      <Head></Head>
      <Header />
      <div className='contianer'>
        {props.children}
      </div>
    </>
  )
}

export default MainLayout