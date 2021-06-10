import React, { useState } from "react";
import Context from "../../context";
import engText from "../Data/engText";
import nepaliText from "../Data/nepaliTxt";
import Error from "./error";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  BirthRegistrationCom,
  CovidDataCom,
  DashboardCom,
  DeathRegistrationFormCom,
  GalleryCom,
  HomeCom,
  HouseRegistrationCom,
  IntroductionCom,
  MarriageRegistrationFormCom,
  MigrationRegistrationFormCom,
  NoticeCom,
  ProgramCom,
  ReportCom,
  SignInCom,
  WelcomeCom,
} from "./commonExport";

/**
 * @author
 * @function Router
 **/

const Router = (props) => {
  const DEFAULT_TEXT_CONTENT = engText;
  const DEFAULT_LANGUAGE_TOGGLE = false;

  const [textContent, setTextContent] = useState(DEFAULT_TEXT_CONTENT);
  const [languageToggle, setLanguageToggle] = useState(DEFAULT_LANGUAGE_TOGGLE);

  function handleSwitch() {
    languageToggle === false
      ? setTextContent(nepaliText)
      : setTextContent(engText);
    setLanguageToggle(!languageToggle);
  }

  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{ textContent, handleSwitch }}>
          <Switch>
            <Route exact path="/" component={HomeCom} />
            <Route exact path="/program" component={ProgramCom} />
            <Route exact path="/notice" component={NoticeCom} />
            <Route exact path="/introduction" component={IntroductionCom} />
            <Route exact path="/Covid" component={CovidDataCom} />
            <Route exact path="/report" component={ReportCom} />
            <Route exact path="/Gallery" component={GalleryCom} />
            <Route
              exact
              path="/birthregistration"
              component={BirthRegistrationCom}
            />
            <Route exact path="/registration/welcome" component={WelcomeCom} />
            <Route exact path="/admin/signin" component={SignInCom} />
            <Route exact path="/dashboard" component={DashboardCom} />
            <Route
              exact
              path="/deathregistration"
              component={DeathRegistrationFormCom}
            />
            <Route
              exact
              path="/marriageregistration"
              component={MarriageRegistrationFormCom}
            />
            <Route
              exact
              path="/migrationregistration"
              component={MigrationRegistrationFormCom}
            />
            <Route
              exact
              path="/houseregistration"
              component={HouseRegistrationCom}
            />
            <Route component={Error} />
          </Switch>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
};

export default Router;
