import express from 'express'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import './config/database'
import Routes from './routes'
import errorMiddleware from './middleware/error.middleware'

class Server {
  public app: express.Application
  constructor () {
    this.app = express()
    this.config()
    this.routes()
  }

  private config (): void {
    this.app.set('port', process.env.PORT || 3000)
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  private routes (): void {
    const routes = new Routes()
    this.app.use('/api', routes.router)
    this.app.use(errorMiddleware)
  }

  public start (): void {
    this.app.listen(this.app.get('port'), () => console.log(`Server started on Port: ${this.app.get('port')}`))
  }
}

export default Server
