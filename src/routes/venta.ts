import { Request, Response, Application } from 'express';

import { VentaController } from '../controllers/venta.controller';

export class VentaRoutes{
    public ventaController: VentaController = new VentaController();

    public routes(app: Application): void{
        app.route("/ventas").get(this.ventaController.getAllVenta)
        app.route("/venta/:id").get(this.ventaController.getOneVenta)
        app.route("/ventas").post(this.ventaController.createVenta)
        app.route("/actventa/:id").patch(this.ventaController.updateVenta)
        //app.route("/usuario:id").delete(this.usuarioController.deleteUsuario)
        app.route("/delventa/:id").patch(this.ventaController.deleteVenta)

    }
}