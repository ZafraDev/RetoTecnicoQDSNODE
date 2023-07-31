import { Router } from 'express'
import segurosRoutes from './seguros.routes'
class Routes {
  public router: Router

  constructor () {
    this.router = Router()
    this.routes()
  }

  routes (): void {
    this.router.use('/seguros', segurosRoutes)
  }
}

export default Routes
