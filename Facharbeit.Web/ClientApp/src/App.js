import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import { Layout } from './components/Layout';
import './css/index.scss';
import {Dashboard} from "./components/Dashboard";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <Routes>
            {AppRoutes.map((route, index) => {
                const { element, requireAuth, ...rest } = route;
                return <Route key={index} {...rest} element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element} />;
            })}
        </Routes>
    );
  }
}
