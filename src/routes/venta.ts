import { Request, Response, Application, Router } from "express";

import { VentaController } from "../controllers/venta.controller";

export class VentaRoutes {
    public ventaController: VentaController = new VentaController();

    public routes(app: Application): void {
        app.route("/venta").get(this.ventaController.getAllVenta)
        // app.route("/venta").get(this.ventaController.getOneVenta)
        // app.route("/venta").post(this.ventaController.createVenta)
        // app.route("/venta").patch(this.ventaController.updateVenta)
        // app.route("/venta").delete(this.ventaController.deleteVenta)
    }
}