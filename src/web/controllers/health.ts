import { Request, Response } from 'express';

export class HealthController {

 	public heathCheck(request: Request, response: Response) {
 		response.status(200).json(`{ status: 'UP' }`);
 	}

}