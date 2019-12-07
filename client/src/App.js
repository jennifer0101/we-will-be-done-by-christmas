import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home";
import search from "./pages/search";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={home} />
          <Route exact path="/search" component={search} />
        </Wrapper>
      </div>
    </Router>
  );
}


export default App;




// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
