import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'

const router = Router()

const authenticateController = new AuthenticateUserController()

router.post("/authenticate", authenticateController.handle )


export {router}