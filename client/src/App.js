import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import AppContext from "./components/Ask/Contexts/AppContext";
//import Main from "./components/Ask/Pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/SchoolReviews/About";
//import MappingPlanner from "./components/MappingPlanner/MappingPlanner";
//import Backpack from "./components/Backpack/Backpack";
//import Ask from "./components/Ask/";
import Aarhus from "./components/SchoolReviews/Aarhus";
import UMich from "./components/SchoolReviews/UMich";

function App() {
  const [user, setUser] = useState(null);
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("/api/auth/init", { params: { token } });
    const { user } = response.data;
    setUser(user);
    setIsInitiated(true);
  };

  return (
    <div>
      {isInitiated && (
        <AppContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/SchoolReviews" exact component={About} />
            <Route path="/SchoolReviews/UMich" exact component={UMich} />
            <Route path="/SchoolReviews/Aarhus" exact component={Aarhus} />
            <Footer />
          </BrowserRouter>
        </AppContext.Provider>
      )}
    </div>
  );
}

export default App;
