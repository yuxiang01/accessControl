import { BASE_URL, MAP_URL, TIME_OUT } from './config'
import Request from './request'

export const http = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const mapRequest = new Request({
  baseURL: MAP_URL,
  timeout: TIME_OUT
})
