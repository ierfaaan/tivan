const BASE_URL = '/Setting'
export const SETTING_ENDPOINT = {
  GET_USER_SETTING: () => `${BASE_URL}/GetUserSetting`,
  GET_GLOBAL_SETTINGS: () => `${BASE_URL}/GetGlobalSettings`,
  RESTORE_DEFAULT: () => `${BASE_URL}/RestoreDefault`,
  UPDATE: () => `${BASE_URL}/Update`,
}
