import { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slides from "./components/Slides/Slides";
import Table from "./components/Table/Table";
import axios from "./axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trade from "./components/Trade/Trade";
import Auth from "./components/auth/Auth";

import store from "./redux/store";
import { TOKEN, USER } from "./redux/actionTypes";
import { Provider } from "react-redux";

function App() {
  const unsubscribe = store.subscribe(() => {
    console.log("Store Changed !", store.getState());
  });

  useEffect(() => {
    /* Authentication */

    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        store.dispatch({
          type: TOKEN,
          token: null,
        });
        token = "";
      }

      // const tokenResponse = await axios.post(`/auth/tokenIsValid`, null, {
      //   headers: { "x-auth-token": token },
      // });

      const tokenResponse = await axios.post(`/auth/tokenIsValid`, null);

      if (tokenResponse.data) {
        const userRes = await axios.get("/auth/user/");
        // const userRes = await axios.get("/auth/user/", {
        //   headers: { "x-auth-token": token },
        // });
        store.dispatch({
          type: TOKEN,
          token: token,
        });
        store.dispatch({
          type: USER,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  /* Authentication */
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/trade/:id">
              <Trade />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Header />
              <Hero />
              <div className="centered">
                <Slides />
                <div className="table-wrapper">
                  <span className="centered-subText">
                    FIL Competition Has Now Concluded 11-13
                    <span className="more">&emsp;| &emsp; More {">"}</span>
                  </span>
                  <Table />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
