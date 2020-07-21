import React, { useState, useEffect } from "react";
import AuthContext from "./components/Ask/Contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Ask/Components/Navbar";

import Homepage from "./components/Ask/Pages/Homepage/Homepage";
import Login from "./components/Ask/Pages/Auth/Login";
import Register from "./components/Ask/Pages/Auth/Register";
import CreateCategory from "./components/Ask/Pages/Category/CreateCategory";
import BrowseCategories from "./components/Ask/Pages/Category/BrowseCategories";
import ShowCategory from "./components/Ask/Pages/Category/ShowCategory";
import CreateForum from "./components/Ask/Pages/Forum/CreateForum";
import ShowForum from "./components/Ask/Pages/Forum/ShowForum";
import CreateThread from "./components/Ask/Pages/Thread/CreateThread";
import ShowThread from "./components/Ask/Pages/Thread/ShowThread";

function AppAsk() {
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

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("token", null);
  };

  return (
    <div>
      {isInitiated && (
        <AuthContext.Provider value={{ user, setUser, handleLogout }}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/Ask" exact component={Homepage} />
              <Route path="/auth/login">
                {!user ? <Login /> : <Redirect to="/" />}
              </Route>
              <Route path="/auth/register">
                {!user ? <Register /> : <Redirect to="/" />}
              </Route>
              <Route path="/category/create">
                {user ? <CreateCategory /> : <Redirect to="/auth/login" />}
              </Route>
              <Route path="/category/:id">
                <ShowCategory />
              </Route>
              <Route path="/category">
                <BrowseCategories />
              </Route>
              <Route path="/forum/create/:id">
                {user ? <CreateForum /> : <Redirect to="/auth/login" />}
              </Route>
              <Route path="/forum/:id">
                <ShowForum />
              </Route>
              <Route path="/thread/create/:id">
                {user ? <CreateThread /> : <Redirect to="/auth/login" />}
              </Route>
              <Route path="/thread/:id">
                <ShowThread />
              </Route>
            </Switch>
          </Router>
        </AuthContext.Provider>
      )}
    </div>
  );
}

export default AppAsk;
