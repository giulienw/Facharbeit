export const ApplicationName = 'Facharbeit.Web';

export const QueryParameterNames = {
  ReturnUrl: 'returnUrl',
  Message: 'message'
};

export const LogoutActions = {
  LogoutCallback: 'logout-callback',
  Logout: 'logout',
  LoggedOut: 'logged-out'
};

export const LoginActions = {
  Login: 'login',
  LoginCallback: 'login-callback',
  LoginFailed: 'login-failed',
  Profile: 'profile',
  Register: 'register'
};

export const ApplicationPaths = {
  DefaultLoginRedirectPath: '/',
  ApiAuthorizationClientConfigurationUrl: `_configuration/${ApplicationName}`,
  Login: `${LoginActions.Login}`,
  LoginFailed: `${LoginActions.LoginFailed}`,
  LoginCallback: `${LoginActions.LoginCallback}`,
  Register: `${LoginActions.Register}`,
  Profile: `${LoginActions.Profile}`,
  LogOut: `${LogoutActions.Logout}`,
  LoggedOut: `${LogoutActions.LoggedOut}`,
  LogOutCallback: `${LogoutActions.LogoutCallback}`,
  IdentityRegisterPath: 'auth/Register',
  IdentityManagePath: 'auth/Manage'
};
