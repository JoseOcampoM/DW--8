import { Request, Response } from "express";
import { Marca, MarcaI } from "../models/Marca";

export class MarcaController {

    public async getAllMarca(req: Request, res: Response){
        try {
            const marca: MarcaI[] = await Marca.findAll()
            res.status(200).json({marca})
        } catch (error) {

        }
    }

}