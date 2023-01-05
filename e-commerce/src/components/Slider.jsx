import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const files = [
    {
        title: "Canon camera",
        picUrl: "images/8.png"
    },
    {
        title: "Laptop",
        picUrl: "images/5.png"
    }
]

class SliderFunc extends Component{
    render(){
        const settings ={
            dots: true,
            fade: true,
            infinte: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: 'slides'
        }
    return (
        <div>
            <p>Please work</p>
            <Slider {...settings}>
                {files.map((data) =>{
                    return(
                        <div>
                        <p>{data.title}</p>
                          <img src={data.picUrl}></img>  
                        </div>
                    )

                })
            }
            </Slider>
        </div>
    )
    }
}

export default SliderFunc