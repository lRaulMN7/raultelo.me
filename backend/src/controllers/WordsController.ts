import { Request, Response } from 'express'

class WordsController{

        public sarita (req: Request, res: Response){
            res.send({data: "2"});
      }
}

export const wordsController = new WordsController();