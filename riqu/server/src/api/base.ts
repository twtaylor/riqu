import { NextFunction, Request, Response, Router } from "express";

/**
 * /api route
 *
 * @class Base API
 */
export class BaseApiRoute  {

   /**
     * Render an api call.
     *
     * @class BaseRoute
     * @method render
     * @param req {Request} The request object.
     * @param res {Response} The response object.
     * @param url {String} The url part to render.
     * @param body {any} Item for the JSON object
     * @return void
     */
    public renderJson(req: Request, res: Response, url: string, body?: any) {
      //add constants
      res.locals.BASE_URL = "/api" + url;

      // send our json request
      res.json(body);
    }
  }