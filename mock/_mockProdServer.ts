import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// const modules = import.meta.globEager('./*.ts')
//
// const mockModules: any[] = []
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return
//   }
//   mockModules.push(...modules[key].default)
// })

import articleMock from '../mock/article'

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  const mockModules = [
    ...articleMock
  ]
  createProdMockServer(mockModules)
}
