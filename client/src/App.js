import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MappingPlanner from "./components/MappingPlanner/MappingPlanner.jsx";
import Backpack from "./components/Backpack/Backpack";
import Resources from "./components/SchoolReviews/Resources";

//Canada
import HECMontreal from "./components/SchoolReviews/Canada/HECMontreal/HECMontreal";
import York from "./components/SchoolReviews/Canada/York/York";
import Queens from "./components/SchoolReviews/Canada/Queens/Queens";

//Asia, SouthKorea
import Korea from "./components/SchoolReviews/Asia/SouthKorea/Korea/Korea";

//Australia
import Monash from "./components/SchoolReviews/Australia/Monash/Monash";
import Sydney from "./components/SchoolReviews/Australia/Sydney/Sydney";
import UNSWSydney from "./components/SchoolReviews/Australia/UNSWSydney/UNSWSydney";

//Europe
import Aarhus from "./components/SchoolReviews/Europe/Aarhus/Aarhus";
import Copenhagen from "./components/SchoolReviews/Europe/Copenhagen/Copenhagen";
import Lund from "./components/SchoolReviews/Europe/Lund/Lund";

//United States
import UMich from "./components/SchoolReviews/United States/UMich/UMich";
import SouthernCalifornia from "./components/SchoolReviews/United States/SouthernCalifornia/SouthernCalifornia";
import Washington from "./components/SchoolReviews/United States/Washington/Washington";
import UTAustin from "./components/SchoolReviews/United States/UTAustin/UTAustin";
import NYU from "./components/SchoolReviews/United States/NYU/NYU";

import AppAsk from "./AppAsk";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/MappingPlanner" exact component={MappingPlanner} />
          <Route path="/Backpack" exact component={Backpack} />
          <Route path="/SchoolReviews" exact component={Resources} />
          <Route path="/SchoolReviews/UMich" exact component={UMich} />
          <Route
            path="/SchoolReviews/SouthernCalifornia"
            exact
            component={SouthernCalifornia}
          />
          <Route
            path="/SchoolReviews/Washington"
            exact
            component={Washington}
          />
          <Route path="/SchoolReviews/NYU" exact component={NYU} />
          <Route path="/SchoolReviews/UTAustin" exact component={UTAustin} />
          <Route path="/SchoolReviews/Aarhus" exact component={Aarhus} />
          <Route
            path="/SchoolReviews/Copenhagen"
            exact
            component={Copenhagen}
          />
          <Route path="/SchoolReviews/Lund" exact component={Lund} />
          <Route path="/SchoolReviews/Monash" exact component={Monash} />
          <Route
            path="/SchoolReviews/UNSWSydney"
            exact
            component={UNSWSydney}
          />
          <Route path="/SchoolReviews/Sydney" exact component={Sydney} />
          <Route path="/SchoolReviews/Korea" exact component={Korea} />
          <Route
            path="/SchoolReviews/HECMontreal"
            exact
            component={HECMontreal}
          />
          <Route path="/SchoolReviews/York" exact component={York} />
          <Route path="/SchoolReviews/Queens" exact component={Queens} />
          <Route path="/Ask" component={AppAsk} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/**/
