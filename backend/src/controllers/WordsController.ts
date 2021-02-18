import { Request, Response } from 'express'

class WordsController{

        public sarita (req: Request, res: Response){

            /* const readXlsxFile = require('read-excel-file/node');
            readXlsxFile('src/priv_resources/Notebook.xlsx').then( (rows: Array<Array<String>>) => {
                  rows.forEach(cell => {
                        console.log(cell[2])
                        console.log("-")
                        console.log(cell[0])
                  })
            }); */

            
            res.send({data: "2"});
      }
}

export const wordsController = new WordsController();