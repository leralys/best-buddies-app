import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import randomNum from '../utilities/randomNum';
import { url } from '../utilities/url';

const ParkCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <img className='Carousel-image'
                    src={`${url}/static/parks/${randomNum()}.jpeg`}
                    alt='Dogs playing in a dog park' />
            </div>
            <div>
                <img className='Carousel-image'
                    src={`${url}/static/parks/${randomNum()}.jpeg`}
                    alt='Dogs playing in a dog park' />
            </div>
            <div>
                <img className='Carousel-image'
                    src={`${url}/static/parks/${randomNum()}.jpeg`}
                    alt='Dogs playing in a dog park' />
            </div>
        </Carousel>
    );
}

export default ParkCarousel;