import React from 'react'
import { Component } from 'react';
import authService from './AuthorizeService';
import { AuthenticationResultStatus } from './AuthorizeService';
import { LoginActions, QueryParameterNames, ApplicationPaths } from './ApiAuthorizationConstants';

// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: undefined
    };
  }

  componentDidMount() {
    const action = this.props.action;
    switch (action) {
      case LoginActions.Login:
        //this.login(this.getReturnUrl());
        break;
      case LoginActions.LoginCallback:
        this.processLoginCallback();
        break;
      case LoginActions.LoginFailed:
        const params = new URLSearchParams(window.location.search);
        const error = params.get(QueryParameterNames.Message);
        this.setState({ message: error });
        break;
      case LoginActions.Profile:
        this.redirectToProfile();
        break;
      case LoginActions.Register:
        this.redirectToRegister();
        break;
      default:
        throw new Error(`Invalid action '${action}'`);
    }
  }

  render() {
    const action = this.props.action;
    const { message } = this.state;

    if (!!message) {
      return <div>{message}</div>
    } else {
      switch (action) {
        case LoginActions.Login:
          return (
          <div className="row">
            <div className="col-md-4">
              <section>
                <form id="account" method="post" action="api/login">
                  <h2>Use a local account to log in.</h2>
                  <hr/>
                  <div className="form-floating">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input name="Email" className="form-control" autoComplete="username" aria-required="true"/>
                    
                  </div>
                  <div className="form-floating">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input name="Password" className="form-control" autoComplete="current-password"
                           aria-required="true"/>
                  </div>
                  <div>
                    <div className="checkbox">
                      <label for="RememberMe" className="form-label">
                        <input className="form-check-input" name="RememberMe"/>
                        RememberMe
                      </label>
                    </div>
                  </div>
                  <div>
                    <button id="login-submit" type="submit" className="w-100 btn btn-lg btn-primary">Log in</button>
                  </div>
                  <div>
                    <p>
                      <a id="forgot-password" href="./ForgotPassword">Forgot your password?</a>
                    </p>
                    <p>
                      <a href="./Register">Register as a new user</a>
                    </p>
                    <p>
                      <a id="resend-confirmation" href="./ResendEmailConfirmation">Resend email confirmation</a>
                    </p>
                  </div>
                </form>
              </section>
            </div>
          </div>
          );
        case LoginActions.LoginCallback:
          return (<div>Processing login callback</div>);
        case LoginActions.Profile:
        case LoginActions.Register:
          return (<div></div>);
        default:
          throw new Error(`Invalid action '${action}'`);
      }
    }
  }

  async login(returnUrl) {
    const state = { returnUrl };
    const result = await authService.signIn(state);
    switch (result.status) {
      case AuthenticationResultStatus.Redirect:
        break;
      case AuthenticationResultStatus.Success:
        await this.navigateToReturnUrl(returnUrl);
        break;
      case AuthenticationResultStatus.Fail:
        this.setState({ message: result.message });
        break;
      default:
        throw new Error(`Invalid status result ${result.status}.`);
    }
  }

  async processLoginCallback() {
    const url = window.location.href;
    const result = await authService.completeSignIn(url);
    switch (result.status) {
      case AuthenticationResultStatus.Redirect:
        // There should not be any redirects as the only time completeSignIn finishes
        // is when we are doing a redirect sign in flow.
        throw new Error('Should not redirect.');
      case AuthenticationResultStatus.Success:
        await this.navigateToReturnUrl(this.getReturnUrl(result.state));
        break;
      case AuthenticationResultStatus.Fail:
        this.setState({ message: result.message });
        break;
      default:
        throw new Error(`Invalid authentication result status '${result.status}'.`);
    }
  }

  getReturnUrl(state) {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get(QueryParameterNames.ReturnUrl);
    if (fromQuery && !fromQuery.startsWith(`${window.location.origin}/`)) {
      // This is an extra check to prevent open redirects.
      throw new Error("Invalid return url. The return url needs to have the same origin as the current page.")
    }
    return (state && state.returnUrl) || fromQuery || `${window.location.origin}/`;
  }

  redirectToRegister() {
    this.redirectToApiAuthorizationPath(`${ApplicationPaths.IdentityRegisterPath}?${QueryParameterNames.ReturnUrl}=${encodeURI(ApplicationPaths.Login)}`);
  }

  redirectToProfile() {
    this.redirectToApiAuthorizationPath(ApplicationPaths.IdentityManagePath);
  }

  redirectToApiAuthorizationPath(apiAuthorizationPath) {
    const redirectUrl = `${window.location.origin}/${apiAuthorizationPath}`;
    // It's important that we do a replace here so that when the user hits the back arrow on the
    // browser they get sent back to where it was on the app instead of to an endpoint on this
    // component.
    window.location.replace(redirectUrl);
  }

  navigateToReturnUrl(returnUrl) {
    // It's important that we do a replace here so that we remove the callback uri with the
    // fragment containing the tokens from the browser history.
    window.location.replace(returnUrl);
  }
}
