import getPageTitle from '@/utils/get-page-title'
import NProgress from 'nprogress' // progress bar
import router from './router'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to: any, from, next: any) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  next()
})

router.afterEach(() => {
  NProgress.done()
})
