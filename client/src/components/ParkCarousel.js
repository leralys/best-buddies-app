import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import randomNum from '../assets/randomNum';

const ParkCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <img className='Carousel-image'
                    src={`http://localhost:8080/static/${randomNum()}.jpeg`}
                    alt='Dogs playing in a dog park' />
            </div>
            <div>
                <img className='Carousel-image'
                    src={`http://localhost:8080/static/${randomNum()}.jpeg`}
                    alt='Dogs playing in a dog park' />
            </div>
            <div>
                <img className='Carousel-image'
                    src={`http://localhost:8080/static/${randomNum()}.jpeg`}
                    alt='Dogs playing in a dog park' />
            </div>
        </Carousel>
    )
}

export default ParkCarousel;