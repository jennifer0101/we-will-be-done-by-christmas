import React from "react";
import { Link } from "react-router-dom";
import "style.css";

import Slider from 'react-animated-slider';

import Image1 from './components/Slider/images/trash1600w.jpg';
import Image2 from './components/Slider/images/food1600w.jpg';
import Image3 from './components/Slider/images/people1600w.jpg';
import Image4 from './components/Slider/images/money1600w.jpg';

function Slider() {
    const slides = [
        {
          title: '209 to 254 pounds of edible food',
          description: 'thrown away per American, per year',
          image: Image1
        },
        {
          title: '40% of food',
          description: 'in the US is never eaten',
          image: Image2
        },
        {
          title: 'If the US wasted just 5% less food',
          description: 'it would be enough to feed 4 million Americans',
          image: Image3
        },
        {
          title: '$750 million per year',
          description: 'just to dispose of the food tossed in the trash',
          image: Image4
        }
      ];

      return (
        {slides.map((slide, index) =>
            <div
                key={index}
                className="slider-content"
                style={{ background: `url('${slide.image}') no-repeat center center` }}
            >
                <div className="inner">
                    <h1>{slide.title}</h1>
                    <h3>{slide.description}</h3>
                </div>
            </div>
        )}
                  
      );
    }

export default Slider;