import { useQuery } from '@tanstack/react-query'
import { SETTING_ENDPOINT } from './constants'
import { GetSetting } from './service'

export const useSetting = () => {
  return useQuery([() => SETTING_ENDPOINT.GET_GLOBAL_SETTINGS()], GetSetting)
}
