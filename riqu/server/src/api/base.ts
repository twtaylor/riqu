import { NextFunction, Request, Response, Router } from "express";

import { IModel } from '../orm/models';

/**
 * /api route
 *
 * @class Base API
 */
export class BaseApiRoute  {

  protected model: IModel;

  /**
     * Constructor
     *
     * @class HdRoute
     * @constructor
     */
    constructor(model: IModel) {
      this.model = model;
    }

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
    public renderJson(req: Request, res: Response, body?: any) {
      //add constants
      //res.locals.BASE_URL = "/api";

      // send our json request
      res.json(body);
    }

    /**
     * This is a helper function to help with the render of certain find params
     *
     * @class HdRoute
     * @method renderModelWithParams
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    protected renderModelWithParams<TModel>(req: Request, res: Response, next: NextFunction, findParams: any, errorMessage: String) {
      // retrieve all hds from our repository
      this.model.hd.find(findParams, (err: any, model:TModel[]) => {
          // render returned objects
          if (!err) {
            let body:TModel[] = model; 

            // render out our json
            this.renderJson(req, res, body);
          }
          else {
            console.error(errorMessage, err);
          }
      }); 
    }
  }