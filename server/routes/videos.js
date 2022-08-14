import express from 'express';
import {
	addVideo,
	addView,
	deleteVideo,
	getVideo,
	random,
	sub,
	trends,
	updateVideo,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// CREATE A VIDEO
router.post('/', verifyToken, addVideo);

// UPDATE A VIDEO
router.put('/:id', verifyToken, updateVideo);

// DELETE A VIDEO
router.delete('/:id', verifyToken, deleteVideo);

// GET A VIDEO
router.get('/find/:id', getVideo);

router.put('/view/:id', addView);
router.get('/trend', trends);
router.get('/random', random);
router.get('/sub', verifyToken, sub);

export default router;
