import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { MunniesController } from './controllers/MunniesController.js';
const USE_ROUTER = false

class App {

  MunniesController = new MunniesController()

  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

const app = new App()
// @ts-ignore
window.app = app
