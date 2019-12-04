import { Request } from "express";

export class PaginationUtils {

	/**
	 * Sets the pagination params to default if none specified.
	 * @param {Request} request express request object
	 */
	static defaultPaginationParams(request: Request) {

		if(!request.query.page)
      		request.query.page = 1;

    	if(!request.query.pageSize)
      		request.query.pageSize = 10;
	}
}