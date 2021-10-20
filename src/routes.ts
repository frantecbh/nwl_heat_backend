import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

const authenticateController = new AuthenticateUserController()
const createMessageController = new CreateMessageController()


router.post("/authenticate", authenticateController.handle )

router.post("/messages", ensureAuthenticated, createMessageController.handle )


export {router}