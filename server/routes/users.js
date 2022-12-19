import express from 'express'
import { update, deleteUser, getUser, subscribe, unsubscribe, like, dislike } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()
router.put('/:id', verifyToken, update)
router.delete('/:id', verifyToken, deleteUser)
router.get('/find/:id', getUser)
router.put('/sub/:id', verifyToken, subscribe)
router.put('/unsub/:id', verifyToken, unsubscribe)
router.put('/like/:videoId', verifyToken, like)
router.put('/dislike/:videoId', verifyToken, dislike)

export default router
