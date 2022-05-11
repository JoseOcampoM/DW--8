import { Request, Response } from "express";
import { TipoVehiculo, TipoVehiculoI } from "../models/TipoVehiculo";

export class TipoVehiculoController {

    public async getAllTipovehiculo(req: Request, res: Response){
        try {
            const tipovehiculo: TipoVehiculoI[] = await TipoVehiculo.findAll()
            res.status(200).json({tipovehiculo})
        } catch (error) {

        }
    }

}