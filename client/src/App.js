import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import search from "./pages/search";
import addItems from "./pages/addItems";
import inviteFriends from "./pages/inviteFriends";
import cart from "./pages/cart";

import NavIn from "./components/NavIn";
import NavOut from "./components/NavOut";

import { useAuth0 } from "./react-auth0-spa";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Testimonial from "./components/Testimonial/index.js"

import "./components/Slider/style.css";
import "./components/Slider/slider-animation.css";

import "react-animated-slider/build/horizontal.css";

import Image1 from './components/Slider/images/trash1600w.jpg';
import Image2 from './components/Slider/images/food1600w.jpg';
import Image3 from './components/Slider/images/people1600w.jpg';
import Image4 from './components/Slider/images/money1600w.jpg';



function App() {
  const { loading, isAuthenticated } = useAuth0();

  const slides = [
    {
      title: '209 to 254 pounds of edible food',
      description: 'is thrown away per American, per year',
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        {isAuthenticated
          ? <React.Fragment>
            <NavOut />
            <div>
              {/* <Nav /> */}
              <Slider>
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
              </Slider>

              {/* <Testimonial /> */}

              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/search" component={search} />
                <Route exact path="/addItems" component={addItems} />
                <Route exact path="/inviteFriends" component={inviteFriends} />
                <Route exact path="/cart" component={cart} />
              </Switch>
            </div>
          </React.Fragment>
          : <React.Fragment>
            <NavIn />
            <Slider>
              {slides.map((slide, index) =>
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${slide.image}') no-repeat center center` }}
                >
                <div className="inner">
                  <h1 className="slide-title">{slide.title}</h1>
                  <h3>{slide.description}</h3>
                </div>
                </div>
              )}
            </Slider>

            <Testimonial />

            <Switch>
              {/* <Route exact path="/" component={Carousel} /> */}
              <Route exact path="/" component={home} />
            </Switch>
          </React.Fragment>
        }
      </div>
    </Router>
  );
}


export default App;
