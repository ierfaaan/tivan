import { tivanAxios } from '@/config/axiosConfig'
import { globalSettingDto } from './dto'
import { GlobalSettingResponseType } from './types'

export const GetSetting = async () => {
  const { data } = await tivanAxios.get<GlobalSettingResponseType>('/globalSetting')
  return globalSettingDto(data)
}
