import axios, { AxiosRequestConfig } from 'axios'

import DEFAULT_HEADERS from './headers'

const config: AxiosRequestConfig = {
  // baseURL: process.env.REACT_APP_API,
  baseURL: 'https://api.boxlog.lumenspei.digital/',
  timeout: 30000,
  headers: DEFAULT_HEADERS,
}

const Axios = axios.create(config)

export default Axios
