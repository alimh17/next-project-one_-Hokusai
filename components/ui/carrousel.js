
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarrouselComp = ({ data }) => {

  const setting = {
    dots: false,
    inifinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...setting}>
      {data.map(item => (
        <div key={item.id}>
          <div
            className='carrousel_wrapper'
            style={{ background: `url(/images/arts/${item.name}) no-repeat` }}
          >{item.title}</div>
        </div>
      ))}
    </Slider>
  )
}

export default CarrouselComp