const BASE_URL = '/Acount'
export const ACOUNT_ENDPOINT = {
  CHECK_FOR_AUTH_VALIDITY: () => `${BASE_URL}/CheckForAuthValidity`,
  GET_CURRENT_USER_LAST_SIGNIN_SIGNOUT_DATE: () =>
    `${BASE_URL}/GetCurrentUserLastSignInSignOutDate`,
  GET_USER_SIGNIN_SIGNOUT_ACTIVITY_REPORT: () =>
    `${BASE_URL}/GetUserSignInSignOutActivityReport`,
  LOG_OFF: () => `${BASE_URL}/LogOff`,
}
