import React, { useState, useEffect } from "react";
import { NavigateProvider } from "react-use-navigate";

import Input from "../components/Input/input";
import Popup from "../components/Popup/popup";
import Button from "../components/Button/button";
import Header from "../components/Header/header";
import Loader from "../components/Loader/loader";

import "./login.css";

import { fetchlogin } from "../services/integrationAPI";

import {
  getAuthorization,
  getUser,
  setAuthorization,
  setUser,
} from "../services/loginSession";

const Login = () => {
  let navigate = NavigateProvider();

  const [loading, setLoading] = useState(false);

  const [user] = useState(getUser());
  const [auth] = useState(getAuthorization());

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    fetchlogin(email, password)
      .then((res) => {
        setAuthorization(res.headers.authorization);
        setUser(res.data);
        setLoading(false);

        navigate("/home");
        setPopupIsVisible(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 400) {
          setPopupIsVisible(true);
        }

        setLoading(false);
      });
  };

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (auth && user) navigate("/home");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !auth && (
      <div className="login-page">
        <div className="login-page-container">
          <Header theme="light" />

          <div className="login-page-content">
            <Popup
              content="E-mail e/ou senha incorretos."
              visible={popupIsVisible}
            >
              <Input
                value={email}
                onChange={emailChanged}
                id="email"
                type="email"
                placeholder="Email"
              />

              <Input
                value={password}
                onChange={passwordChanged}
                id="password"
                type="password"
                placeholder="Senha"
              />
            </Popup>

            <Button
              onClick={handleLogin}
              className="login-button"
              disabled={loading}
            >
              {loading && (
                <>
                  <Loader loading={true} size="small"></Loader>
                  &nbsp;&nbsp;
                </>
              )}
              Entrar
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;