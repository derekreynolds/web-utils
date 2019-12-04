import { Request, Response } from 'express';

import * as config from 'config';

export class InfoController {

 	public getInfo(request: Request, response: Response) {
 		response.status(200).json(`{ env: '${config.util.getEnv('NODE_ENV')}', applicationName: '${config.get<string>('instance.app')}'}`);
 	}

}