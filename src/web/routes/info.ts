import { Request, Response, Application } from "express";

import { InfoController } from "../controllers";


export class InfoRoutes {

  public infoController: InfoController = new InfoController();

    public routes(app: Application): void {

        app.route('/info')
          .get(this.infoController.getInfo);


               
    }
}