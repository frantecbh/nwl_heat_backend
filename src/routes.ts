import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { Get3LastMessagesController } from './controllers/GetLast3MessagesController'
import { ProfileUserController } from './controllers/ProfileUserController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

const authenticateController = new AuthenticateUserController()
const createMessageController = new CreateMessageController()

const get3LastMessagesController = new Get3LastMessagesController()
const profileUserController = new ProfileUserController()



Get3LastMessagesController


router.post("/authenticate", authenticateController.handle )

router.post("/messages", ensureAuthenticated, createMessageController.handle )

router.get("/messages/last3", get3LastMessagesController.handle);

router.get("/profile", ensureAuthenticated, profileUserController.handle);


export {router}