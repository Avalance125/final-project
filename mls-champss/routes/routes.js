import express from 'express';
import champion from '../controllers/champion.controllers.js';

const router = express.Router();

router.post("/champions", champion.addOne);
router.get("/champions", champion.getAll);
router.get("/champions/:id", champion.getOne);
router.put("/champions/:id", champion.updateOne);
router.get('/', champion.getHomePage);
router.get('/page1', champion.getPage1);


export default router;