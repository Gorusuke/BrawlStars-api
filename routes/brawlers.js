import { Router } from "express";
import { Brawlers } from '../controllers/brawlers.js'

export const brawlesRouter = Router();

brawlesRouter.get('/brawlers', Brawlers.getAllBrawlers)
brawlesRouter.get('/brawlers/:id', Brawlers.getBrawler)
brawlesRouter.get('/players/:id', Brawlers.getPlayer)
brawlesRouter.get('/players/:id/battleLog', Brawlers.getBattleLog)
brawlesRouter.get('/club/:id', Brawlers.getClub)

