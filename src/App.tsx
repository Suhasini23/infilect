import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import _ from "./Utils/lodashUtils";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Container/LoginPage';
import Layout from './Container/Layout/Layout';
import { setAuth } from './Actions/authActions';
import { IState } from './commanUtils/GenericInterfaces';

interface IMapDispatchToProps {
  setAuthData: (name: string, pass: string) => void;
}

interface IMapStateToComponentProps {
  loggedIn?: boolean
}

function mapDispatchToProps(dispatch: Dispatch<any>): IMapDispatchToProps {
  return {
    setAuthData: (name: string, pass: string) => dispatch(setAuth(name, pass))
  };
}

const mapStateToProps = (state: IState): IMapStateToComponentProps => ({
  loggedIn: _.get(state, "isLoggedIn", false)
});


const App: React.FC<any> = props => {
  const { setAuthData, loggedIn } = props;


  useEffect(() => {
    isLoggedIn();
  }, [loggedIn]);

  const isLoggedIn = () => {
    if (localStorage.getItem("name") != null && localStorage.getItem("pw") != null) {
      const name = localStorage.getItem("name");
      const pass = localStorage.getItem("pw");
      setAuthData(name, pass);
      return true;
    }
    return false;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/"
          render={() => {
            if (isLoggedIn()) {
              return <Layout />;
            } else {
              return <Redirect to="/login" />;
            }
          }} />
        <Route path="/image/*"
          render={() => {
            if (isLoggedIn()) {
              return <Layout />;
            } else {
              return <Redirect to="/login" />;
            }
          }} />
      </Switch>
    </BrowserRouter>
  );
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(App);