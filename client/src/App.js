import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import AppContext from "./Contexts/AppContext";
import Home from "./Pages/Home";
import "./Components/Page/Page.css";



function App() {
  const [user, setUser] = useState(null);
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get('/api/auth/init', {params: {token}});
    const {user} = response.data;
    setUser(user);
    setIsInitiated(true);
  };
  
  return (
    <div>
      {isInitiated && (
        <AppContext.Provider value={{ user, setUser }}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Router>
        </AppContext.Provider>
      )}
    </div>
  );
}

export default App;
