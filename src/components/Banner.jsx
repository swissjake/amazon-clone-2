import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {
    return (
        <div className="relative">
            <div  className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
        <Carousel
        autoPlay
        infiniteLoop
        showSatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt="slider1"/>
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="slider2" />
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="slider3"/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
