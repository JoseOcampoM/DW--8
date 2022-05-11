import { Request, Response, Application, Router } from "express";

import { TipoVehiculoController } from "../controllers/tipovehiculo.controller";

export class TipoVehiculoRoutes {
    public tipovehiculoController: TipoVehiculoController = new TipoVehiculoController();

    public routes(app: Application): void {
        app.route("/tipovehiculo").get(this.tipovehiculoController.getAllTipovehiculo)
    }
}