import {createPinia} from 'pinia'

const pinia = createPinia()
const registerStore = (app) => {
  app.use(pinia)
}

export default registerStore
