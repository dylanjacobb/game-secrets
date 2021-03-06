import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Navbar from "./components/Navbar";
import FindSecretsPage from "./pages/FindSecrets";
import ProfilePage from "./pages/Profile";
import FullPost from './pages/FullPost'
import "./App.css";
import AuthRoute from "./components/AuthRoute";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";
// pass the user object into the state for the entire app
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const localUser = JSON.parse(sessionStorage.getItem("user"));
    // console.log("localUser: ", localUser);
    if (localUser) setUser(localUser);
  }, []);

  const changeUser = (userInfo) => {
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);
  };
  // const setPost = (userInfo) => {
  //   sessionStorage.setItem("posts", JSON.stringify(userInfo));
  //   setUser(userInfo)
  // }

  return (
    <>
    <Router>
      <Navbar changeUser={changeUser} />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/home" component={HomePage} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <LoginPage {...props} user={user} changeUser={changeUser} />
          )}
        />
        <AuthRoute
          exact
          path="/findsecrets"
          user={user}
          component={FindSecretsPage}
        />
        <AuthRoute exact path="/profile" user={user} component={ProfilePage} />
        <AuthRoute exact path="/post/:id" user={user} component={FullPost} />
        <AuthRoute exact path="/createpost" user={user} component={CreatePost} changeUser={changeUser}/>
        <AuthRoute exact path="/" user={user} component={HomePage} />
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
