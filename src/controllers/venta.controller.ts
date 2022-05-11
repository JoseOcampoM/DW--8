import { Request, Response } from "express";
import { Venta, VentaI } from "../models/Venta";

export class VentaController {

    public async getAllVenta(req: Request, res: Response){
        try {
            const venta: VentaI[] = await Venta.findAll()
            res.status(200).json({venta})
        } catch (error) {

        }
    }

    public async getOneVenta(req: Request, res: Response){
        
    }
    public async createVenta(req: Request, res: Response){

    }
    public async updateVenta(req: Request, res: Response){

    }
    public async deleteVenta(req: Request, res: Response){

    }
}