import { Request, Response } from "express";
import { Vehiculo, VehiculoI } from "../models/Vehiculo";

export class VehiculoController {

    public async getAllVehiculo(req: Request, res: Response){
        try {
            const vehiculo: VehiculoI[] = await Vehiculo.findAll()
            res.status(200).json({vehiculo})
        } catch (error) {

        }
    }
}