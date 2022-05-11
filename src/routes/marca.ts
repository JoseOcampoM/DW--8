import { Request, Response, Application, Router } from "express";

import { MarcaController } from "../controllers/marca.controller";

export class MarcaRoutes {
    public ventaController: MarcaController = new MarcaController();

    public routes(app: Application): void {
        app.route("/marca").get(this.ventaController.getAllMarca)
    }
}