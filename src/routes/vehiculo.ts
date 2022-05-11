import { Request, Response, Application, Router } from "express";

import { VehiculoController } from "../controllers/vehiculo.controller";

export class VehiculoRoutes {
    public vehiculoController: VehiculoController = new VehiculoController();

    public routes(app: Application): void {
        app.route("/vehiculo").get(this.vehiculoController.getAllVehiculo)
    }
}