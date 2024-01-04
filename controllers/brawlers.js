import BrawlStars from "brawlstars-api-nodejs";

const TOKEN = process.env.TOKEN
const api = new BrawlStars.API(TOKEN)

export class Brawlers {
  static async getAllBrawlers (req, res) {
    const allBrawlers = await api.brawlers()
    res.send(allBrawlers)
  }

  static async getBrawler(req, res) {
    const { id } = req.params;
    try {
      const brawler = await api.brawler(id)
      res.send(brawler)
    } catch (error) {
      res.json({message: 'brawler not found or wrong id'})
    }
  }

  static async getPlayer(req, res) {
    const { id } = req.params;
    console.log(id)
    try {
      const player = await api.player(id)
      res.send(player)
    } catch (error) {
      res.json({message: 'player not found or wrong id'})
    }
  }

  static async getBattleLog(req, res) {
    const { id } = req.params;
    try {
      const battleLog = await api.battleLog(id)
      res.send(battleLog)
    } catch (error) {
      res.json({message: 'battleLog not found or wrong id'})
    }
  }

  static async getClub(req, res) {
    const { id } = req.params;
    try {
      const club = await api.club(id)
      res.send(club)
    } catch (error) {
      res.json({message: 'club not found or wrong id'})
    }
  }
  
}