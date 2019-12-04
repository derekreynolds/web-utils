import { Request, Response, Application } from "express";

import { HealthController } from "../controllers/health";


export class HealthRoutes {

  public healthController: HealthController = new HealthController();

    public routes(app: Application): void {

        app.route('/health')
          .get(this.healthController.heathCheck);


               
    }
}