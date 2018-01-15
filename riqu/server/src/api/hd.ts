import { NextFunction, Request, Response, Router } from "express";
import { BaseApiRoute } from "./base";
import { IModel } from '../orm/models';
import { IHdModel } from '../orm/models/hd';

/**
 * /api/hd route
 *
 * @class Hd API
 */
export class HdRoute extends BaseApiRoute {

  protected model: IModel;

    /**
     * Create the routes.
     *
     * @class HdRoute
     * @method create 
     * @static
     */
    public static create(router: Router, model: IModel) {
      //log
      console.log("[HdRoute::create] Creating hds route.");

      var hdRoute = new HdRoute(model);

      //add all hds route
      router.get("/api/hds", (req: Request, res: Response, next: NextFunction) => {
        hdRoute.renderAllHds(req, res, next);
      });

      console.log("[HdRoute::create] Creating hd by query route.");

      // hds by state route
      router.get("/api/hd", (req: Request, res: Response, next: NextFunction) => {
        hdRoute.renderHdByQuery(req, res, next);
      }); 
    }
  
    /**
     * Constructor
     *
     * @class HdRoute
     * @constructor
     */
    constructor(model: IModel) {
      super();

      this.model = model;
    }
  
    /**
     * All hds api route
     *
     * @class HdRoute
     * @method renderAllHds
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public renderAllHds(req: Request, res: Response, next: NextFunction) {
      var that = this;

      this.renderModelWithParams(req, res, next, {}, 'Error in fetching all Hds');
    }

    /**
     * Hds by query route
     *
     * @class HdRoute
     * @method renderHdByQuery
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public renderHdByQuery(req: Request, res: Response, next: NextFunction) {
      var that = this;
      var stateCode:String = '';

      // process our state from the request
      if (req.query.state) {
        stateCode = String(req.query.state);
      }

      

      this.renderModelWithParams(req, res, next, { 'STABBR': stateCode }, 'Error in fetching state hds');
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
    private renderModelWithParams(req: Request, res: Response, next: NextFunction, findParams: any, errorMessage: String) {
      // retrieve all hds from our repository
      this.model.hd.find(findParams, (err: any, model:IHdModel[]) => {
          // render returned objects
          if (!err) {
            let body:IHdModel[] = model; 

            // render out our json
            this.renderJson(req, res, body);
          }
          else {
            console.error(errorMessage, err);
          }
      }); 
      }
  }