import { StateTy } from '~/store'

const getters = {
  sidebar: (state: StateTy) => state.app.sidebar
  // device: (state: StateTy) => state.app.device,
}
export default getters
