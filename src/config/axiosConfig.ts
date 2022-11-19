import axios from 'axios'
import { BASE_URL, TIME_OUT } from '@/common/constants/api'

export const tivanAxios = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {},
})
