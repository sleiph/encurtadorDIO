import { Request, Response } from 'express'
import shortId from 'shortid'
import { updateExternalModuleReference } from 'typescript'

import { config } from '../config/Constants'

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body
    const hash = shortId.generate()
    const shortURL = `${config.API_URL}/${hash}`

    res.json( { originURL, hash, shortURL })
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params
    const url = {
      "originURL": "https://cloud.mongodb.com/v2/6171fef12bb7207ef33423ff#clusters",
      "hash": "CvxQXo7RM",
      "shortURL": "http://localhost:5000/CvxQXo7RM"
    }

    if (url) {
      res.redirect(url.originURL)
      return
    }

    res.status(400).json({ error: 'URL não encontrada.' })
  }
}