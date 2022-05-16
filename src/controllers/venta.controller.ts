import { Request, Response } from 'express';
import { Venta, VentaI } from '../models/Venta';

export class VentaController{
    public async getAllVenta(req: Request, res: Response){
        try{
            const venta: VentaI[] = await Venta.findAll(
                {
                    where: {activo : true}
                }
            )  //select * from usuarios;
            res.status(200).json({venta})
        } catch(error){

        }
    }

    public async getOneVenta(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const venta: VentaI | null = await Venta.findOne(
                {
                    where: {
                        id: idParam,
                        activo: true

                    }
                }
            )

            res.status(200).json(venta)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createVenta(req: Request, res: Response){
        const {
            fechaVenta,
            valorTotal,
            tipoPago,
            usuarioId,
            activo,
        } = req.body;
        try{
            let body:VentaI = {
                fechaVenta,
                valorTotal,
                tipoPago,
                usuarioId,
                activo
            }

            const user = await Venta.create({...body});
            res.status(200).json({user})
        } catch(error){

        }
    }


    public async updateVenta(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            id,
            fechaVenta,
            valorTotal,
            tipoPago,
            usuarioId,
            activo
        } = req.body

        try{
            let body:VentaI = {
                fechaVenta,
                valorTotal,
                tipoPago,
                usuarioId,
                activo
            }

            const userExist: VentaI | null = await Venta.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk }
            //     }
                
            // );

            if(!userExist) return res.status(500).json({msg:"El usuario no esiste"})
            await Venta.update(
                body, {
                    where: {id:pk}
                }
            ); //select update from usuarios where id=pk

        } catch(error){

        }

        const user: VentaI | null = await Venta.findByPk(pk);
        if (user) return res.status(200).json({user})

    }

    public async deleteVenta(req: Request, res: Response){
        const { id:pk } = req.params;

        /*try{
            const ventaExist | null = await Venta.findByPk(pk);
            if(!ventaExist) return  res.status(500).json({msg: "El registro no existe"})
            await Venta.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg: "Usuario Eliminado"})
        }catch(error){
        }*/
        try{
            const ventaExist: VentaI | null = await Venta.findByPk(pk);
            if(!ventaExist) return  res.status(500).json({msg: "El Registro no exixte en Ventas"})
            await Venta.update(
                {
                    activo: false,
                },
                {
                    where: {id:pk}
                }
            ); //select update from usuarios where id=pk

            return res.status(200).json({msg: "Registro Eliminado de Ventas"});


        }catch(error){
            
        }
        
    }


}