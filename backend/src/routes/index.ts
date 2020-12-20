import { Router } from 'express'

import { wordsController as WordsController } from '../controllers/WordsController'

const router: Router = Router()

router.get('/sarita', WordsController.sarita)

export default router;
