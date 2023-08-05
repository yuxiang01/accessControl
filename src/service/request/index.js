import axios from 'axios'

class Request {
  instance

  constructor(config) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
        (config) => {
          // TODO: add Token/Loading...
          return config
        },
        (err) => err
    )
    this.instance.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
        config.interceptors?.responseSuccessFn,
        config.interceptors?.responseFailureFn
    )
    this.instance.interceptors.response.use(
        (res) => {
          // TODO: remove Loading...
          return res.data
        },
        (err) => {
          // TODO: remove Loading...
          return err
        }
    )
  }

  request(config) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise((resolve, reject) => {
      this.instance
          .request(config)
          .then((res) => {
            if (config.interceptors?.responseSuccessFn) {
              res = config.interceptors.responseSuccessFn(res)
            }
            resolve(res)
          })
          .catch((err) => reject(err))
    })
  }

  get(config) {
    return this.request({...config, method: 'get'})
  }

  post(config) {
    return this.request < T > {...config, method: 'post'}
  }
}

export default Request
